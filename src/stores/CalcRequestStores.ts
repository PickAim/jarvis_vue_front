import {defineStore} from "pinia";
import type IAuthStore from "@/requests/request-actions/interfaces/IAuthStore";
import type {ResponseData, TokenData} from "@/types/Objects";
import type {ResultCode} from "@/types/ResultCode";
import type {
    ISavableRequestStoreActions,
    ISavableRequestStoreStates
} from "@/requests/request-actions/interfaces/ISavableRequestStoreActions";
import type {CalcRequestInfoData, UnitEconRequestData, UnitEconResultData} from "@/types/CalcRequestsTypes";
import {useAuthStore} from "@/stores/authStore";
import {NicheCalcActions, UnitEconCalcActions} from "@/requests/request-actions/CalcRequestsActions";
import {SavableRequestStoreClass} from "@/stores/stores-classes/SavableRequestStoreClass";

const unitEconRequestStoreClass = new SavableRequestStoreClass(new UnitEconCalcActions(useAuthStore()));

export const useUnitEconRequestStore = defineStore("unitEconRequestStore",
    {
        state: () => unitEconRequestStoreClass,
        actions: unitEconRequestStoreClass
    });

const nicheDistRequestStoreClass = new SavableRequestStoreClass(new NicheCalcActions(useAuthStore()));

export const useNicheDistRequestStore = defineStore("nicheRequestStore",
    {
        state: () => nicheDistRequestStoreClass,
        actions: nicheDistRequestStoreClass
    });