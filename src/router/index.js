import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/counter',
    name: 'counter',
      component: () => import(/* webpackChunkName: "counter" */ '../views/CounterView.vue')
  },
  {
    path: '/users',
    name: 'users',
      component: () => import(/* webpackChunkName: "users" */ '../views/UsersView.vue')
  },
  {
    path: '/pokemon-search',
    name: 'pokemon-search',
      component: () => import(/* webpackChunkName: "pokemon-search" */ '../views/SearchPokemon.vue')
  },
  {
    path: '/pokemon/:id',
    name: 'pokemon-view',
      component: () => import(/* webpackChunkName: "pokemon-view" */ '../views/Pokemon.vue')
  },
  {
    path: '/todo',
    name: 'todo-view',
      component: () => import(/* webpackChunkName: "todo-view" */ '../views/TodoVuex.vue')
  },
  {
    path: '/slots',
    name: 'slots',
      component: () => import(/* webpackChunkName: "slots" */ '../views/CustomSlot.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
