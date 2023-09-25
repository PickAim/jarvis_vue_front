import {defineStore} from "pinia";
import type IAuthStore from "@/requests/requesters/interfaces/IAuthStore";
import type {TokenData} from "@/types/DataTypes";
import {useLocalStorage} from "@vueuse/core";

export const useAuthStore = defineStore<any, any, any, IAuthStore>("authStore", {
    state: () => ({
        access_token: useLocalStorage<string | undefined>("accessToken", undefined),
        imprint_token: useLocalStorage<string | undefined>("imprintToken", undefined),
        update_token: useLocalStorage<string | undefined>("updateToken", undefined)
    }),
    actions: {
        getTokens(): { [ind in keyof TokenData]: string | undefined } {
            return {
                access_token: this.access_token,
                imprint_token: this.imprint_token,
                update_token: this.update_token
            };
        },
        setAccessToken(token: string | undefined) {
            this.access_token = token;
        },
        setImprint(token: string | undefined) {
            this.imprint_token = token;
        },
        setUpdateToken(token: string | undefined) {
            this.update_token = token;
        },
        setTokens(token: TokenData | undefined) {
            if (!token) {
                this.setAccessToken(undefined);
                this.setImprint(undefined);
                this.setUpdateToken(undefined);
                return;
            }
            if (!window?.navigator?.cookieEnabled) {
                this.setAccessToken(token.access_token);
                this.setImprint(token.imprint_token);
                this.setUpdateToken(token.update_token);
            }
        }
    }
});