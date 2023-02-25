import AbstractRequest from "@/packages/RequestHandler/AbstractRequest";
export default class UserInfoRequestClass extends AbstractRequest {
    constructor() {
        super();
    }
    async getUserInfo() {
        return await this.requestHandler.makeRequest({
            url: "",
            method: "POST"
        });
    }
    async updateUserInfo(userData) {
        return await this.requestHandler.makeRequest({
            url: "",
            method: "POST",
            body: userData
        });
    }
}
