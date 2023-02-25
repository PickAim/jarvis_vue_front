import type IRequestHandler from "@/packages/RequestHandler/IRequestHandler";
import type { RequestData, ResponseData, TokenData } from "@/packages/Objects";
import TokenHandler from "@/packages/RequestHandler/TokenHandler";
import type IStorageHandler from "@/packages/RequestHandler/IStorageHandler";
import type { AxiosInstance } from 'axios';
import { ResultCode } from "@/packages/ResultCode";
export default class RequestHandlerClass implements IRequestHandler {
    tokenHandler: TokenHandler;
    storageHandler: IStorageHandler;
    axiosInst: AxiosInstance;
    constructor();
    makeRequest<K>(request: RequestData): Promise<ResponseData<K>>;
    setTokens(tokens: TokenData): ResultCode;
    getStorageHandler(): IStorageHandler;
    updateToken(): Promise<ResponseData<object>>;
}
