import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueScrollTo from 'vue-scrollto'
import App from './App.vue'
import "./scss/index.scss";

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(VueScrollTo, {
    duration: 700,
})
app.mount('#app')