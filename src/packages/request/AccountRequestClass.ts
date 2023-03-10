import AbstractRequest from "@/packages/request/AbstractRequest";
import type {LoginData, RegData, ResponseData, TokenData} from "@/Objects";
import {ResultCode} from "@/ResultCode";
import type IAuthStore from "@/packages/store-interfaces/IAuthStore";

export default class AccountRequestClass extends AbstractRequest{
    constructor(authStore: IAuthStore) {
        super(authStore);
    }

    async loginPassword(loginData: LoginData): Promise<ResponseData<object>>{
        const response = await this.requestHandler.makeRequest<TokenData>({
            url: "/auth/",
            method: "POST",
            body: loginData,
        });
        console.log("LOGIN-PASSWORD-REQUEST");
        console.log(response);
        if(response.code == ResultCode.OK && response.result !== undefined){
            const tokens = response.result;
            this.requestHandler.setTokens(tokens);
        }
        return response;
    }

    async loginToken(): Promise<ResponseData<object>>{
        return await this.requestHandler.makeRequest({
            url: "/access/auth/",
            method: "GET",
        });
    }

    async registration(regData: RegData): Promise<ResponseData<object>>{
        return await this.requestHandler.makeRequest({
            url: "/reg/",
            method: "POST",
            body: regData,
        });
    }

    async passwordChange(passwords: {oldPassword: string, newPassword: string}): Promise<ResponseData<object>>{
        return await this.requestHandler.makeRequest({
            url: "/",
            method: "POST",
            body: passwords,
        });
    }

    async deleteAccount(): Promise<ResponseData<object>>{
        this.requestHandler.setTokens({access_token: "", update_token: ""});
        return await this.requestHandler.makeRequest({
            url: "",
        });
    }

    async logout(): Promise<ResponseData<object>>{
        this.requestHandler.setTokens({access_token: "", update_token: ""});
        return await this.requestHandler.makeRequest({
            url: "/access/log_out/",
        });
    }
}
