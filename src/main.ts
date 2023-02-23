import { createApp } from 'vue'
import App from './App.vue'
import {router} from "@/router";
import './assets/tailwind.css'
import RequestHandlerClass from "@/packages/RequestHandler/RequestHandlerClass";

const app = createApp(App);
app.provide('requestHandler', new RequestHandlerClass());
app.use(router);
app.mount('#app');
