import type IRequestHandler from "@/packages/request/IRequestHandler";
import type IStorageHandler from "@/packages/request/IStorageHandler";
import RequestHandlerClass from "@/packages/request/RequestHandlerClass";
import type IAuthStore from "@/packages/store-interfaces/IAuthStore";

export default abstract class AbstractRequest{
    requestHandler: IRequestHandler;

    protected constructor(authStore: IAuthStore) {
        this.requestHandler = new RequestHandlerClass(authStore);
    }
}
