import AbstractRequest from "@/packages/RequestHandler/AbstractRequest";
import type {ResponseData, UserData} from "@/packages/Objects";

export default class UserInfoRequestClass extends AbstractRequest{
    constructor() {
        super();
    }

    async getUserInfo(): Promise<ResponseData<UserData>>{
        return await this.requestHandler.makeRequest<UserData>({
            url: "",
            method: "POST"
        });
    }

    async updateUserInfo(userData: UserData): Promise<ResponseData<object>>{
        return await this.requestHandler.makeRequest({
            url: "",
            method: "POST",
            body: userData
        });
    }
}
