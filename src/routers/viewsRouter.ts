import type {RouteRecordRaw} from "vue-router";
import ViewStart from "../components/view-start/ViewStart.vue";
import ViewWorkspace from "../components/view-workspace/ViewWorkspace.vue";
import ViewTariffs from "@/components/view-start/ViewTariffs.vue" ;
import {workspaceRouter} from "@/routers/workspaceRouter";

export const viewRoutes: RouteRecordRaw[] = [
    {
        path: '/',
        component: ViewStart
    },
    {
        name: 'ViewStart',
        path: '/tariffs',
        component: ViewTariffs,
    },
    {
        name: 'workspace',
        path: '/workspace',
        component: ViewWorkspace,
        children: workspaceRouter
    }];
