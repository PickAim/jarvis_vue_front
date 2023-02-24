import AuthStorage from "@/packages/StorageHandler/AuthStorage";
import { ResultCode } from "@/packages/ResultCode";
export default class TokenHandler {
    authStorage;
    constructor(storageHandler) {
        this.authStorage = new AuthStorage(storageHandler);
    }
    setTokens(tokens) {
        if (!navigator.cookieEnabled) {
            this.authStorage.setAccessToken(tokens.access_token);
            this.authStorage.setUpdateToken(tokens.update_token);
            this.authStorage.setImprint(tokens.imprint_token);
        }
        return ResultCode.OK;
    }
    getTokens() {
        if (navigator.cookieEnabled)
            return undefined;
        else
            return this.authStorage.getTokenData();
    }
}
