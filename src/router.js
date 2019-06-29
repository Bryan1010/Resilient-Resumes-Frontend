import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Welcome from './views/Welcome.vue'



Vue.use(Router)

export default new Router({
  history: false,
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path:'/welcome',
      name: 'welcome',
      component: Welcome
    }
  ]
})