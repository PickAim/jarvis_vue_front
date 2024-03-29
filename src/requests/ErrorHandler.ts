import {ResultCode} from "@/requests/ResultCode";
import {useNotificationsStore} from "@/stores/notificationsStore";
import {ResultDescription} from "@/requests/ResultDescription";

export class ErrorHandler {
    static handle(code: ResultCode) {
        console.log(code);
        const notificator = useNotificationsStore();
        switch (code) {
            case ResultCode.OK:
                break;
            case ResultCode.CANCEL_ERROR:
                console.error("Cancelled");
                break;
            case ResultCode.INCORRECT_TOKEN:
                window.location.replace(window.location.protocol + "//" + window.location.host);
                break;
            default:
                notificator.addErrorNotification(ResultDescription[code] || ResultDescription[ResultCode.FAIL]);
        }
    }
}