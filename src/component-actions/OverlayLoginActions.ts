import {OverlayActions} from "@/component-actions/OverlayActions";
import type {LoginData} from "@/Objects";
import AccountRequestActions from "@/requests/request-actions/AccountRequestActions";
import type IAuthStore from "@/requests/request-actions/interfaces/IAuthStore";
import {ResultCode} from "@/ResultCode";
import type {Store} from "pinia";
import {useNotificationsStore} from "@/stores/notificationsStore";
import {ResultDescription} from "@/ResultDescription";

export class OverlayLoginActions extends OverlayActions{
    accountRequestActions: AccountRequestActions;
    notificationsStore;

    constructor(authStore: IAuthStore) {
        super();
        this.accountRequestActions = new AccountRequestActions(authStore);
        this.notificationsStore = useNotificationsStore();
    }

    async login(data: LoginData){
        // TODO: add data validation
        this.startLoading();
        try {
            const response = await this.accountRequestActions.loginPassword(data);
            console.log(response);
            if(response.code === ResultCode.OK)
                this.notificationsStore.addSuccessNotification(["Успех", "Вход совершён"]);
            else
                this.notificationsStore.addErrorNotification(ResultDescription[response.code]);
        }
        catch(e){
            this.notificationsStore.addErrorNotification(ResultDescription[ResultCode.FAIL]);
        }
        this.stopLoading();
    }
}
