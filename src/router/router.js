import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Msite from '@/views/Msite/Msite.vue'
import Order from '@/views/Order/Order.vue'
import Profile from '@/views/Profile/Profile.vue'
import Search from '@/views/Search/Search.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Home,
    redirect: '/Msite'
  },
  {
    path: '/Msite',
    name: 'Msite',
    component: Msite
  },
  {
    path: '/Order',
    name: 'Order',
    component: Order
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/Search',
    name: 'Search',
    component: Search
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
                import ( /* webpackChunkName: "about" */ '@/views/About.vue')
  }
  ]
})