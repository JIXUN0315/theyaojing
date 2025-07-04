import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Template from '../pages/Template.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/template',
    name: 'template',
    component: Template,
  }
  // {
  //   path: '/template',
  //   name: 'template',
  //   component: Template,
  //   meta: { hideLayout: true } 
  // }
]


const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
