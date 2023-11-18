import { createApp } from 'vue'
import './assets/styles/index.scss'
import App from './App.vue'
import pinia from './store/index'
import router from './router/index'

const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')
