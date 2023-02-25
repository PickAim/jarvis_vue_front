import type IRequestHandler from "@/packages/RequestHandler/IRequestHandler";
import type IStorageHandler from "@/packages/RequestHandler/IStorageHandler";
export default abstract class AbstractRequest {
    requestHandler: IRequestHandler;
    protected constructor();
    getStorageHandler(): IStorageHandler;
}
