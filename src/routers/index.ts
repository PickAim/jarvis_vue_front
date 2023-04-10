import {createRouter, createWebHashHistory} from "vue-router";
import {testRoutes} from "@/routers/testRouter";
import {viewRoutes} from "@/routers/viewsRouter";

export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        ...testRoutes,
        ...viewRoutes
    ]
});
