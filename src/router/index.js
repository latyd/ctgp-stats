import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LeaderboardView from '@/views/LeaderboardView.vue'
import PlayerView from '@/views/PlayerView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/leaderboard',
      name: 'leaderboard',
      component: LeaderboardView
    },
    {
      path: '/player/:playerId',
      name: 'player',
      component: PlayerView
    }
  ]
})

export default router
