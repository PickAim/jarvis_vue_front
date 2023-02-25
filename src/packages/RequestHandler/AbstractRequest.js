import RequestHandlerClass from "@/packages/RequestHandler/RequestHandlerClass";
export default class AbstractRequest {
    requestHandler;
    constructor() {
        this.requestHandler = new RequestHandlerClass();
    }
    getStorageHandler() {
        return this.requestHandler.getStorageHandler();
    }
}
