import type IRequestController from "@/requests/request-actions/interfaces/IRequestController";
import AxiosRequestController from "@/requests/request-controllers/AxiosRequestController";
import type IAuthStore from "@/requests/request-actions/interfaces/IAuthStore";

export default abstract class AbstractRequestActions {
    requestHandler: IRequestController;

    protected constructor(authStore: IAuthStore) {
        this.requestHandler = new AxiosRequestController(authStore);
    }
}
