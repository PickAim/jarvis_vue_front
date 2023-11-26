import {createRouter, createWebHistory} from "vue-router";
import {testRoutes} from "@/routers/testRouter";
import {viewRoutes} from "@/routers/viewsRouter";
import {AccountRequestActions} from "@/requests/request-actions/AccountRequestActions";
import {ResultCode} from "@/requests/ResultCode";
import {useRequestStore} from "@/stores/requestStore";

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
            if ((await (new AccountRequestActions()).loginToken()).code == ResultCode.OK) {
                await router.replace("/workspace");
            }
        });
    }
    next();
})
