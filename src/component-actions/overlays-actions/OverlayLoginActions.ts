import {OverlayActions} from "@/component-actions/overlays-actions/OverlayActions";
import type {LoginData} from "@/types/DataTypes";
import {useNotificationsStore} from "@/stores/notificationsStore";
import {AccountRequestActions} from "@/requests/request-actions/AccountRequestActions";

export class OverlayLoginActions extends OverlayActions {
    accountRequestActions: AccountRequestActions;
    notificationsStore;

    constructor() {
        super();
        this.accountRequestActions = new AccountRequestActions();
        this.notificationsStore = useNotificationsStore();
    }

    async login(data: LoginData) {
        // TODO: add data validation
        return await this.accountRequestActions.loginPassword(data);
    }
}
