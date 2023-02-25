import type { TokenData } from "@/packages/Objects";
import type IAuthStorage from "@/packages/RequestHandler/IAuthStorage";
import type IStorageHandler from "@/packages/RequestHandler/IStorageHandler";
import { ResultCode } from "@/packages/ResultCode";
export default class TokenHandler {
    authStorage: IAuthStorage;
    constructor(storageHandler: IStorageHandler);
    setTokens(tokens: TokenData): ResultCode;
    getTokens(): TokenData | undefined;
}
