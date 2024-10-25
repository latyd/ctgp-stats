<script setup>
import axios from 'axios';
import { onMounted } from 'vue';

onMounted(async () => {
    const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${import.meta.env.VITE_YOUTUBE_API_KEY}&channelId=${import.meta.env.VITE_CHANNEL_ID}`)
    const channel = response.data;
    console.log(channel);
});

</script>

<template>

</template>
