import AbstractRequest from "@/packages/RequestHandler/AbstractRequest";
import IRequestHandler from "@/packages/RequestHandler/IRequestHandler";
import {ResponseData, UserData} from "@/packages/Entities";

export default class UserInfoRequestClass extends AbstractRequest{
    constructor(requestHandler: IRequestHandler) {
        super(requestHandler);
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