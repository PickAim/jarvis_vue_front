import AbstractRequest from "@/packages/RequestHandler/AbstractRequest";
import type { ResponseData, SellerAPIKeysData } from "@/packages/Objects";
export default class SellerRequestClass extends AbstractRequest {
    constructor();
    getSellerAPIKeys(): Promise<ResponseData<SellerAPIKeysData>>;
    setSellerAPIKeys(sellerAPIKeys: SellerAPIKeysData): Promise<ResponseData<object>>;
}
