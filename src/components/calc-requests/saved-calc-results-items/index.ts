import {default as unitEcon} from "./SavedItemUnitEcon.vue";
import {default as nicheDist} from "./SavedItemNicheDist.vue";
import type {SavableRequestName} from "@/types/RequestTypes";
import type {Component} from "vue";

export const savedRequestItems: { [ind in SavableRequestName]: Component } = {
    unitEcon,
    nicheDist
}