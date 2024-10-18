<script setup>
import { RouterLink, useRoute } from 'vue-router';
import logo from '@/assets/img/logo.png'
import icon from '@/assets/img/icon.png'



const isActiveLink = (routePath) => {
    const route = useRoute();
    return route.path === routePath;
}
</script>

<template>
    <nav class="bg-black border-b-2 border-orange-400">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="flex h-20 items-center justify-between">
          <div
            class="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
          >
            <!-- Logo -->
            <RouterLink class="flex flex-shrink-0 items-center mr-4" to="/">
              <img class="h-10 w-auto" :src="icon" alt="CTGP Stats" />
              <span class="hidden md:block text-white text-2xl ml-3 font-serif"
                ></span
              >
            </RouterLink>
            <div class="md:ml-auto">
              <div class="flex space-x-2">
                <RouterLink
                  to="/"
                  :class="[isActiveLink('/') ? 'bg-neutral-900' : 'hover:bg-neutral-900 hover:text-white', 'text-white', 'px-3', 'py-2', 'rounded-full', 'uppercase', 'italic', 'font-bold']"
                  >Home</RouterLink
                >
                <RouterLink
                  to="/leaderboard"
                  :class="[isActiveLink('/leaderboard') ? 'bg-neutral-900' : 'hover:bg-neutral-900 hover:text-white', 'text-white', 'px-3', 'py-2', 'rounded-full', 'uppercase', 'italic', 'font-bold']"
                  >Leaderboard</RouterLink
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
</template>
