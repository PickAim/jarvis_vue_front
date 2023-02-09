import {RequestData, ResponseData, TokenData} from "@/packages/Entities";
import IStorageHandler from "@/packages/RequestHandler/IStorageHandler";

export default interface IRequestHandler{
    makeRequest(request: RequestData): Promise<ResponseData>
    getStorageHandler(): IStorageHandler
    setTokens(token: TokenData): void
}