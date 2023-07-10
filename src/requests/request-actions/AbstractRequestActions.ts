import type IRequestController from "@/requests/request-actions/interfaces/IRequestController";
import AxiosRequestController from "@/requests/request-controllers/AxiosRequestController";
import {useAuthStore} from "@/stores/authStore";

export default abstract class AbstractRequestActions {
    requestHandler: IRequestController;

    protected constructor() {
        this.requestHandler = new AxiosRequestController(useAuthStore());
    }
}
