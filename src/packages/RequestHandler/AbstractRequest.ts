import type IRequestHandler from "@/packages/RequestHandler/IRequestHandler";
import type IStorageHandler from "@/packages/RequestHandler/IStorageHandler";
import RequestHandlerClass from "@/packages/RequestHandler/RequestHandlerClass";

export default abstract class AbstractRequest{
    requestHandler: IRequestHandler;

    protected constructor() {
        this.requestHandler = new RequestHandlerClass();
    }

    getStorageHandler(): IStorageHandler{
        return this.requestHandler.getStorageHandler();
    }
}
