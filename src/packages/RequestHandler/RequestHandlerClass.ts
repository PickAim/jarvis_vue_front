import IRequestHandler from "@/packages/RequestHandler/IRequestHandler";
import {RequestData, ResponseData, ResultCodes, TokenData} from "@/packages/Entities";
import TokenHandler from "@/packages/RequestHandler/TokenHandler";
import IStorageHandler from "@/packages/RequestHandler/IStorageHandler";
import StorageHandlerClass from "@/packages/StorageHandler/StorageHandlerClass";
import axios, {AxiosError, AxiosInstance, AxiosRequestConfig} from "axios";

export default class RequestHandlerClass implements IRequestHandler{
    tokenHandler: TokenHandler
    storageHandler: IStorageHandler
    axiosInst: AxiosInstance

    constructor() {
        this.storageHandler = new StorageHandlerClass()
        this.tokenHandler = new TokenHandler(this.storageHandler)
        this.axiosInst = axios.create({
            baseURL: 'http://localhost:8090',
            headers: {}
        })
    }

    async makeRequest(request: RequestData): Promise<ResponseData> {
        const config: AxiosRequestConfig = {
            responseType: request.responseType
        }
        const requestBody = {...this.tokenHandler.getTokens(), ...request.body}

        let req;
        if (request.method == "GET") {
            config.params = requestBody;
            req = this.axiosInst.get(request.url, config)
        }
        if (request.method == "POST") {
            req = this.axiosInst.post(request.url, requestBody, config)
        }

        if (!req)
            return new ResponseData(ResultCodes.FAIL);

        try {
            const result = await req;
            // TODO: unwrap result (result code + result body (token + result))
            return new ResponseData(ResultCodes.OK, result);
        }
        catch(err){
            if(err instanceof AxiosError) {
                // TODO: test connection and configuration error
                if (err.response) {
                    // TODO: check is data an object
                    // TODO: add update token
                    return new ResponseData(err.response.status, (err.response.data as object));
                } else if (err.request) {
                    return new ResponseData(ResultCodes.CONNECTION_ERROR, {error: err.request});
                } else {
                    return new ResponseData(ResultCodes.CONFIGURATION_ERROR, {error: err.message});
                }
            }
            return new ResponseData(ResultCodes.FAIL);
        }
    }

    setTokens(tokens: TokenData): ResultCodes {
        return this.tokenHandler.setTokens(tokens);
    }

    getStorageHandler(): IStorageHandler {
        return this.storageHandler;
    }

    updateToken(): void {
        // TODO: write update token request
        console.log()
    }
}