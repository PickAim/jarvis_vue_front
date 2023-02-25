import AbstractRequest from "@/packages/RequestHandler/AbstractRequest";
import type { ResponseData } from "@/packages/Objects";
export default class SubscribeRequestClass extends AbstractRequest {
    constructor();
    getStat(): Promise<ResponseData<object>>;
}
