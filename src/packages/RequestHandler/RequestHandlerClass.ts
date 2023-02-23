import IRequestHandler from "@/packages/RequestHandler/IRequestHandler";
import {RequestData, ResponseData, TokenData} from "@/packages/Objects";
import TokenHandler from "@/packages/RequestHandler/TokenHandler";
import IStorageHandler from "@/packages/RequestHandler/IStorageHandler";
import StorageHandlerClass from "@/packages/StorageHandler/StorageHandlerClass";
import axios, {AxiosError, AxiosInstance, AxiosRequestConfig} from "axios";
import {ResultCode} from "@/packages/ResultCode";

export default class RequestHandlerClass implements IRequestHandler{
    tokenHandler: TokenHandler
    storageHandler: IStorageHandler
    axiosInst: AxiosInstance

    constructor() {
        this.storageHandler = new StorageHandlerClass()
        this.tokenHandler = new TokenHandler(this.storageHandler)
        this.axiosInst = axios.create({
            baseURL: 'http://localhost:8090/',
            headers: {
                Accept: "*/*"
            },
            withCredentials: true
        })
    }

    async makeRequest<K>(request: RequestData):
        Promise<ResponseData<K>> {
        const {url, body = {}, method = "GET", responseType = "json"} = request;

        const config: AxiosRequestConfig = {
            responseType: responseType
        }
        const requestBody = {...this.tokenHandler.getTokens(), ...body}
        // TODO: don't send update token!

        console.log(requestBody);

        let req;
        if (method == "GET") {
            config.params = requestBody;
            req = this.axiosInst.get<K>(url, config)
        }
        if (method == "POST") {
            req = this.axiosInst.post<K>(url, requestBody, config)
        }
        if (!req)
            return {code: ResultCode.CONFIGURATION_ERROR}
        try {
            const result = await req;
            return {code: ResultCode.OK, result: result.data};
        }
        catch(err){
            if(err instanceof AxiosError) {
                if (err.response) {
                    console.log(err.response)
                    if ((err.response.data instanceof Object) && (err.response.data.jarvis_exception !== undefined)) {
                        // check token expired and update
                        if (err.response.data.jarvis_exception === ResultCode.EXPIRED_TOKEN){
                            const updRes = await this.updateToken();
                            if(updRes.code !== ResultCode.OK)
                                return {code: updRes.code, error: updRes.error};
                            return await this.makeRequest<K>(request)
                        }
                        return {code: err.response.data.jarvis_exception, error: err.response.data};
                    }
                    return {code: ResultCode.FAIL, error: {description: err.response.statusText}};
                }else if (err.request) {
                    return {code: ResultCode.CONNECTION_ERROR, error: {description: err.request}};
                } else {
                    return {code: ResultCode.CONFIGURATION_ERROR, error: {description: err.message}};
                }
            }
            return {code: ResultCode.FAIL, error: {description: "Unknown error"}};
        }
    }

    setTokens(tokens: TokenData): ResultCode {
        return this.tokenHandler.setTokens(tokens);
    }

    getStorageHandler(): IStorageHandler {
        return this.storageHandler;
    }

    async updateToken(): Promise<ResponseData<object>> {
        const request: RequestData = {url: "/update/update_all_tokens"};
        const response = await this.makeRequest<TokenData>(request);
        if(response.code == ResultCode.OK && response.result !== undefined){
            const tokens = response.result;
            this.setTokens(tokens);
        }
        return response;
    }
}
