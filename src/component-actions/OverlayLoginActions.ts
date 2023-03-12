import {OverlayActions} from "@/component-actions/OverlayActions";
import type {LoginData} from "@/Objects";
import AccountRequestActions from "@/requests/request-actions/AccountRequestActions";
import type IAuthStore from "@/requests/request-actions/interfaces/IAuthStore";
import {ResultCode} from "@/ResultCode";
import type {Store} from "pinia";
import {useNotificationsStore} from "@/stores/notificationsStore";

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
            switch(response.code){
                case ResultCode.OK:
                    this.notificationsStore.addNotification({
                        header: "Успех",
                        body: "Вход совершён",
                        type: "success",
                    });
                    break;
                case ResultCode.CONNECTION_ERROR:
                    this.notificationsStore.addNotification({
                        header: "Ошибка сети",
                        body: "Не получилось получить ответ от сервера. Возможно, есть проблема с подключением к сети",
                        type: "error",
                    });
                    break;
                case ResultCode.INCORRECT_LOGIN_OR_PASSWORD:
                    this.notificationsStore.addNotification({
                        header: "Неверный логин или пароль",
                        body: "Попробуйте ввести данные ещё раз",
                        type: "error",
                    });
                    break;
                case ResultCode.FAIL:
                case ResultCode.CONFIGURATION_ERROR:
                    this.showSimpleErrorMessage();
                    break;
            }
        }
        catch(e){
            this.showSimpleErrorMessage();
            console.error(e);
        }
        this.stopLoading();
    }

    showSimpleErrorMessage(){
        this.notificationsStore.addNotification({
            header: "Ошибка",
            body: "Ошибка запроса к серверу",
            type: "error",
        });
    }
}
