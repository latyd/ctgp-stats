<script setup>
import { onMounted, reactive } from 'vue'
import { RouterLink, useRoute } from 'vue-router';
import logo from '@/assets/img/logo.png'
import icon from '@/assets/img/icon.png'

const state = reactive({
  navLinks: null,
  isMenuOpen: false,
})

const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
}

const onToggleMenu = (e) => {
  state.isMenuOpen = !state.isMenuOpen
  state.navLinks.classList.toggle('top-[0%]')
  e.target.classList.toggle('pi-bars');
  e.target.classList.toggle('pi-times')
}

onMounted(() => {
  state.navLinks = document.querySelector('.nav-links')
})
</script>

<template>
  <header class="bg-black border-b-2 border-orange-400 font-sans z-10" id="navbar">
    <nav class="flex justify-between items-center w-[92%] mx-auto h-20">
      <div>
        <RouterLink class="flex flex-shrink-0 items-center mr-4" to="/">
          <img class="h-10 w-auto" :src="icon" alt="CTGP Stats" />
          <span class="hidden md:block text-white text-2xl ml-3 font-serif"></span>
        </RouterLink>
      </div>
      <div
        class="nav-links duration-500 md:static absolute md:min-h-fit min-h-[25vh] left-0 top-[-100%] bg-black md:w-auto  w-full flex items-center px-5 md:border-none border-b-2 border-orange-400">
        <ul class="flex md:flex-row flex-col md:items-center md:gap-[1vw] gap-5 text-white">
          <li>
            <RouterLink to="/"
              :class="[isActiveLink('/') ? 'bg-zinc-700' : 'hover:bg-zinc-800 hover:text-white', 'text-white', 'px-3', 'py-2', 'rounded-full', 'font-bold']">
              Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/leaderboard"
              :class="[isActiveLink('/leaderboard') ? 'bg-zinc-700' : 'hover:bg-zinc-800 hover:text-white', 'text-white', 'px-3', 'py-2', 'rounded-full', 'font-bold']">
              Leaderboard</RouterLink>
          </li>
          <li>
            <RouterLink to="/mii"
              :class="[isActiveLink('/mii') ? 'bg-zinc-700' : 'hover:bg-zinc-800 hover:text-white', 'text-white', 'px-3', 'py-2', 'rounded-full', 'font-bold']">
              Mii</RouterLink>
          </li>
          <!-- <li v-if="state.isMenuOpen">
            <button
              class="hover:bg-zinc-800 hover:text-white text-white px-3 py-2 rounded-full font-bold"  @click="onToggleMenu">
              Close</button>
          </li> -->
        </ul>
      </div>
      <div class="flex items-center gap-6 text-3xl cursor-pointer md:hidden" id="menuIcon">
        <i class="pi pi-bars" style="color: white; font-size: 1.5rem" @click="onToggleMenu"></i>
      </div>
    </nav>
  </header>
</template>
