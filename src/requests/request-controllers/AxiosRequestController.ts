import type IRequestController from "@/requests/request-actions/interfaces/IRequestController";
import type {RequestData, ResponseData, TokenData} from "@/types/DataTypes";
import axios, {AxiosError} from "axios";
import type {AxiosInstance, AxiosRequestConfig} from 'axios';
import {ResultCode} from "@/types/ResultCode";
import type IAuthStore from "@/requests/request-actions/interfaces/IAuthStore";

export default class AxiosRequestController implements IRequestController{
    axiosInst: AxiosInstance

    constructor(private authStore: IAuthStore) {
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
        const requestBody = {...this.authStore.getTokens(), ...body}
        // TODO: don't send update token!

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
            if(!(err instanceof AxiosError))
                return {code: ResultCode.FAIL, error: {description: "Unknown error"}};
            if (!err.response)
                if(err.request)
                    return {code: ResultCode.CONNECTION_ERROR, error: {description: err.request}};
                else
                    return {code: ResultCode.CONFIGURATION_ERROR, error: {description: err.message}};
            if (!(err.response.data instanceof Object) || !(err.response.data.jarvis_exception !== undefined))
                return {code: ResultCode.FAIL, error: {description: err.response.statusText}};

            // check token expired and update
            if (err.response.data.jarvis_exception === ResultCode.EXPIRED_TOKEN){
                const updRes = await this.updateToken();
                if(updRes.code !== ResultCode.OK)
                    return {code: updRes.code, error: updRes.error};
                return await this.makeRequest<K>(request)
            }
            return {code: err.response.data.jarvis_exception, error: err.response.data};
        }
    }

    async updateToken(): Promise<ResponseData<object>> {
        const request: RequestData = {url: "/update/update-all-tokens"};
        const response = await this.makeRequest<TokenData>(request);
        if(response.code == ResultCode.OK && response.result !== undefined){
            const tokens = response.result;
            this.authStore.setTokens(tokens);
        }
        return response;
    }
}
