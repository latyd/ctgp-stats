<script setup>
import { reactive, defineProps, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import axios from 'axios';
import ScaleLoader from 'vue-spinner/src/ScaleLoader.vue'
import InputText from 'primevue/inputtext';
import Podium from './Podium.vue';

import gcn from '@/assets/img/controllers/gcn.png'
import classic from '@/assets/img/controllers/classic.png'
import nunchuk from '@/assets/img/controllers/nunchuk.png'
import wheel from '@/assets/img/controllers/wiiwheel.png'

const state = reactive({
    stats: [],
    isLoading: true,
    lastUpdated: '',
});

const getControllerImage = (controllerId) => {
    switch(controllerId) {
        case 0:
            return wheel
        case 1:
            return nunchuk
        case 2:
            return classic
        case 3:
            return gcn
    }
}

const getFlagEmoji = (region) => {
    switch(region) {
        case 1: return '🇯🇵' 
        case 8: return '🇦🇮' 
        case 9: return '🇦🇬' 
        case 10: return '🇦🇷' 
        case 11: return '🇦🇼' 
        case 12: return '🇧🇸' 
        case 13: return '🇧🇧' 
        case 14: return '🇧🇿' 
        case 15: return '🇧🇴' 
        case 16: return '🇧🇷' 
        case 17: return '🇻🇬'
        case 18: return '🇨🇦' 
        case 19: return '🇰🇾' 
        case 20: return '🇨🇱' 
        case 21: return '🇨🇴' 
        case 22: return '🇨🇷' 
        case 23: return '🇩🇲' 
        case 24: return '🇩🇴' 
        case 25: return '🇪🇨' 
        case 26: return '🇸🇻' 
        case 27: return '🇬🇫' 
        case 28: return '🇬🇩' 
        case 29: return '🇬🇵' 
        case 30: return '🇬🇹' 
        case 31: return '🇬🇾' 
        case 32: return '🇭🇹' 
        case 33: return '🇭🇳' 
        case 34: return '🇯🇲' 
        case 35: return '🇲🇶' 
        case 36: return '🇲🇽' 
        case 37: return '🇲🇸' 
        case 38: return '🏳️' 
        case 39: return '🇳🇮'
        case 40: return '🇵🇦'
        case 41: return '🇵🇾'
        case 42: return '🇵🇪'
        case 43: return '🇰🇳' 
        case 44: return '🇱🇨' 
        case 45: return '🇻🇨' 
        case 46: return '🇸🇷'
        case 47: return '🇹🇹' 
        case 48: return '🇹🇨' 
        case 49: return '🇺🇸' 
        case 50: return '🇺🇾'
        case 51: return '🇻🇮' 
        case 52: return '🇻🇪'
        case 64: return '🇦🇱'
        case 65: return '🇦🇺'
        case 66: return '🇦🇹'
        case 67: return '🇧🇪'
        case 68: return '🇧🇦' 
        case 69: return '🇧🇼' 
        case 70: return '🇧🇬' 
        case 71: return '🇭🇷' 
        case 72: return '🇨🇾' 
        case 73: return '🇨🇿' 
        case 74: return '🇩🇰' 
        case 75: return '🇪🇪' 
        case 76: return '🇫🇮' 
        case 77: return '🇫🇷' 
        case 78: return '🇩🇪' 
        case 79: return '🇬🇷' 
        case 80: return '🇭🇺' 
        case 81: return '🇮🇸' 
        case 82: return '🇮🇪' 
        case 83: return '🇮🇹' 
        case 84: return '🇱🇻' 
        case 85: return '🇱🇸' 
        case 86: return '🇱🇮' 
        case 87: return '🇱🇹' 
        case 88: return '🇱🇺' 
        case 89: return '🇲🇰' 
        case 90: return '🇲🇹' 
        case 91: return '🇷🇸' 
        case 92: return '🇲🇿' 
        case 93: return '🇳🇦' 
        case 94: return '🇳🇱' 
        case 95: return '🇳🇿' 
        case 96: return '🇳🇴' 
        case 97: return '🇵🇱' 
        case 98: return '🇵🇹' 
        case 99: return '🇷🇴' 
        case 100: return '🇷🇺'
        case 101: return '🇷🇸'
        case 102: return '🇸🇰'
        case 103: return '🇸🇮'
        case 104: return '🇿🇦'
        case 105: return '🇪🇸'
        case 106: return '🇸🇿'
        case 107: return '🇸🇪'
        case 108: return '🇨🇭'
        case 109: return '🇹🇷'
        case 110: return '🇬🇧'
        case 111: return '🇿🇲'
        case 112: return '🇿🇼'
        case 113: return '🇦🇿'
        case 114: return '🇲🇷'
        case 115: return '🇲🇱'
        case 116: return '🇳🇪'
        case 117: return '🇹🇩'
        case 118: return '🇸🇩'
        case 119: return '🇪🇷'
        case 120: return '🇩🇯'
        case 121: return '🇸🇴'
        case 128: return '🇿🇼'
        case 144: return '🇰🇷'
        case 145: return '🇭🇰'
        case 148: return '🇹🇼'
        case 152: return '🇮🇩'
        case 153: return '🇸🇬'
        case 154: return '🇹🇭'
        case 155: return '🇵🇭'
        case 156: return '🇲🇾'
        case 160: return '🇨🇳'
        case 168: return '🇦🇪'
        case 169: return '🇮🇳'
        case 170: return '🇬🇶'
        case 171: return '🇴🇲'
        case 172: return '🇶🇦'
        case 173: return '🇰🇼'
        case 174: return '🇸🇦'
        case 175: return '🇸🇾'
        case 176: return '🇧🇭'
        case 177: return '🇯🇴'
        default: return ''
    }
}


const getProfileURL = (playerId) => {
    return "https://tt.chadsoft.co.uk/players/" + playerId.slice(0, 2) + "/" + playerId.slice(2) + ".json";
}

const getMiiUrl = (href) => {
    let miiUrl = href.substring(0, href.length - 4)
    return "https://www.chadsoft.co.uk/time-trials" + miiUrl + ".mii"
}

const getPlayerMii = async (playerURL) => {
    const response = await axios.get(playerURL)
    const playerData = await response.data
    console.log(playerData.ghosts[playerData.ghosts.length-1]['href'])
    const href = playerData.ghosts[playerData.ghosts.length-1]['href']
    return getMiiUrl(href)
}

const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleString();
}

