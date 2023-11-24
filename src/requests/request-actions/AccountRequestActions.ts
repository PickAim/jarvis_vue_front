import AccountRequester from "@/requests/requesters/AccountRequester";
import type {LoginData, RegData, ResponseData} from "@/types/DataTypes";

export class AccountRequestActions {
    accountRequester;

    constructor() {
        this.accountRequester = new AccountRequester();
    }

    async loginPassword(loginData: LoginData): Promise<ResponseData<object>> {
        return await this.accountRequester.loginPassword(loginData);
    }

    async loginToken(): Promise<ResponseData<object>> {
        return await this.accountRequester.loginToken();
    }

    async registration(regData: RegData): Promise<ResponseData<object>> {
        return await this.accountRequester.registration(regData);
    }

    async passwordChange(passwords: { oldPassword: string, newPassword: string }): Promise<ResponseData<object>> {
        return await this.accountRequester.passwordChange(passwords);
    }

    async deleteAccount(): Promise<ResponseData<object>> {
        return await this.accountRequester.deleteAccount();
    }

    async logout(): Promise<ResponseData<object>> {
        return await this.accountRequester.logout();
    }
}