import type {TokenData} from "@/Objects";
import type IAuthStore from "@/packages/store-interfaces/IAuthStore";
import {ResultCode} from "@/ResultCode";

export default class TokenHandler{
    constructor(private authStore: IAuthStore) {
    }

    setTokens(tokens: TokenData): ResultCode{
        if(!navigator.cookieEnabled){
            this.authStore.setAccessToken(tokens.access_token);
            this.authStore.setUpdateToken(tokens.update_token);
            this.authStore.setImprint(tokens.imprint_token);
        }
        return ResultCode.OK
    }
    getTokens(): TokenData | undefined{
        if(navigator.cookieEnabled)
            return undefined
        else return this.authStore.getTokenData()
    }
}
