import AbstractStorage from "@/packages/StorageHandler/AbstractStorage";
import IAuthStorage from "@/packages/RequestHandler/IAuthStorage";
import IStorageHandler from "@/packages/RequestHandler/IStorageHandler";
import {ResultCodes, TokenData} from "@/packages/Entities";

export default class AuthStorage extends AbstractStorage implements IAuthStorage{
    constructor(storageHandler: IStorageHandler) {
        super(storageHandler);
    }

    getTokenData(): TokenData {
        return new TokenData(
            this.storageHandler.getValue('accessToken'),
            this.storageHandler.getValue('updateToken'),
            this.storageHandler.getValue('imprintToken'));
    }

    setAccessToken(token: string): ResultCodes {
        return this.storageHandler.setValue('accessToken', token);
    }

    setImprint(token: string | undefined): ResultCodes {
        if(token === undefined)
            return ResultCodes.OK;
        return this.storageHandler.setValue('imprintToken', token);
    }

    setUpdateToken(token: string): ResultCodes {
        return this.storageHandler.setValue('updateToken', token);
    }
}