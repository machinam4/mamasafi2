import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VCalendar from 'v-calendar';
import 'v-calendar/dist/style.css';
import store from './store'


const app = createApp(App)

app.use(router).use(store)

// Use plugin with defaults calendar and datepicker
app.use(VCalendar, {})

app.mount('#app')
