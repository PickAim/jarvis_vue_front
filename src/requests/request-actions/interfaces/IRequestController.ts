import type {RequestData, ResponseData, TokenData} from "@/Objects";

export default interface IRequestController {
    makeRequest<K>(request: RequestData): Promise<ResponseData<K>>
}
