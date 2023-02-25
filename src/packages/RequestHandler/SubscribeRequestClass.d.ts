import AbstractRequest from "@/packages/RequestHandler/AbstractRequest";
import type { ResponseData, SubscribeData } from "@/packages/Objects";
export default class SubscribeRequestClass extends AbstractRequest {
    constructor();
    getCurrentSubscribe(): Promise<ResponseData<SubscribeData>>;
    changeSubscribe(type: number): Promise<ResponseData<SubscribeData>>;
    closeSubscribe(): Promise<ResponseData<object>>;
    openSubscribe(type: number): Promise<ResponseData<SubscribeData>>;
}
