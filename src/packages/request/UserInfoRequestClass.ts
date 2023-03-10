import AbstractRequest from "@/packages/request/AbstractRequest";
import type {ResponseData, UserData} from "@/Objects";
import type IAuthStore from "@/packages/store-interfaces/IAuthStore";

export default class UserInfoRequestClass extends AbstractRequest{
    constructor(authStore: IAuthStore) {
        super(authStore);
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
