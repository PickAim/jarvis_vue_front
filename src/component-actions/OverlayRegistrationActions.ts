import {OverlayActions} from "@/component-actions/OverlayActions";
import type {RegData} from "@/Objects";
import AccountRequestActions from "@/requests/request-actions/AccountRequestActions";
import type IAuthStore from "@/requests/request-actions/interfaces/IAuthStore";
import {ResultCode} from "@/ResultCode";
import {useNotificationsStore} from "@/stores/notificationsStore";
import {ResultDescription} from "@/ResultDescription";

export class OverlayRegistrationActions extends OverlayActions{
    accountRequestActions: AccountRequestActions;
    notificationsStore;

    constructor(authStore: IAuthStore) {
        super();
        this.accountRequestActions = new AccountRequestActions(authStore);
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
