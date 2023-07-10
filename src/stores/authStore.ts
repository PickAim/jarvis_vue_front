import {defineStore} from "pinia";
import type IAuthStore from "@/requests/request-actions/interfaces/IAuthStore";
import type {TokenData} from "@/types/DataTypes";
import type {ResultCode} from "@/types/ResultCode";

export const useAuthStore = defineStore<"authStore",any,any, IAuthStore>("authStore", {
    actions:{
        // TODO: add token storage realization
        getTokens(): TokenData {
            return {} as TokenData;
        },
        setAccessToken(token: string): ResultCode {
            return {} as ResultCode;
        },
        setImprint(key: string | undefined): ResultCode {
            return {} as ResultCode;
        },
        setUpdateToken(token: string): ResultCode {
            return {} as ResultCode;
        },
        setTokens(token: TokenData) {
            this.setAccessToken(token.access_token);
            this.setImprint(token.imprint_token);
            this.setUpdateToken(token.update_token);
        }
    }
});