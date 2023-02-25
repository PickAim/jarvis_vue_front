import AbstractRequest from "@/packages/RequestHandler/AbstractRequest";
import { ResultCode } from "@/packages/ResultCode";
export default class AccountRequestClass extends AbstractRequest {
    constructor() {
        super();
    }
    async loginPassword(loginData) {
        const response = await this.requestHandler.makeRequest({
            url: "/auth/",
            method: "POST",
            body: loginData,
        });
        console.log("LOGIN-PASSWORD-REQUEST");
        console.log(response);
        if (response.code == ResultCode.OK && response.result !== undefined) {
            const tokens = response.result;
            this.requestHandler.setTokens(tokens);
        }
        return response;
    }
    async loginToken() {
        return await this.requestHandler.makeRequest({
            url: "/access/auth/",
            method: "GET",
        });
    }
    async registration(regData) {
        return await this.requestHandler.makeRequest({
            url: "/reg/",
            method: "POST",
            body: regData,
        });
    }
    async passwordChange(passwords) {
        return await this.requestHandler.makeRequest({
            url: "/",
            method: "POST",
            body: passwords,
        });
    }
    async deleteAccount() {
        this.requestHandler.setTokens({ access_token: "", update_token: "" });
        return await this.requestHandler.makeRequest({
            url: "",
        });
    }
    async logout() {
        this.requestHandler.setTokens({ access_token: "", update_token: "" });
        return await this.requestHandler.makeRequest({
            url: "/access/log_out/",
        });
    }
}
