import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
 import router from './router/index.js';
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

createApp(App).use(pinia).use(router).mount('#app')
