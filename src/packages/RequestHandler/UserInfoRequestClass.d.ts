import AbstractRequest from "@/packages/RequestHandler/AbstractRequest";
import type { ResponseData, UserData } from "@/packages/Objects";
export default class UserInfoRequestClass extends AbstractRequest {
    constructor();
    getUserInfo(): Promise<ResponseData<UserData>>;
    updateUserInfo(userData: UserData): Promise<ResponseData<object>>;
}
