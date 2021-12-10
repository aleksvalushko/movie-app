import Vue from 'vue'
import VueRouter from 'vue-router'

import MovieCard from '../05-components/MovieCard'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main'
  },
  {
    path: '/movie/:id',
    name: 'Movie',
    component: MovieCard
  }
]

const router = new VueRouter({
  routes
})

export default router
