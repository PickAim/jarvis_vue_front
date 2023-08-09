export type SectionNameType =
    "dashboard" |
    "nicheAnalyze" |
    "categoryAnalyze" |
    "auditoryGeography" |
    "segmentsAnalyze" |
    "remainsAnalyze" |
    "assortMatrix" |
    "salesGeography" |
    "unitEconomy" |
    "financialHealth";

export type SectionInfoType = { title: string, link: string };

export const sections: { [section in SectionNameType]: SectionInfoType } = {
    dashboard: {title: "Главная страница", link: "/workspace/"},

    nicheAnalyze: {title: "Анализ ниш", link: "/workspace/niche-analyze"},
    categoryAnalyze: {title: "Анализ категорий", link: "/workspace/category-analyze"},
    auditoryGeography: {title: "География целевой аудитории", link: "/workspace/auditory-geography"},
    segmentsAnalyze: {title: "Сегмнетарный анализ", link: "/workspace/segments-analyze"},

    remainsAnalyze: {title: "Анализ остатков", link: "/workspace/remains-analyze"},
    assortMatrix: {title: "Ассортиментная матрица", link: "/workspace/assort-matrix"},
    salesGeography: {title: "География продаж магазина", link: "/workspace/sales-geography"},

    unitEconomy: {title: "Калькулятор unit-экономики", link: "/workspace/unit-economy"},
    financialHealth: {title: "Финансовое здоровье магазина", link: "/workspace/financial-health"},
}