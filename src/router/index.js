import Vue from 'vue'
import VueRouter from 'vue-router'
import Exp1 from '../views/exp1'
import Exp2 from '../views/exp2'
import Exp3 from '../views/exp3'
import Exp4 from '../views/exp4'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Exp1',
    component: Exp1
  },
  {
    path: '/exp2',
    name: 'Exp2',
    component: Exp2
  },
  {
    path: '/exp3',
    name: 'Exp3',
    component: Exp3
  },
  {
    path: '/exp4',
    name: 'Exp4',
    component: Exp4
  }
]

const router = new VueRouter({
  routes
})

export default router
