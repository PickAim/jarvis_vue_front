import AbstractStorage from "@/packages/StorageHandler/AbstractStorage";
import { ResultCode } from "@/packages/ResultCode";
export default class AuthStorage extends AbstractStorage {
    constructor(storageHandler) {
        super(storageHandler);
    }
    getTokenData() {
        return {
            access_token: this.storageHandler.getValue('accessToken'),
            update_token: this.storageHandler.getValue('updateToken'),
            imprint_token: this.storageHandler.getValue('imprintToken')
        };
    }
    setAccessToken(token) {
        return this.storageHandler.setValue('accessToken', token);
    }
    setImprint(token) {
        if (token === undefined)
            return ResultCode.OK;
        return this.storageHandler.setValue('imprintToken', token);
    }
    setUpdateToken(token) {
        return this.storageHandler.setValue('updateToken', token);
    }
}
