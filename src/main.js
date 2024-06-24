import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import './assets/main.css'
import { createPinia } from 'pinia'
import router from './router'

const app = createApp(App)
app.use(PrimeVue)
app.use(createPinia())
app.use(router)
app.mount('#app')
