import AbstractRequestActions from "@/requests/request-actions/AbstractRequestActions";
import type {LoginData, RegData, ResponseData, TokenData} from "@/types/Objects";
import {ResultCode} from "@/types/ResultCode";
import type IAuthStore from "@/requests/request-actions/interfaces/IAuthStore";

export default class AccountRequestActions extends AbstractRequestActions{
    constructor(private authStore: IAuthStore) {
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
            this.authStore.setTokens(tokens);
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
        this.authStore.setTokens({access_token: "", update_token: ""});
        return await this.requestHandler.makeRequest({
            url: "",
        });
    }

    async logout(): Promise<ResponseData<object>>{
        this.authStore.setTokens({access_token: "", update_token: ""});
        return await this.requestHandler.makeRequest({
            url: "/access/log_out/",
        });
    }
}
