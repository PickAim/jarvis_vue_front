import IRequestHandler from "@/packages/RequestHandler/IRequestHandler";
import IStorageHandler from "@/packages/RequestHandler/IStorageHandler";

export default abstract class AbstractRequest{
    requestHandler: IRequestHandler;

    protected constructor(requestHandler: IRequestHandler) {
        this.requestHandler = requestHandler;
    }

    getStorageHandler(): IStorageHandler{
        return this.requestHandler.getStorageHandler();
    }
}
