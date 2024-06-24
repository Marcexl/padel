// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/LoginView.vue'
import Register from '../views/RegisterView.vue'
import Home from '../views/HomeView.vue'
import DonateView from '../views/DonateView.vue'
import { useAuthStore } from '../stores/auth'
import GruposView from '@/views/GameViews/GruposView.vue'
import PointsView from '@/views/GameViews/PointsView.vue'
import MatchView from '@/views/GameViews/MatchView.vue'
import AgendaView from '@/views/GameViews/AgendaView.vue'
import TournamentView from '@/views/GameViews/TournamentView.vue'

const routes = [
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/game/grupos', component: GruposView },
  { path: '/game/points', component: PointsView },
  { path: '/game/match', component: MatchView },
  { path: '/donate', component: DonateView },
  { path: '/game/agenda', component: AgendaView },
  { path: '/game/tournament', component: TournamentView },
  { path: '/', component: Home, meta: { requiresAuth: true } }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  if (to.matched.some((record) => record.meta.requiresAuth) && !authStore.user) {
    next('/login')
  } else {
    next()
  }
})

export default router
