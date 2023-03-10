import {defineStore} from "pinia";
import type IAuthStore from "@/packages/store-interfaces/IAuthStore";
import type {TokenData} from "@/Objects";
import type {ResultCode} from "@/ResultCode";

export const useAuthStore = defineStore<"authStore",{},{}, IAuthStore>("authStore", {
    actions:{
        getTokenData(): TokenData {
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