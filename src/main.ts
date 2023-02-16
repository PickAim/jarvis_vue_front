import { createApp } from 'vue'
import {createRouter, createWebHashHistory} from 'vue-router';

import App from './App.vue'
import JIntro from '@/pages/JIntro.vue'
import JWorkspace from '@/pages/JWorkspace.vue'
import JUnitEconCalc from '@/pages/JUnitEconCalc.vue'
import JStorageMap from '@/pages/JStorageMap.vue'
import JAuthTestComponent from '@/test/JTest.vue'
import './assets/tailwind.css'
import RequestHandlerClass from "@/packages/RequestHandler/RequestHandlerClass";

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
    }, {
        path: '/test/',
        component: JAuthTestComponent
    }]
});

const app = createApp(App);
app.provide('requestHandler', new RequestHandlerClass());
app.use(router);
app.mount('#app');
