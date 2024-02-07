import './assets/main.css'
import '@/assets/css/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'

import App from './AppSample.vue'
import router from './router/index_sample'

const START_APP = () => {
    const app = createApp(App);

    const pinia = createPinia();
    pinia.use(piniaPluginPersistedState);
    

    app.use(pinia)
    .use(router)
    .mount('#app');
}

START_APP();