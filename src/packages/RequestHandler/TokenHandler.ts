import {TokenData, ResultCodes} from "@/packages/Entities";
import IAuthStorage from "@/packages/RequestHandler/IAuthStorage";
import AuthStorage from "@/packages/StorageHandler/AuthStorage";
import IStorageHandler from "@/packages/RequestHandler/IStorageHandler";

export default class TokenHandler{
    authStorage: IAuthStorage

    constructor(storageHandler: IStorageHandler) {
        this.authStorage = new AuthStorage(storageHandler);
    }

    setTokens(tokens: TokenData): ResultCodes{
        if(!navigator.cookieEnabled){
            this.authStorage.setAccessToken(tokens.accessToken);
            this.authStorage.setUpdateToken(tokens.updateToken);
            this.authStorage.setImprint(tokens.imprintToken);
        }
        return ResultCodes.OK
    }
    getTokens(): TokenData | undefined{
        if(navigator.cookieEnabled)
            return undefined
        else return this.authStorage.getTokenData()
    }
}