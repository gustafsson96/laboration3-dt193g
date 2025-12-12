import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import FilmView from '@/views/FilmView.vue'
import InfoView from '@/views/InfoView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'hem',
      component: HomeView
    },
    {
      path: '/film',
      name: 'film',
      component: FilmView
    },
    {
      path: '/info',
      name: 'info',
      component: InfoView
    }
  ],
})

export default router
