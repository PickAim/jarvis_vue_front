import Requester from "@/requests/requesters/Requester";
import type {LoginData, RegData, ResponseData, TokenData} from "@/types/DataTypes";
import {ResultCode} from "@/requests/ResultCode";
import type IAuthStore from "@/requests/requesters/interfaces/IAuthStore";
import {Configs} from "@/Configs";

export default class AccountRequester extends Requester{
    constructor(private authStore: IAuthStore) {
        super();
    }

    async loginPassword(loginData: LoginData): Promise<ResponseData<object>>{
        const response = await this.requestHandler.makeRequest<TokenData>({
            url: "/auth/",
            body: loginData,
        });
        if(response.code == ResultCode.OK && response.result !== undefined){
            const tokens = response.result;
            this.authStore.setTokens(tokens);
        }
        return response;
    }

    async loginToken(): Promise<ResponseData<object>>{
        return await this.requestHandler.makeRequest({
            url: Configs.AccessRequestPrefix + "/auth/",
        });
    }

    async registration(regData: RegData): Promise<ResponseData<object>>{
        return await this.requestHandler.makeRequest({
            url: "/reg/",
            body: regData,
        });
    }

    async passwordChange(passwords: {oldPassword: string, newPassword: string}): Promise<ResponseData<object>>{
        return await this.requestHandler.makeRequest({
            url: "/",
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
            url: "/access/logout/",
        });
    }
}
