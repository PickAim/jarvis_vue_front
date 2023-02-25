import TestAuth from "@/component/test/TestAuth.vue";
import TestControl from "@/component/test/TestControl.vue";
import TestOverlay from "@/component/test/TestOverlay.vue";
import TestMenu from "@/component/test/TestMenu.vue";
import TestNotifications from "@/component/test/TestNotifications.vue";
export const testRoutes = [
    {
        path: '/test',
        component: TestMenu
    },
    {
        path: '/test/auth',
        component: TestAuth
    },
    {
        path: '/test/control',
        component: TestControl
    },
    {
        path: '/test/overlay',
        component: TestOverlay
    }, {
        path: '/test/notifications',
        component: TestNotifications
    },
];
