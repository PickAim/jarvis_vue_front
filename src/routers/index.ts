import {createRouter, createWebHashHistory} from "vue-router";
import {testRoutes} from "@/routers/test";
import {viewRoutes} from "@/routers/view";

export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        ...testRoutes,
        ...viewRoutes
    ]
});
