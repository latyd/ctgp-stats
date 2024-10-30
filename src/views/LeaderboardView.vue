<script setup>
import Leaderboard from '@/components/Leaderboard.vue';
import Podium from '@/components/Podium.vue';
</script>

<template>
    <div class="title mt-10">
        <h2 class="text-3xl sm:text-5xl px-6 font-black font-sans mb-6 text-center bg-gradient-to-b from-slate-50 to-slate-500 bg-clip-text text-transparent uppercase italic ">
            CTGP Player Leaderboard
        </h2>
        <div class="px-6">
            <div class="wrCard px-10 bg-gray-800 rounded-xl shadow-xl outline outline-offset-4 outline-2 ring-4 ring-indigo-300">
                <div class="font-sans font-semibold mb-6 items-center justify-between">
                    <h2 class="text-3xl px-6 pt-2 font-black font-sans text-center text-slate-500 uppercase italic ">
                        Note
                    </h2>
                    <div class="list py-4 text-neutral-600">
                        <li>Player must be top 10 on at least one track to be listed</li>
                        <li>Separate consoles are not accounted for (at the moment)</li>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <p class="text-sm text-white mb-6 text-center">
    </p>
    <section class="md:px-32 px-6">
        <Leaderboard />
    </section>
</template>
