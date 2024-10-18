<script setup>
import WRListing from './WRListing.vue'
import { reactive, defineProps, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import axios from 'axios';
import ScaleLoader from 'vue-spinner/src/ScaleLoader.vue'

const state = reactive({
    times: [],
    isLoading: true
});

onMounted(async () => {
    try {
        const response = await axios.get('https://tt.chadsoft.co.uk/index.json');
        state.times = response.data.recentRecords
        console.log(state.times)
    } catch (error) {
        console.error('Error fetching times', error)
    } finally {
        state.isLoading = false;
    }
})
</script>

<template>
    <section class="px-3 py-10">
        <div class="container-xl lg:container m-auto overflow-auto">
            <h1 class="text-5xl font-black mb-6 text-center bg-gradient-to-b from-slate-50 to-slate-500 bg-clip-text text-transparent uppercase italic ">
                Recent Times
            </h1>
            <p class="text-sm text-white mb-6 text-center">
                World record times set on CTGP Revolution
            </p>
            <!-- Show loading spinner while loading is true -->
            <div v-if="state.isLoading" class="text-center text-gray-500 overflow-auto">
                <ScaleLoader :color="'white'"/>
            </div>

            <!-- Show job listing when done loading -->
            <div v-else class="columns-1 md:columns-3 overflow-auto">
                <h2 class="text-2xl font-black mb-6 text-center bg-gradient-to-b from-slate-50 to-slate-600 bg-clip-text text-transparent uppercase italic underline decoration-gray-400">
                    Regular Tracks
                </h2>
                <div v-for="time in state.times" class="mb-6 mx-3">
                    <div v-if="!time.trackVersion && !time['200cc']">
                        <WRListing :time="time"/>
                    </div>
                </div>
                <h2 class="text-2xl font-black mb-6 text-center bg-gradient-to-b from-slate-50 to-slate-600 bg-clip-text text-transparent uppercase italic underline decoration-gray-400">
                    Custom Tracks
                </h2>
                <div v-for="time in state.times" class="mb-6 mx-3">
                    <div v-if="time.trackVersion && !time['200cc']">
                        <WRListing :time="time"/>
                    </div>
                </div>
                <h2 class="text-2xl font-black mb-6 text-center bg-gradient-to-b from-slate-50 to-slate-600 bg-clip-text text-transparent uppercase italic underline decoration-gray-400">
                    200cc
                </h2>
                <div v-for="time in state.times" class="mb-6 mx-3">
                    <div v-if="time['200cc']">
                        <WRListing :time="time"/>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
</template>
