import {defineStore} from "pinia";
import type IAuthStore from "@/requests/requesters/interfaces/IAuthStore";
import type {TokenData} from "@/types/DataTypes";
import type {ResultCode} from "@/types/ResultCode";

export const useAuthStore = defineStore<"authStore", TokenData, any, IAuthStore>("authStore", {
    state: () => ({
        access_token: "",
        imprint_token: "",
        update_token: ""
    }),
    actions: {
        // TODO: add token storage realization
        getTokens(): TokenData {
            return {
                access_token: this.access_token,
                imprint_token: this.imprint_token,
                update_token: this.update_token
            };
        },
        setAccessToken(token: string) {
            this.access_token = token;
        },
        setImprint(token: string | undefined) {
            this.imprint_token = token;
        },
        setUpdateToken(token: string) {
            this.update_token = token;
        },
        setTokens(token: TokenData) {
            this.setAccessToken(token.access_token);
            this.setImprint(token.imprint_token);
            this.setUpdateToken(token.update_token);
        }
    }
});