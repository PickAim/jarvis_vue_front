import type {RequestData, ResponseData} from "@/types/Objects";

export default interface IRequestController {
    makeRequest<K>(request: RequestData): Promise<ResponseData<K>>
}
