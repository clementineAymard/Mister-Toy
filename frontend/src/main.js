import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import './styles/main.css' // this is how we connect styles

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
