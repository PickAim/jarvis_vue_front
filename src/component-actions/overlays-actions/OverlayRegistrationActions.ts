import {OverlayActions} from "@/component-actions/overlays-actions/OverlayActions";
import type {RegData} from "@/types/Objects";
import AccountRequestActions from "@/requests/request-actions/AccountRequestActions";
import {ResultCode} from "@/types/ResultCode";
import {useNotificationsStore} from "@/stores/notificationsStore";
import {ResultDescription} from "@/types/ResultDescription";
import {useAuthStore} from "@/stores/authStore";

export class OverlayRegistrationActions extends OverlayActions{
    accountRequestActions: AccountRequestActions;
    notificationsStore;

    constructor() {
        super();
        this.accountRequestActions = new AccountRequestActions(useAuthStore());
        this.notificationsStore = useNotificationsStore();
    }

    async registration(data: RegData){
        // TODO: add data validation
        this.startLoading();
        try {
            const response = await this.accountRequestActions.registration(data);
            console.log(response);
            if(response.code === ResultCode.OK)
                this.notificationsStore.addSuccessNotification(["Успех", "Вы зарегестрированы"]);
            else
                this.notificationsStore.addErrorNotification(ResultDescription[response.code]);
        }
        catch(e){
            this.notificationsStore.addErrorNotification(ResultDescription[ResultCode.FAIL]);
        }
        this.stopLoading();
    }
}
