import type {RouteRecordRaw} from "vue-router";
import type {SectionNameType} from "@/types/SectionTypes";
import type {Component} from "vue";
import ViewWorkspaceSectionAssortMatrix
    from "@/components/view-workspace/sections/ViewWorkspaceSectionAssortMatrix.vue";
import ViewWorkspaceSectionAuditoryGeography
    from "@/components/view-workspace/sections/ViewWorkspaceSectionAuditoryGeography.vue";
import ViewWorkspaceSectionCategoryAnalyze
    from "@/components/view-workspace/sections/category-analyze/ViewWorkspaceSectionCategoryAnalyze.vue";
import ViewWorkspaceSectionDashboard from "@/components/view-workspace/sections/ViewWorkspaceSectionDashboard.vue";
import ViewWorkspaceSectionFinancialHealth
    from "@/components/view-workspace/sections/ViewWorkspaceSectionFinancialHealth.vue";
import ViewWorkspaceSectionNicheAnalyze
    from "@/components/view-workspace/sections/ViewWorkspaceSectionNicheAnalyze.vue";
import ViewWorkspaceSectionRemainsAnalyze
    from "@/components/view-workspace/sections/remains-analyze/ViewWorkspaceSectionRemainsAnalyze.vue";
import ViewWorkspaceSectionSalesGeography
    from "@/components/view-workspace/sections/ViewWorkspaceSectionSalesGeography.vue";
import ViewWorkspaceSectionSegmentsAnalyze
    from "@/components/view-workspace/sections/ViewWorkspaceSectionSegmentsAnalyze.vue";
import ViewWorkspaceSectionUnitEconomy
    from "@/components/view-workspace/sections/unit-economy/ViewWorkspaceSectionUnitEconomy.vue";
import {sections} from "@/component-actions/view-workspace/workspaceLabels";
import ViewWorkspaceSectionNearestKeywords
    from "@/components/view-workspace/sections/nearest-keywords/ViewWorkspaceSectionNearestKeywords.vue";

const sectionComponents: { [section in SectionNameType]: Component } = {
    assortMatrix: ViewWorkspaceSectionAssortMatrix,
    auditoryGeography: ViewWorkspaceSectionAuditoryGeography,
    categoryAnalyze: ViewWorkspaceSectionCategoryAnalyze,
    nearestKeywords: ViewWorkspaceSectionNearestKeywords,
    dashboard: ViewWorkspaceSectionDashboard,
    financialHealth: ViewWorkspaceSectionFinancialHealth,
    nicheAnalyze: ViewWorkspaceSectionNicheAnalyze,
    remainsAnalyze: ViewWorkspaceSectionRemainsAnalyze,
    salesGeography: ViewWorkspaceSectionSalesGeography,
    segmentsAnalyze: ViewWorkspaceSectionSegmentsAnalyze,
    unitEconomy: ViewWorkspaceSectionUnitEconomy
}

export const workspaceRouter: RouteRecordRaw[] =
    Object.keys(sectionComponents).map((key) => {
        const component = sectionComponents[key as SectionNameType];
        const sectionInfo = sections[key as SectionNameType];
        return ({
            path: sectionInfo.link.split('/').slice(2).join('/'),
            component
        })
    });
