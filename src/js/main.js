import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import Home from '../views/Home.vue'
import WhyWeExist from '../views/WhyWeExist.vue'
import HowItWorks from '../views/HowItWorks.vue'

// Import our custom CSS
import '../scss/styles.scss'

// Import only the Bootstrap components we need
import { Popover } from 'bootstrap';


// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]')
  .forEach(popover => {
    new Popover(popover)
  })


const routes = [
  { path: '/', component: Home },
  { path: '/why-we-exist', component: WhyWeExist },
  { path: '/how-it-works', component: HowItWorks },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes, 
})

// const app = Vue.createApp({})
const app = createApp(App)

app.use(router)

app.mount('#app')
