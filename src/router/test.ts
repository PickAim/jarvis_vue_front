import TestAuth from "@/component/test/TestAuth.vue";
import TestControl from "@/component/test/TestControl.vue"
import type {RouteRecordRaw} from "vue-router";

export const testRoutes: RouteRecordRaw[] = [{
        path: '/test/auth',
        component: TestAuth
    },
    {
        path: '/test/control',
        component: TestControl
    }];
