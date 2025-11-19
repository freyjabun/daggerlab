import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import router from './router'
import App from './App.vue'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(router)
app.use(pinia)
app.mount('#app')

