import TestAuth from "../components/test/TestAuth.vue";
import TestControl from "../components/test/TestControl.vue";
import TestOverlay from "../components/test/TestOverlay.vue";
import TestMenu from "../components/test/TestMenu.vue";
import TestNotifications from "../components/test/TestNotifications.vue";
import type {RouteRecordRaw} from "vue-router";

export const testRoutes: RouteRecordRaw[] = [
    {
        path: '/test',
        component: TestMenu,
        children: [
            {
                path: 'auth',
                component: TestAuth
            },
            {
                path: 'control',
                component: TestControl
            },
            {
                path: 'overlay',
                component: TestOverlay
            },{
                path: 'notifications',
                component: TestNotifications
            },
        ]
    },
];
