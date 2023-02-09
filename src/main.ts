import { createApp } from 'vue'
import {createRouter, createWebHashHistory} from 'vue-router';

import App from './App.vue'
import JIntro from '@/pages/JIntro.vue'
import JWorkspace from '@/pages/JWorkspace.vue'
import JUnitEconCalc from '@/pages/JUnitEconCalc.vue'
import JStorageMap from '@/pages/JStorageMap.vue'
import './assets/tailwind.css'
import {AppTransferContainer} from "@/AppTransferContainer";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [{
        path: '/',
        component: JIntro
    }, {
        path: '/workspace/:name',
        name: 'workspace',
        component: JWorkspace,
        props: true,
        children: [
            {
                path: 'unit',
                name: 'unit',
                component: JUnitEconCalc,
                props: true,
            },
            {
                path: 'storages',
                name: 'storages',
                component: JStorageMap,
                props: true,
            }
        ]
    }]
});

const app = createApp(App);
app.config.globalProperties.appTransferContainer = new AppTransferContainer(33,2);
app.use(router);
app.mount('#app');
