import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import Home from '../views/Home.vue'
import WhyWeExist from '../views/WhyWeExist.vue'
import HowItWorks from '../views/HowItWorks.vue'
import GalileeInCommunities from '../views/GalileeInCommunities.vue'
import AboutUs from '../views/AboutUs.vue'
import Support from '../views/Support.vue'

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
  { path: '/galilee-in-communities', component: GalileeInCommunities },
  { path: '/about-us', component: AboutUs },
  { path: '/support', component: Support },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: Home,
    redirect: "/"
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes, 
})

// const app = Vue.createApp({})
const app = createApp(App)

app.use(router)

app.mount('#app')
