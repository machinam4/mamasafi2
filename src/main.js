import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VCalendar from 'v-calendar';
import 'v-calendar/dist/style.css';


const app = createApp(App)

app.use(router)

// Use plugin with defaults calendar and datepicker
app.use(VCalendar, {})

app.mount('#app')
