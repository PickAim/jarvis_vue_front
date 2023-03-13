import type {RouteRecordRaw} from "vue-router";
import ViewStart from "../views/ViewStart.vue";
import ViewWorkspace from "../views/ViewWorkspace.vue";
import ViewWorkspaceSectionMain from "@/components/view-workspace/sections/main/ViewWorkspaceSectionMain.vue";
import ViewWorkspaceSectionUnitCalc
    from "@/components/view-workspace/sections/unit-calc/ViewWorkspaceSectionUnitCalc.vue";
import ViewWorkspaceSectionStatistic
    from "@/components/view-workspace/sections/statistic/ViewWorkspaceSectionStatistic.vue";

export const viewRoutes: RouteRecordRaw[] = [
    {
        path: '/',
        component: ViewStart
    },
    {
        name: 'workspace',
        path: '/workspace',
        component: ViewWorkspace,
        children: [
            {
                name: 'workspace-main',
                path: '',
                component: ViewWorkspaceSectionMain
            },
            {
                name: 'workspace-unit-calc',
                path: 'unit-calc',
                component: ViewWorkspaceSectionUnitCalc
            },
            {
                name: 'workspace-statistic',
                path: 'statistic',
                component: ViewWorkspaceSectionStatistic
            }]
    }];
