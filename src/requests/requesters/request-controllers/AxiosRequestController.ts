import type IRequestController from "@/requests/requesters/interfaces/IRequestController";
import type {RequestData, ResponseData, TokenData} from "@/types/DataTypes";
import axios, {AxiosError, CanceledError} from "axios";
import type {AxiosInstance, AxiosRequestConfig} from 'axios';
import {ResultCode} from "@/types/ResultCode";
import type IAuthStore from "@/requests/requesters/interfaces/IAuthStore";
import {useRequestStore} from "@/stores/requestStore";
import {Configs} from "@/Configs";

export default class AxiosRequestController implements IRequestController {
    axiosInst: AxiosInstance
    requestStore;

    constructor(private authStore: IAuthStore) {
        this.requestStore = useRequestStore();
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

        const controller = new AbortController();
        const config: AxiosRequestConfig = {
            responseType: responseType,
            signal: controller.signal
        }

        const tokens: TokenData = {} as TokenData;
        if (url.startsWith(Configs.UpdateRequestPrefix)) {
            Object.assign(tokens, this.authStore.getTokens());
        } else if (url.startsWith(Configs.AccessRequestPrefix)) {
            tokens["access_token"] = this.authStore.getTokens().access_token;
            tokens["imprint_token"] = this.authStore.getTokens().imprint_token;
        }
        config.params = tokens;

        let req;
        if (method == "GET") {
            config.params = {...config.params, ...body};
            req = this.axiosInst.get<K>(url, config)
        }
        if (method == "POST") {
            req = this.axiosInst.post<K>(url, body, config)
        }
        if (!req)
            return {code: ResultCode.CONFIGURATION_ERROR}

        let response;
        try {
            this.requestStore.loadingStart(controller);
            const result = await req;
            this.requestStore.loadingStop();
            response = {code: ResultCode.OK, result: result.data};
        } catch (err) {
            if (err instanceof CanceledError) {
                console.log(err)
                response = {code: ResultCode.CANCEL_ERROR, error: {description: "Cancelled error"}};
            } else if (!(err instanceof AxiosError)) {
                response = {code: ResultCode.FAIL, error: {description: "Unknown error"}};
            } else if (!err.response) {
                if (err.request) {
                    response = {code: ResultCode.CONNECTION_ERROR, error: {description: err.request}};
                } else {
                    response = {code: ResultCode.CONFIGURATION_ERROR, error: {description: err.message}};
                }
            } else if (!(err.response.data instanceof Object) || !(err.response.data.jarvis_exception !== undefined)) {
                response = {code: ResultCode.FAIL, error: {description: err.response.statusText}};
            } else if (err.response.data.jarvis_exception === ResultCode.EXPIRED_TOKEN) {
                // check token expired and update
                const updRes = await this.updateToken();
                if (updRes.code !== ResultCode.OK) {
                    response = {code: updRes.code, error: updRes.error};
                } else {
                    response = await this.makeRequest<K>(request);
                }
            } else {
                response = {code: err.response.data.jarvis_exception, error: err.response.data};
            }
        }
        if (response.code !== ResultCode.CANCEL_ERROR) {
            this.requestStore.loadingStop();
        }
        return response;
    }

    async updateToken(): Promise<ResponseData<object>> {
        const request: RequestData = {url: Configs.UpdateRequestPrefix + "/update-all-tokens"};
        const response = await this.makeRequest<TokenData>(request);
        if (response.code == ResultCode.OK && response.result !== undefined) {
            const tokens = response.result;
            this.authStore.setTokens(tokens);
        }
        return response;
    }
}
