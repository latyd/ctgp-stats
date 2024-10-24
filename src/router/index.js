import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LeaderboardView from '@/views/LeaderboardView.vue'
import PlayerView from '@/views/PlayerView.vue'
import MiiView from '@/views/MiiView.vue'
import GhostView from '@/views/GhostView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
    },
    {
      path: '/mii',
      name: 'mii',
      component: MiiView
    },
    {
      path: '/ghost/:ghostId',
      name: 'ghost',
      component: GhostView
    },
  ]
})

export default router
