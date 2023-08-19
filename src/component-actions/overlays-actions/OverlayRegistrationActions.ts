import {OverlayActions} from "@/component-actions/overlays-actions/OverlayActions";
import type {RegData} from "@/types/DataTypes";
import {useNotificationsStore} from "@/stores/notificationsStore";
import {AccountRequestActions} from "@/requests/request-actions/AccountRequestActions";

export class OverlayRegistrationActions extends OverlayActions {
    accountRequestActions: AccountRequestActions;
    notificationsStore;

    constructor() {
        super();
        this.accountRequestActions = new AccountRequestActions();
        this.notificationsStore = useNotificationsStore();
    }

    async registration(data: RegData) {
        // TODO: add data validation
        await this.accountRequestActions.registration(data);
    }
}
