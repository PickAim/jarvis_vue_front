import AbstractStorage from "@/packages/StorageHandler/AbstractStorage";
import type IAuthStorage from "@/packages/RequestHandler/IAuthStorage";
import type IStorageHandler from "@/packages/RequestHandler/IStorageHandler";
import type { TokenData } from "@/packages/Objects";
import { ResultCode } from "@/packages/ResultCode";
export default class AuthStorage extends AbstractStorage implements IAuthStorage {
    constructor(storageHandler: IStorageHandler);
    getTokenData(): TokenData;
    setAccessToken(token: string): ResultCode;
    setImprint(token: string | undefined): ResultCode;
    setUpdateToken(token: string): ResultCode;
}
