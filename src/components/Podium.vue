<script setup>
import { defineProps } from 'vue';

import first from '@/assets/img/position/1stMKW.png'
import second from '@/assets/img/position/2ndMKW.png'
import third from '@/assets/img/position/3rdMKW.png'

const props = defineProps({
  miis: Array
})


</script>

<style>
body {
  font-family: sans-serif;
}

.container {
  display: flex;
  align-items: flex-end;
}

.podium__item {
  width: 200px;
}

.podium__rank {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  color: #fff;
  -webkit-text-stroke-width: 0.1rem;
  -webkit-text-stroke-color:dimgrey;
}

.podium__text {
  text-align: center;
  padding: 0 .5rem;
}



.podium .first {
  min-height: 250px;
  background: rgb(255,172,37);
background: 
  linear-gradient(333deg, 
  rgb(104, 89, 38) 0%, 
  rgba(181,171,74,1) 13%, 
  rgb(235, 231, 199) 53%, 
  rgb(93, 86, 24) 100%);
}

.podium .second {
  min-height: 200px;
  background: rgb(172, 172, 172);

  background: 
  linear-gradient(333deg, 
  rgb(118, 118, 118) 0%, 
  rgb(173, 169, 159) 13%, 
  rgb(233, 233, 233) 53%, 
  rgb(172, 172, 172) 100%);
}

.podium .third {
  min-height: 150px;
  background: rgb(172, 172, 172);

  background: 
  linear-gradient(333deg, 
  rgb(199, 130, 65) 0%, 
  rgb(246, 160, 79) 13%, 
  rgb(255, 181, 111) 53%, 
  rgb(201, 128, 60) 100%);
}
</style>

<template>
<div class="container podium flex align-middle justify-center mb-6">
  <div class="podium__item">
    <p class="podium__text flex justify-center">
        <!-- <img :src="miis[1]" /> -->
    </p>
    <div class="podium__rank second">
        <img :src="second" class="h-16"/>
        <p class="font-semibold">Abhilash</p>
    </div>
  </div>
  <div class="podium__item">
    <p class="podium__text flex justify-center">
        <!-- <img :src="miis[0]"/> -->
    </p>
    <div class="podium__rank first">
      <img :src="first" class="h-16"/>
      <p class="font-semibold ">Ω Eli</p>
    </div>
</div>
  <div class="podium__item">
    <p class="podium__text flex justify-center">
        <!-- <img :src="miis[2]" /> -->
    </p>
    <div class="podium__rank third">
      <img :src="third" class="h-16"/>
        <p class="font-semibold">Jake</p>
    </div>
  </div>
</div>
</template>
