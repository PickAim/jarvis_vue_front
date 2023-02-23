import {createRouter, createWebHashHistory} from "vue-router";
import {testRoutes} from "@/router/test";

export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        ...testRoutes
    ]
});
