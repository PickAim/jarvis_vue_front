import Requester from "@/requests/requesters/Requester";
import type {LoginData, RegData, ResponseData, TokenData} from "@/types/DataTypes";
import {ResultCode} from "@/requests/ResultCode";
import type IAuthStore from "@/requests/requesters/interfaces/IAuthStore";
import {Configs} from "@/Configs";
import {useAuthStore} from "@/stores/authStore";

export default class AccountRequester extends Requester {
    private authStore: IAuthStore;

    constructor() {
        super();
        this.authStore = useAuthStore();
    }

    async loginPassword(loginData: LoginData): Promise<ResponseData<any>> {
        const response = await this.requestHandler.makeRequest<TokenData>({
            uri: "/auth/",
            body: loginData,
        });
        if (response.code == ResultCode.OK && response.result !== undefined) {
            const tokens = response.result;
            this.authStore.setTokens(tokens);
        }
        return response;
    }

    async loginToken(): Promise<ResponseData<object>>{
        return await this.requestHandler.makeRequest({
            uri: Configs.AccessRequestPrefix + "/auth/",
        });
    }

    async registration(regData: RegData): Promise<ResponseData<object>>{
        return await this.requestHandler.makeRequest({
            uri: "/reg/",
            body: regData,
        });
    }

    async passwordChange(passwords: {oldPassword: string, newPassword: string}): Promise<ResponseData<object>>{
        return await this.requestHandler.makeRequest({
            uri: "/",
            body: passwords,
        });
    }

    async deleteAccount(): Promise<ResponseData<object>>{
        this.authStore.setTokens({access_token: "", update_token: ""});
        return await this.requestHandler.makeRequest({
            uri: "/",
        });
    }

    async logout(): Promise<ResponseData<object>>{
        this.authStore.setTokens(undefined);
        return await this.requestHandler.makeRequest({
            uri: "/access/logout/",
        });
    }
}
