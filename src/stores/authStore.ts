import {defineStore} from "pinia";
import type IAuthStore from "@/requests/request-actions/interfaces/IAuthStore";
import type {TokenData} from "@/Objects";
import type {ResultCode} from "@/ResultCode";

export const useAuthStore = defineStore<"authStore",{},{}, IAuthStore>("authStore", {
    actions:{
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
        }
    }
});