onMounted(async () => {
    try {
        const response = await axios.get('https://domutay.github.io/ctgp-stats-database/ctgp-stats.json');
        const ctgpStats = await response.data
        state.lastUpdated = ctgpStats.lastUpdated;
        const entries = Object.entries(ctgpStats)
            .filter(([key]) => key !== "lastUpdated")
            .sort(([, a], [, b]) => b.score - a.score);
        state.stats = Object.fromEntries(entries); 
        // for (let i = 0; i < 3; i++) {
        //     let profileURL = getProfileURL(entries[i][0])
        //     state.miis.push(await getPlayerMii(profileURL))
        // }
        // console.log(miis)
        // const first = await axios.get(`https://tt.chadsoft.co.uk/`)
    } catch (error) {
        console.error('Error fetching times', error)
    } finally {
        state.isLoading = false;
    }
})

</script>

<template>

        <div v-if="state.isLoading" class="text-center text-gray-500 py-6">
            <ScaleLoader :color="'white'"/>
        </div>

        <div class="wrCard bg-gray-800 rounded-xl shadow-xl relative outline outline-offset-4 outline-1 ring-4 ring-indigo-300">
            <h1 class="font-bold pl-6 pt-5 text-neutral-700">Last Updated: {{ formatDate(state.lastUpdated) }}</h1>
            <div class="shadow-sm my-8 overflow-auto">
                <table class="table-auto w-full border-collapse mx-auto">
                    <thead class="text-neutral-600 font-sans">
                        <tr class="border-b-2 border-indigo-200 text-left">
                            <th scope="col" class="px-6 py-1">Rank</th>
                            <th scope="col" class="px-6 py-1">Player</th>
                            <th scope="col" class="px-6 py-1">Controller</th>
                            <th scope="col" class="px-6 py-1">BKTs</th>
                            <th scope="col" class="px-6 py-1">Tops</th>
                            <th scope="col" class="px-6 py-1">Stars</th>
                            <th scope="col" class="px-6 py-1">Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(player, key, index) in state.stats" :key="index" class="border-b border-indigo-100 font-medium text-neutral-600 text-left font-sans">
                            <td class="px-6 py-1" v-html="index + 1"></td>
                            <td class="px-6 py-1 font-semibold" id="miiNames">
                                <RouterLink :to="'/player/' + key">
                                    <span class="hover:text-blue-500">{{ getFlagEmoji(player.country) + " " + player.name }}</span>
                                </RouterLink>
                            </td>
                            <td class="px-6 py-1">
                                <img class="h-7" :src="getControllerImage(player.controller)"/>
                            </td>
                            <td class="px-6 py-1">{{ player.bkts }}</td>
                            <td class="px-6 py-1">{{ player.tops }}</td>
                            <td class="px-6 py-1">
                                <span style="color: #a88923" class="lg:text-sm sm:text-sm">{{ player.stars.gold + "/" }}</span>
                                
                                <span style="color: silver" class="lg:text-sm sm:text-sm">{{ player.stars.silver + "/" }}</span>
                                
                                <span style="color: #bf6439" class="lg:text-sm sm:text-sm">{{ player.stars.bronze }}</span>
                            </td>
                            <td class="px-6 py-1 font-bold">{{ player.score }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
</template>
