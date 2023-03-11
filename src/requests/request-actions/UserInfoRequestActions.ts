import AbstractRequestActions from "@/requests/request-actions/AbstractRequestActions";
import type {ResponseData, UserData} from "@/Objects";
import type IAuthStore from "@/requests/request-actions/interfaces/IAuthStore";

export default class UserInfoRequestActions extends AbstractRequestActions{
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
