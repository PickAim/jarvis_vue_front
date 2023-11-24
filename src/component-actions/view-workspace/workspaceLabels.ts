import type {SectionNameType} from "@/types/SectionTypes";
import type {TransitUnitEconomyRequestData} from "@/types/DataTypes";

export type Title = { title: string };
export type Unit = { unit: string };
export type Link = { link: string };

export type SectionLabelType = Title & Link;
export type UnitEconomyParameterLabelType = Title & Unit;

export type LabelData<TKeys extends string, TData> = Record<TKeys, TData>

export const sections: LabelData<SectionNameType, SectionLabelType> = {
    dashboard: {title: "Главная страница", link: "/workspace/"},

    nicheAnalyze: {title: "Анализ ниш", link: "/workspace/niche-analyze"},
    categoryAnalyze: {title: "Анализ категорий", link: "/workspace/category-analyze"},
    auditoryGeography: {title: "География целевой аудитории", link: "/workspace/auditory-geography"},
    segmentsAnalyze: {title: "Сегментарный анализ", link: "/workspace/segments-analyze"},
    nearestKeywords: {title: "Подбор ключевых слов", link: "/workspace/nearest-keywords"},

    remainsAnalyze: {title: "Анализ остатков", link: "/workspace/remains-analyze"},
    assortMatrix: {title: "Ассортиментная матрица", link: "/workspace/assort-matrix"},
    salesGeography: {title: "География продаж магазина", link: "/workspace/sales-geography"},

    unitEconomy: {title: "Калькулятор unit-экономики", link: "/workspace/unit-economy"},
    financialHealth: {title: "Финансовое здоровье магазина", link: "/workspace/financial-health"},
}

export const unitEconomyParameters: LabelData<keyof TransitUnitEconomyRequestData, UnitEconomyParameterLabelType> = {
    marketplace_id: {title: "", unit: ""},
    category_id: {title: "", unit: ""},
    niche_id: {title: "", unit: ""},
    product_exist_cost: {title: "Текущая цена товара", unit: "₽"},
    cost_price: {title: "Себестоимость", unit: "₽"},
    length: {title: "Длина", unit: "см"},
    width: {title: "Ширина", unit: "см"},
    height: {title: "Высота", unit: "см"},
    mass: {title: "Масса", unit: "кг"},
    logistic_count: {title: "Количество штук в партии", unit: ""},
    logistic_price: {title: "Стоимость логистики партии", unit: "₽"},
    target_warehouse_id: {title: "Склад назначения", unit: ""},
    transit_cost_for_cubic_meter: {title: "Стоимость перевоза за м³", unit: "₽"},
}
