import AbstractRequest from "@/packages/RequestHandler/AbstractRequest";
import type { LoginData, RegData, ResponseData } from "@/packages/Objects";
export default class AccountRequestClass extends AbstractRequest {
    constructor();
    loginPassword(loginData: LoginData): Promise<ResponseData<object>>;
    loginToken(): Promise<ResponseData<object>>;
    registration(regData: RegData): Promise<ResponseData<object>>;
    passwordChange(passwords: {
        oldPassword: string;
        newPassword: string;
    }): Promise<ResponseData<object>>;
    deleteAccount(): Promise<ResponseData<object>>;
    logout(): Promise<ResponseData<object>>;
}
