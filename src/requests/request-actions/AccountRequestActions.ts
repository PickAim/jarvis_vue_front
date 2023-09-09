import AccountRequester from "@/requests/requesters/AccountRequester";
import type {LoginData, RegData, ResponseData} from "@/types/DataTypes";
import {ErrorHandler} from "@/requests/ErrorHandler";

export class AccountRequestActions {
    accountRequester;

    constructor() {
        this.accountRequester = new AccountRequester();
    }

    async loginPassword(loginData: LoginData): Promise<ResponseData<object>> {
        const response = await this.accountRequester.loginPassword(loginData);
        ErrorHandler.handle(response.code);
        return response;
    }

    async loginToken(): Promise<ResponseData<object>> {
        const response = await this.accountRequester.loginToken();
        ErrorHandler.handle(response.code);
        return response;
    }

    async registration(regData: RegData): Promise<ResponseData<object>> {
        const response = await this.accountRequester.registration(regData);
        ErrorHandler.handle(response.code);
        return response;
    }

    async passwordChange(passwords: { oldPassword: string, newPassword: string }): Promise<ResponseData<object>> {
        const response = await this.accountRequester.passwordChange(passwords);
        ErrorHandler.handle(response.code);
        return response;
    }

    async deleteAccount(): Promise<ResponseData<object>> {
        const response = await this.accountRequester.deleteAccount();
        ErrorHandler.handle(response.code);
        return response;
    }

    async logout(): Promise<ResponseData<object>> {
        const response = await this.accountRequester.logout();
        ErrorHandler.handle(response.code);
        return response;
    }
}