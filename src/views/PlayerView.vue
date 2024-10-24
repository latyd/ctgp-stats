<script setup>
import ScaleLoader from 'vue-spinner/src/ScaleLoader.vue'
import InputText from 'primevue/inputtext';
import ToggleButton from 'primevue/togglebutton';
import axios from 'axios';
import { reactive, onMounted } from 'vue';
import { useRoute, RouterLink, useRouter } from 'vue-router';
import gcn from '@/assets/img/controllers/gcn.png'
import classic from '@/assets/img/controllers/classic.png'
import nunchuk from '@/assets/img/controllers/nunchuk.png'
import wheel from '@/assets/img/controllers/wiiwheel.png'
import gold from '@/assets/img/stars/gold_star.png'
import silver from '@/assets/img/stars/silver_star.png'
import bronze from '@/assets/img/stars/bronze_star.png'


const route = useRoute();
const router = useRouter();
const playerId = route.params.playerId;
const playerIdURL = playerId.slice(0, 2) + "/" + playerId.slice(2);

const state = reactive({
    player: {},
    isLoading: true,
    cc: false,
})


const getMiiUrl = (href) => {
    miiUrl = href.substring(0, href.length - 4)
    return "https://www.chadsoft.co.uk/time-trials" + miiUrl + ".mii"
}

let miiUrl = ''

const getControllerImage = (controllerId) => {
    switch (controllerId) {
        case (0):
            return wheel
        case (1):
            return nunchuk
        case (2):
            return classic
        case (3):
            return gcn
    }
}

const getCategory = (category, cc) => {
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
            if (cc == true) {
                return "200cc No-Shortcut"
            } else {
                return "150cc No-Shortcut"
            }
    }
}

const getFlagEmoji = (region) => {
    switch (region) {
        case (1): return '🇯🇵'
        case (8): return '🇦🇮'
        case (9): return '🇦🇬'
        case (10): return '🇦🇷'
        case (11): return '🇦🇼'
        case (12): return '🇧🇸'
        case (13): return '🇧🇧'
        case (14): return '🇧🇿'
        case (15): return '🇧🇴'
        case (16): return '🇧🇷'
        case (17): return '🇻🇬'
        case (18): return '🇨🇦'
        case (19): return '🇰🇾'
        case (20): return '🇨🇱'
        case (21): return '🇨🇴'
        case (22): return '🇨🇷'
        case (23): return '🇩🇲'
        case (24): return '🇩🇴'
        case (25): return '🇪🇨'
        case (26): return '🇸🇻'
        case (27): return '🇬🇫'
        case (28): return '🇬🇩'
        case (29): return '🇬🇵'
        case (30): return '🇬🇹'
        case (31): return '🇬🇾'
        case (32): return '🇭🇹'
        case (33): return '🇭🇳'
        case (34): return '🇯🇲'
        case (35): return '🇲🇶'
        case (36): return '🇲🇽'
        case (37): return '🇲🇸'
        case (38): return '🏳️'
        case (39): return '🇳🇮'
        case (40): return '🇵🇦'
        case (41): return '🇵🇾'
        case (42): return '🇵🇪'
        case (43): return '🇰🇳'
        case (44): return '🇱🇨'
        case (45): return '🇻🇨'
        case (46): return '🇸🇷'
        case (47): return '🇹🇹'
        case (48): return '🇹🇨'
        case (49): return '🇺🇸'
        case (50): return '🇺🇾'
        case (51): return '🇻🇮'
        case (52): return '🇻🇪'
        case (64): return '🇦🇱'
        case (65): return '🇦🇺'
        case (66): return '🇦🇹'
        case (67): return '🇧🇪'
        case (68): return '🇧🇦'
        case (69): return '🇧🇼'
        case (70): return '🇧🇬'
        case (71): return '🇭🇷'
        case (72): return '🇨🇾'
        case (73): return '🇨🇿'
        case (74): return '🇩🇰'
        case (75): return '🇪🇪'
        case (76): return '🇫🇮'
        case (77): return '🇫🇷'
        case (78): return '🇩🇪'
        case (79): return '🇬🇷'
        case (80): return '🇭🇺'
        case (81): return '🇮🇸'
        case (82): return '🇮🇪'
        case (83): return '🇮🇹'
        case (84): return '🇱🇻'
        case (85): return '🇱🇸'
        case (86): return '🇱🇮'
        case (87): return '🇱🇹'
        case (88): return '🇱🇺'
        case (89): return '🇲🇰'
        case (90): return '🇲🇹'
        case (91): return '🇷🇸'
        case (92): return '🇲🇿'
        case (93): return '🇳🇦'
        case (94): return '🇳🇱'
        case (95): return '🇳🇿'
        case (96): return '🇳🇴'
        case (97): return '🇵🇱'
        case (98): return '🇵🇹'
        case (99): return '🇷🇴'
        case (100): return '🇷🇺'
        case (101): return '🇷🇸'
        case (102): return '🇸🇰'
        case (103): return '🇸🇮'
        case (104): return '🇿🇦'
        case (105): return '🇪🇸'
        case (106): return '🇸🇿'
        case (107): return '🇸🇪'
        case (108): return '🇨🇭'
        case (109): return '🇹🇷'
        case (110): return '🇬🇧'
        case (111): return '🇿🇲'
        case (112): return '🇿🇼'
        case (113): return '🇦🇿'
        case (114): return '🇲🇷'
        case (115): return '🇲🇱'
        case (116): return '🇳🇪'
        case (117): return '🇹🇩'
        case (118): return '🇸🇩'
        case (119): return '🇪🇷'
        case (120): return '🇩🇯'
        case (121): return '🇸🇴'
        case (128): return '🇿🇼'
        case (144): return '🇰🇷'
        case (145): return '🇭🇰'
        case (148): return '🇹🇼'
        case (152): return '🇮🇩'
        case (153): return '🇸🇬'
        case (154): return '🇹🇭'
        case (155): return '🇵🇭'
        case (156): return '🇲🇾'
        case (160): return '🇨🇳'
        case (168): return '🇦🇪'
        case (169): return '🇮🇳'
        case (170): return '🇬🇶'
        case (171): return '🇴🇲'
        case (172): return '🇶🇦'
        case (173): return '🇰🇼'
        case (174): return '🇸🇦'
        case (175): return '🇸🇾'
        case (176): return '🇧🇭'
        case (177): return '🇯🇴'
        default: return ''
    }
}

