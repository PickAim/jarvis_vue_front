import AbstractStorage from "@/packages/StorageHandler/AbstractStorage";
import type IAuthStorage from "@/packages/RequestHandler/IAuthStorage";
import type IStorageHandler from "@/packages/RequestHandler/IStorageHandler";
import type {TokenData} from "@/packages/Objects";
import {ResultCode} from "@/packages/ResultCode";

export default class AuthStorage extends AbstractStorage implements IAuthStorage{
    constructor(storageHandler: IStorageHandler) {
        super(storageHandler);
    }

    getTokenData(): TokenData {
        return {
            access_token: this.storageHandler.getValue('accessToken'),
            update_token: this.storageHandler.getValue('updateToken'),
            imprint_token: this.storageHandler.getValue('imprintToken')
        }
    }

    setAccessToken(token: string): ResultCode {
        return this.storageHandler.setValue('accessToken', token);
    }

    setImprint(token: string | undefined): ResultCode {
        if(token === undefined)
            return ResultCode.OK;
        return this.storageHandler.setValue('imprintToken', token);
    }

    setUpdateToken(token: string): ResultCode {
        return this.storageHandler.setValue('updateToken', token);
    }
}
