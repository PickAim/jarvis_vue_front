import type {RouteRecordRaw} from "vue-router";
import type {SectionNameType} from "@/components/view-workspace/workspaceSections";
import type {Component} from "vue";
import ViewWorkspaceSectionAssortMatrix
    from "@/components/view-workspace/ViewWorkspaceSectionAssortMatrix.vue";
import ViewWorkspaceSectionAuditoryGeography
    from "@/components/view-workspace/ViewWorkspaceSectionAuditoryGeography.vue";
import ViewWorkspaceSectionCategoryAnalyze
    from "@/components/view-workspace/ViewWorkspaceSectionCategoryAnalyze.vue";
import ViewWorkspaceSectionDashboard from "@/components/view-workspace/ViewWorkspaceSectionDashboard.vue";
import ViewWorkspaceSectionFinancialHealth
    from "@/components/view-workspace/ViewWorkspaceSectionFinancialHealth.vue";
import ViewWorkspaceSectionNicheAnalyze
    from "@/components/view-workspace/ViewWorkspaceSectionNicheAnalyze.vue";
import ViewWorkspaceSectionRemainsAnalyze
    from "@/components/view-workspace/ViewWorkspaceSectionRemainsAnalyze.vue";
import ViewWorkspaceSectionSalesGeography
    from "@/components/view-workspace/ViewWorkspaceSectionSalesGeography.vue";
import ViewWorkspaceSectionSegmentsAnalyze
    from "@/components/view-workspace/ViewWorkspaceSectionSegmentsAnalyze.vue";
import ViewWorkspaceSectionUnitEconomy from "@/components/view-workspace/ViewWorkspaceSectionUnitEconomy.vue";
import {sections} from "@/components/view-workspace/workspaceSections";

const sectionComponents: { [section in SectionNameType]: Component } = {
    assortMatrix: ViewWorkspaceSectionAssortMatrix,
    auditoryGeography: ViewWorkspaceSectionAuditoryGeography,
    categoryAnalyze: ViewWorkspaceSectionCategoryAnalyze,
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

console.log(workspaceRouter)
