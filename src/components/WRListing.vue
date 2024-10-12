<script setup>
import { defineProps, ref, computed } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
  time: Object,
});

const getCategory = (category) => {
    switch (category) {
        case 0:
            return "150cc No-Shortcut"
        case 1:
            return "150cc Glitch"
        case 2:
            return "150cc No-Shortcut"
        case 3:
            return "150cc TAS"
        case 4:
            return "200cc No-Shortcut"
        case 5:
            return "200cc Glitch"
        case 6:
            return "200cc No-Shortcut"
        case 7:
            return "200cc TAS"
        case 16:
            return "150cc Shortcut"
        case 20:
            return "200cc Shortcut"
        default:
            return "150cc No-Shortcut"
    }   
} 
</script>

<template>
  <div class="bg-gray-800 rounded-xl shadow-md relative">
    <div class="p-4">
      <div class="mb-6 flex items-center justify-between">
        <div>
            <div class="text-gray-300 my-2">{{ time.trackName + ' (' + getCategory(time.categoryId) + ')' }}</div>
            <h3 class="text-white text-xl font-bold">{{ time.finishTimeSimple }}</h3>
            <div class="text-white text-xl font-bold my-2">{{ time.player }}</div>
        </div>
        <img class="h-20 w-auto" :src="'https://www.chadsoft.co.uk/time-trials' + time._links.item.href.substring(0, time._links.item.href.length-5) + '.mii'" />
      </div>

      <div class="border border-gray-100 mb-5"></div>


    </div>
  </div>
</template>
