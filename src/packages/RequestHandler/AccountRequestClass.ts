import AbstractRequest from "@/packages/RequestHandler/AbstractRequest";
import IRequestHandler from "@/packages/RequestHandler/IRequestHandler";
import {LoginData, RegData, RequestData, ResponseData, ResultCodes, TokenData} from "@/packages/Entities";

export default class AccountRequestClass extends AbstractRequest{
    constructor(requestHandler: IRequestHandler) {
        super(requestHandler);
    }

    async loginPassword(loginData: LoginData): Promise<ResponseData>{
        const request = new RequestData("", "POST", loginData);
        const result = await this.requestHandler.makeRequest(request);
        if(result.getCode() == ResultCodes.OK){
            const body = result.getResult();
            // TODO: add tokens from body
            const tokens = new TokenData();
            this.requestHandler.setTokens(tokens);
        }
        return result;
    }

    async loginToken(): Promise<ResponseData>{
        const request = new RequestData("");
        return await this.requestHandler.makeRequest(request);
    }

    async registration(regData: RegData): Promise<ResponseData>{
        // ASK: is token receiving here?
        const request = new RequestData("", "POST", regData);
        return await this.requestHandler.makeRequest(request);
    }

    async passwordChange(passwords: {oldPassword: string, newPassword: string}): Promise<ResponseData>{
        const request = new RequestData("", "POST", passwords);
        return await this.requestHandler.makeRequest(request);
    }

    async deleteAccount(): Promise<ResponseData>{
        const request = new RequestData("");
        this.requestHandler.setTokens(new TokenData());
        return await this.requestHandler.makeRequest(request);
    }

    async logout(): Promise<ResponseData>{
        const request = new RequestData("");
        this.requestHandler.setTokens(new TokenData());
        return await this.requestHandler.makeRequest(request);
    }
}