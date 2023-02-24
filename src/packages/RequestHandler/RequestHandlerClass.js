import TokenHandler from "@/packages/RequestHandler/TokenHandler";
import StorageHandlerClass from "@/packages/StorageHandler/StorageHandlerClass";
import axios, { AxiosError } from "axios";
import { ResultCode } from "@/packages/ResultCode";
export default class RequestHandlerClass {
    tokenHandler;
    storageHandler;
    axiosInst;
    constructor() {
        this.storageHandler = new StorageHandlerClass();
        this.tokenHandler = new TokenHandler(this.storageHandler);
        this.axiosInst = axios.create({
            baseURL: 'http://localhost:8090/',
            headers: {
                Accept: "*/*"
            },
            withCredentials: true
        });
    }
    async makeRequest(request) {
        const { url, body = {}, method = "GET", responseType = "json" } = request;
        const config = {
            responseType: responseType
        };
        const requestBody = { ...this.tokenHandler.getTokens(), ...body };
        // TODO: don't send update token!
        console.log(requestBody);
        let req;
        if (method == "GET") {
            config.params = requestBody;
            req = this.axiosInst.get(url, config);
        }
        if (method == "POST") {
            req = this.axiosInst.post(url, requestBody, config);
        }
        if (!req)
            return { code: ResultCode.CONFIGURATION_ERROR };
        try {
            const result = await req;
            return { code: ResultCode.OK, result: result.data };
        }
        catch (err) {
            if (err instanceof AxiosError) {
                if (err.response) {
                    console.log(err.response);
                    if ((err.response.data instanceof Object) && (err.response.data.jarvis_exception !== undefined)) {
                        // check token expired and update
                        if (err.response.data.jarvis_exception === ResultCode.EXPIRED_TOKEN) {
                            const updRes = await this.updateToken();
                            if (updRes.code !== ResultCode.OK)
                                return { code: updRes.code, error: updRes.error };
                            return await this.makeRequest(request);
                        }
                        return { code: err.response.data.jarvis_exception, error: err.response.data };
                    }
                    return { code: ResultCode.FAIL, error: { description: err.response.statusText } };
                }
                else if (err.request) {
                    return { code: ResultCode.CONNECTION_ERROR, error: { description: err.request } };
                }
                else {
                    return { code: ResultCode.CONFIGURATION_ERROR, error: { description: err.message } };
                }
            }
            return { code: ResultCode.FAIL, error: { description: "Unknown error" } };
        }
    }
    setTokens(tokens) {
        return this.tokenHandler.setTokens(tokens);
    }
    getStorageHandler() {
        return this.storageHandler;
    }
    async updateToken() {
        const request = { url: "/update/update_all_tokens" };
        const response = await this.makeRequest(request);
        if (response.code == ResultCode.OK && response.result !== undefined) {
            const tokens = response.result;
            this.setTokens(tokens);
        }
        return response;
    }
}
