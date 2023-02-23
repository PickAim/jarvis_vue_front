import AuthTestComponent from "@/component/test/AuthTest.vue";
import ControlTestComponent from "@/component/test/ControlTest.vue"
import {RouteRecordRaw} from "vue-router";

export const testRoutes: RouteRecordRaw[] = [{
        path: '/test/auth',
        component: AuthTestComponent
    },
    {
        path: '/test/control',
        component: ControlTestComponent
    }];
