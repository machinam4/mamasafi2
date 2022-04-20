import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import BookView from '../views/BookView.vue'
import ServiceView from '../views/ServiceView.vue'
import ServiceSelect from '../components/book/ServiceSelect2.vue' 
import ServiceForm from '../components/book/ServiceForm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView
    },
    {
      path: '/book',
      name: 'Book',
      component: BookView
    },
    {
      path: '/service',
      name: 'Service',
      redirect: '/service/select',
      component: ServiceView,
      children:[
        {path: '/service/select', name: 'ServiceSelect', component: ServiceSelect},
        {path: '/service/form', name: 'ServiceForm', component: ServiceForm},
      ]
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
