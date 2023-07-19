import {OverlayActions} from "@/component-classes/overlays-actions/OverlayActions";
import type {LoginData} from "@/types/DataTypes";
import AccountRequestActions from "@/requests/request-actions/AccountRequestActions";
import {ResultCode} from "@/types/ResultCode";
import {useNotificationsStore} from "@/stores/notificationsStore";
import {ResultDescription} from "@/types/ResultDescription";
import {useAuthStore} from "@/stores/authStore";

export class OverlayLoginActions extends OverlayActions{
    accountRequestActions: AccountRequestActions;
    notificationsStore;

    constructor() {
        super();
        this.accountRequestActions = new AccountRequestActions(useAuthStore());
        this.notificationsStore = useNotificationsStore();
    }

    async login(data: LoginData){
        // TODO: add data validation
        this.startLoading();
        try {
            const response = await this.accountRequestActions.loginPassword(data);
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
