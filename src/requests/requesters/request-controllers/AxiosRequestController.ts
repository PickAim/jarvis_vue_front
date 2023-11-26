import type IRequestController from "@/requests/requesters/interfaces/IRequestController";
import type {RequestData, ResponseData, TokenData} from "@/types/DataTypes";
import axios, {AxiosError, type AxiosResponse, CanceledError} from "axios";
import type {AxiosInstance, AxiosRequestConfig} from 'axios';
import {ResultCode} from "@/requests/ResultCode";
import type IAuthStore from "@/requests/requesters/interfaces/IAuthStore";
import {useRequestStore} from "@/stores/requestStore";
import {Configs} from "@/Configs";

export default class AxiosRequestController implements IRequestController {
    axiosInst: AxiosInstance;
    requestStore;

    constructor(private authStore: IAuthStore) {
        this.requestStore = useRequestStore();
        this.axiosInst = axios.create({
            baseURL: Configs.ServerURL,
            headers: {
                Accept: "*/*"
            },
            withCredentials: true
        })
    }

    async makeRequest<K>(request: RequestData):
        Promise<ResponseData<K>> {
        const {uri, body = {}, method = "POST", responseType = "json"} = request;
        const config: AxiosRequestConfig = {
            responseType: responseType
        }

        const tokens: Partial<TokenData> = {} as TokenData;
        if (uri.startsWith(Configs.UpdateRequestPrefix)) {
            Object.assign(tokens, this.authStore.getTokens());
        } else if (uri.startsWith(Configs.AccessRequestPrefix)) {
            tokens["access_token"] = this.authStore.getTokens().access_token;
            tokens["imprint_token"] = this.authStore.getTokens().imprint_token;
        }

        const requestBody = {"request_data": body, ...tokens};
        const requestOptions = this.requestStore.loadingStart();
        console.log("LOAD START", requestOptions);

        let response: ResponseData<K>;
        try {
            config.signal = requestOptions.abortController.signal;
            let result: AxiosResponse<K> | undefined = undefined;
            if (method == "GET") {
                config.params = requestBody;
                result = await this.axiosInst.get<K>(uri, config);
            } else if (method == "POST") {
                result = await this.axiosInst.post<K>(uri, requestBody, config);
            }
            if (!result) {
                response = {code: ResultCode.CONFIGURATION_ERROR};
            } else {
                response = {code: ResultCode.OK, result: result.data};
            }
        } catch (err) {
            if (err instanceof CanceledError) {
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
        this.requestStore.loadingStop(requestOptions, response);
        return response;
    }

    async updateToken(): Promise<ResponseData<object>> {
        const request: RequestData = {uri: Configs.UpdateRequestPrefix + "/update-all-tokens"};
        const response = await this.makeRequest<TokenData>(request);
        if (response.code == ResultCode.OK && response.result !== undefined) {
            const tokens = response.result;
            this.authStore.setTokens(tokens);
        }
        return response;
    }
}
