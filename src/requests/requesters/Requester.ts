import type IRequestController from "@/requests/requesters/interfaces/IRequestController";
import AxiosRequestController from "@/requests/requesters/request-controllers/AxiosRequestController";
import {useAuthStore} from "@/stores/authStore";

export default class Requester {
    requestHandler: IRequestController;

    protected constructor() {
        this.requestHandler = new AxiosRequestController(useAuthStore());
    }
}
