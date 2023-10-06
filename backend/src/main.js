import './assets/main.css'
import store from './store'
import router from './router'
import './index.css'
import { createApp } from 'vue'
import App from './App.vue'

createApp(App)

.use(store)
.use(router)
.mount('#app')
