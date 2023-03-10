import type {RequestData, ResponseData, TokenData} from "@/Objects";
import type IStorageHandler from "@/packages/request/IStorageHandler";

export default interface IRequestHandler{
    makeRequest<K>(request: RequestData): Promise<ResponseData<K>>
    setTokens(token: TokenData): void
}
