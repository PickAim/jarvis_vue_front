import {OverlayActions} from "@/component-classes/overlays-actions/OverlayActions";
import type {LoginData} from "@/types/DataTypes";
import AccountRequester from "@/requests/requesters/AccountRequester";
import {ResultCode} from "@/requests/ResultCode";
import {useNotificationsStore} from "@/stores/notificationsStore";
import {useAuthStore} from "@/stores/authStore";
import {ErrorHandler} from "@/requests/ErrorHandler";

export class OverlayLoginActions extends OverlayActions {
    accountRequestActions: AccountRequester;
    notificationsStore;

    constructor() {
        super();
        this.accountRequestActions = new AccountRequester(useAuthStore());
        this.notificationsStore = useNotificationsStore();
    }

    async login(data: LoginData) {
        // TODO: add data validation
        this.startLoading();
        try {
            const response = await this.accountRequestActions.loginPassword(data);
            ErrorHandler.handle(response.code);
        } catch (e) {
            ErrorHandler.handle(ResultCode.FAIL);
        }
        this.stopLoading();
    }
}
