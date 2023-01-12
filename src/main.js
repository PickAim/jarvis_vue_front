import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from "vue-router";
import App from './App.vue';
import JIntro from "@/pages/JIntro.vue";
const router = createRouter({
    history: createWebHashHistory(),
    routes: [{
            path: "/",
            component: JIntro
        }, {
            path: "/workspace",
            component: JWorkspace
        }]
});
createApp(App).mount('#app');
//# sourceMappingURL=main.js.map