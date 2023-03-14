import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from "@/App.vue";
import {router} from '@/routers'
import '@/assets/tailwind.css'
//import VueDragscroll from "vue-dragscroll";

const app = createApp(App)

app.use(createPinia())
//app.use(VueDragscroll);
app.use(router)

app.mount('#app')