const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleString();
}

const listMiiNames = (miiNames) => {
    let names = ''
    miiNames.forEach((miiName) => names += miiName + ', ')
    return names.substring(0, names.length - 2)
}

const getStar = (stars) => {
    if (stars.gold == true) {
        return gold;
    } else if (stars.silver == true) {
        return silver;
    } else if (stars.bronze == true) {
        return bronze;
    } else {
        return ''
    }
}

const toggleCc = () => {
    state.cc = !state.cc
}

const filterSearch = () => {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    table = document.getElementById("pbTable");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

onMounted(async () => {
    try {
        const response = await axios.get(`https://tt.chadsoft.co.uk/players/${playerIdURL}.json`);
        state.player = response.data
        miiUrl = getMiiUrl(state["player"]["ghosts"][state["player"]["ghosts"].length - 1]["href"])
        console.log(miiUrl)
    } catch (error) {
        console.error('Error fetching times', error)
        console.error(playerIdURL)
    } finally {
        state.isLoading = false;
    }
})
</script>

<template>
    <section v-if="!state.isLoading">
        <div class="container m-auto py-10 px-6">
            <div class="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
                <main>
                    <div
                        class="wrCard bg-gray-800 rounded-xl shadow-xl relative outline outline-offset-4 outline-2 ring-4 ring-indigo-300 p-6">
                        <h1
                            class="text-3xl font-sans font-black mb-6 text-center bg-gradient-to-b from-slate-300 to-slate-500 bg-clip-text text-transparent uppercase italic underline decoration-gray-400">
                            Personal Bests
                        </h1>
                        <div class="text-neutral-600 flex align-middle justify-center md:justify-start mb-5">
                            <p class="font-bold">
                                Engine Class:
                            </p>
                            <ToggleButton @click="toggleCc" v-model="unchecked" onLabel="200cc" offLabel="150cc" class="ml-2 h-7 w-14 accent-slate-600"/>
                            <!-- <button @click="toggleCc"
                                class="text-sky-500 hover:text-sky-600 mb-5 px-1 transition ease-in-out hover:scale-105 duration-300">
                                {{ state.cc ? '200cc' : '150cc' }}
                            </button> -->
                        </div>
                        <InputText type="text" id="search" @keyup="filterSearch()" placeholder="Track Name" class="h-8"/>
                        <div class="relative rounded-xl overflow-auto">
                            <div class="shadow-sm overflow-hidden my-3">
                                <table class="table-auto w-full mx-auto text-neutral-600" id="pbTable">
                                    <thead class="text-neutral-600">
                                        <tr class="border-b-2 border-indigo-200 border-collapse font-medium text-left">
                                            <th scope="col" class="px-6 py-1">Track</th>
                                            <th scope="col" class="px-6 py-1">Category</th>
                                            <th scope="col" class="px-6 py-1">Time</th>
                                            <th v-if="!state.cc" scope="col" class="py-1">Star</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="ghost in state.player.ghosts" :key="ghost"
                                            class="border-b border-indigo-100 font-medium text-left">
                                            <td v-if="ghost.playersFastest == true && ghost.trackName && ghost.stars && !ghost['200cc'] && !state.cc"
                                                class="px-6 py-1">
                                                {{ ghost.trackName }}
                                            </td>
                                            <td v-else-if="ghost.playersFastest == true && ghost.trackName && ghost.stars && ghost['200cc'] && state.cc"
                                                class="px-6 py-1">
                                                {{ ghost.trackName }}
                                            </td>
                                            <td v-if="ghost.playersFastest == true && ghost.trackName && ghost.stars && !ghost['200cc'] && !state.cc"
                                                class="px-6 py-1">
                                                {{ getCategory(ghost.categoryId, ghost["200cc"]) }}</td>
                                            <td v-else-if="ghost.playersFastest == true && ghost.trackName && ghost.stars && ghost['200cc'] && state.cc"
                                                class="px-6 py-1">
                                                {{ getCategory(ghost.categoryId, ghost["200cc"]) }}
                                            </td>
                                            <td v-if="ghost.playersFastest == true && ghost.trackName && ghost.stars && !ghost['200cc'] && !state.cc"
                                                class="px-6 py-1">
                                                {{ ghost.finishTimeSimple }}
                                            </td>
                                            <td v-else-if="ghost.playersFastest == true && ghost.trackName && ghost.stars && ghost['200cc'] && state.cc"
                                                class="px-6 py-1">
                                                {{ ghost.finishTimeSimple }}
                                            </td>
                                            <td v-if="ghost.playersFastest == true && ghost.trackName && ghost.stars && !ghost['200cc'] && !state.cc"
                                                class="py-1">
                                                <img :src="getStar(ghost.stars)" class="px-2 h-5" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </main>

                <!-- Sidebar -->
                <aside>
                    <div class="bg-gray-800 rounded-xl shadow-xl relative outline outline-offset-4 outline-2 ring-4 ring-indigo-300 p-6 text-center md:text-left flex justify-between items-center mb-5"
                        id="sidebar">
                        <div>
                            <div class="mb-4 flex align-middle justify-center md:justify-start">
                                <!-- <i class="pi pi-user text-xl text-white mr-2 py-2" style="font-size:1.5rem"></i> -->
                                <h1 class="text-3xl text-neutral-600 font-bold mb-4">
                                    {{ getFlagEmoji(state.player.country) + ' ' + state.player.miiName }}
                                </h1>
                                <img :src="getControllerImage(state.player.controller)" class="h-8 px-3" />
                            </div>
                            <div class="text-neutral-600 mb-4 flex align-middle justify-center md:justify-start">
                                <p class="font-bold">
                                    Last Active:
                                </p>
                                <p class="px-1">{{
                                    formatDate(state["player"]["ghosts"][state["player"]["ghosts"].length -
                                        1]["dateSet"])
                                    }}</p>
                            </div>
                            <div class="text-neutral-600 mb-4 flex align-middle justify-center md:justify-start">
                                <p class="font-bold mr-1">
                                    Stars:
                                </p>
                                <span style="color: #a88923">{{ state.player.stars.gold }}&nbsp;</span>
                                /&nbsp;
                                <span style="color: silver">{{ state.player.stars.silver }}&nbsp;</span>
                                /&nbsp;
                                <span style="color: #bf6439">{{ state.player.stars.bronze }}&nbsp;</span>
                            </div>
                        </div>
                        <img :src="`${miiUrl}`" class=" w-auto object-right" />
                    </div>
                    <div class="bg-gray-800 rounded-xl shadow-xl relative outline outline-offset-4 outline-2 ring-4 ring-indigo-300 p-6 flex"
                        id="sidebar">
                        <!-- <div> -->
                            <div class="text-neutral-600 mb-4 align-middle justify-center md:justify-start">
                                <h1
                                    class="text-3xl font-sans font-black mb-6 text-center bg-gradient-to-b from-slate-300 to-slate-500 bg-clip-text text-transparent uppercase italic underline decoration-gray-400">
                                    Mii Names
                                </h1>
                                <p class="font-medium text-center" id="miiNames">{{ listMiiNames(state.player.miiNames) }}</p>
                            </div>
                        <!-- </div> -->
                    </div>
                </aside>
            </div>
        </div>
    </section>
    <div v-else class="text-center text-gray-500 py-12">
        <h2
            class="text-3xl font-sans font-black mb-6 text-center bg-gradient-to-b from-slate-50 to-slate-500 bg-clip-text text-transparent uppercase italic underline decoration-gray-400">
            Loading Player Profile
        </h2>
        <p class="text-sm text-gray-300 mb-6 text-center">
            This may take a while...
        </p>
        <ScaleLoader :loading="'loading'" :color="'white'" />
    </div>




</template>
