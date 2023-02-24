import type {TokenData} from "@/packages/Objects";
import type IAuthStorage from "@/packages/RequestHandler/IAuthStorage";
import AuthStorage from "@/packages/StorageHandler/AuthStorage";
import type IStorageHandler from "@/packages/RequestHandler/IStorageHandler";
import {ResultCode} from "@/packages/ResultCode";

export default class TokenHandler{
    authStorage: IAuthStorage

    constructor(storageHandler: IStorageHandler) {
        this.authStorage = new AuthStorage(storageHandler);
    }

    setTokens(tokens: TokenData): ResultCode{
        if(!navigator.cookieEnabled){
            this.authStorage.setAccessToken(tokens.access_token);
            this.authStorage.setUpdateToken(tokens.update_token);
            this.authStorage.setImprint(tokens.imprint_token);
        }
        return ResultCode.OK
    }
    getTokens(): TokenData | undefined{
        if(navigator.cookieEnabled)
            return undefined
        else return this.authStorage.getTokenData()
    }
}
