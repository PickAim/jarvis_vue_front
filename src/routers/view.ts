import type {RouteRecordRaw} from "vue-router";
import ViewStart from "../views/ViewStart.vue";
import ViewWorkspace from "../views/ViewWorkspace.vue";

export const viewRoutes: RouteRecordRaw[] = [{
        path: '/',
        component: ViewStart
    },
    {
        name: 'workspace',
        path: '/workspace/:appName',
        component: ViewWorkspace
    }];
