import {RequestData, ResponseData, TokenData} from "@/packages/Entities";
import IStorageHandler from "@/packages/RequestHandler/IStorageHandler";

export default interface IRequestHandler{
    makeRequest<K>(request: RequestData): Promise<ResponseData<K>>
    getStorageHandler(): IStorageHandler
    setTokens(token: TokenData): void
}