import {createRouter, createWebHistory} from "vue-router";
import {testRoutes} from "@/routers/testRouter";
import {viewRoutes} from "@/routers/viewsRouter";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        ...testRoutes,
        ...viewRoutes
    ]
});
