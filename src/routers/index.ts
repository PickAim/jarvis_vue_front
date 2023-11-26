import {createRouter, createWebHistory} from "vue-router";
import {testRoutes} from "@/routers/testRouter";
import {viewRoutes} from "@/routers/viewsRouter";
import {ResultCode} from "@/requests/ResultCode";
import {useRequestStore} from "@/stores/requestStore";
import AccountRequester from "@/requests/requesters/AccountRequester";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        ...testRoutes,
        ...viewRoutes
    ]
});

router.beforeEach(async (to, from, next) => {
    if (to.fullPath == "/") {
        await useRequestStore().executeInBackground(async () => {
            if ((await (new AccountRequester()).loginToken()).code == ResultCode.OK) {
                await router.replace("/workspace");
            }
        });
    }
    next();
})
