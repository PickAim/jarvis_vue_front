import {useNotificationsStore} from "@/stores/notificationsStore";

export class RequestActions<Q, R> {
    notificator;

    constructor() {
        this.notificator = useNotificationsStore();
    }

    protected prepareRequestData(request: Q): Q {
        return request;
    }

    protected prepareResultData(result: R): R {
        return result;
    }
}