<script setup>
import WRListing from './WRListing.vue'
import { reactive, defineProps, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import axios from 'axios';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'


const state = reactive({
    times: [],
    isLoading: true
});

onMounted(async () => {
    try {
        const response = await axios.get('http://tt.chadsoft.co.uk/index.json');
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
    <section class="bg-gray-600 px-4 py-10">
        <div class="container-xl lg:container m-auto">
            <h2 class="text-3xl font-bold text-white mb-6 text-center">
                Recent Times
            </h2>
            <!-- Show loading spinner while loading is true -->
            <div v-if="state.isLoading" class="text-center text-gray-500 py-6">
                <PulseLoader />
            </div>

            <!-- Show job listing when done loading -->
            <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <WRListing v-for="time in state.times" :key="time.id" :time="time"/>
            </div>
        </div>
    </section>
</template>
