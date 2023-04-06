import type {RequestData, ResponseData, TokenData} from "@/types/Objects";

export default interface IRequestController {
    makeRequest<K>(request: RequestData): Promise<ResponseData<K>>
}
