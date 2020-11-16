import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
import CreateProject from '@/views/admin/Project/CreateProject.vue'
import DasboardAdmin from '@/views/admin/Dashboard.vue'
import Purchase from '@/views/Payment/Purchase'
import Membership from '@/views/admin/membership'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sign-in',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/product',
    name: 'Product'
  },
  {
    path: '/add-project',
    name: 'CreateProject',
    component: CreateProject
  },
  {
    path: '/dashboard-admin',
    name: 'DashboardAdmin',
    component: DasboardAdmin
  },
  {
    path: '/purchase',
    name: 'Purchase',
    component: Purchase
  },
  {
    path: '/membership',
    name: 'Membership',
    component: Membership
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
