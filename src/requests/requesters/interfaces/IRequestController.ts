import type {RequestData, ResponseData} from "@/types/DataTypes";

export default interface IRequestController {
    makeRequest<K>(request: RequestData): Promise<ResponseData<K>>
}
