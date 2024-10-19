<script setup>
import { defineProps, ref, computed } from 'vue';
import { RouterLink } from 'vue-router';
import Button from 'primevue/button'
import 'primeicons/primeicons.css'

const props = defineProps({
  time: Object,
});

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
    switch(region) {
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
const getPlayerId = (href) => {
    let part1 = href.substring(9, 11)
    let part2 = href.substring(12, href.length-5)
    return part1 + part2
}

const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleString();
}
</script>

<template>
  <div class="wrCard overflow-auto bg-gray-800 rounded-xl shadow-xl outline outline-offset-4 outline-2 ring-4 ring-indigo-300 hover:-translate-y-1 hover:scale-103 hover:bg-gray-700 duration-300">
    <div class="p-4">
      <div class="mkwMenu mb-6 flex items-center justify-between">
        <div>
            <div class="text-neutral-700 font-bold my-2 text-xl">{{ time.trackName }}</div>
            <div class="text-neutral-700 font-semibold my-2 text-medium">{{ getCategory(time.categoryId, time["200cc"]) }}</div>
            <div class="text-neutral-700 text-xl font-bold">{{ time.finishTimeSimple }}</div>
            <div class="text-white text-2xl font-bold my-2" id="miiName">{{ getFlagEmoji(time.country) + ' ' + time.player }}</div>
            <div class="text-neutral-700 text-xs font-semibold">{{ formatDate(time.dateSet) }}</div>
        </div>
        <img class="h-24 w-auto" :src="'https://www.chadsoft.co.uk/time-trials' + time._links.item.href.substring(0, time._links.item.href.length-5) + '.mii'" />
      </div>

      <!-- <div class="border border-gray-100 mb-3"></div> -->
      <Button as="a" label="Ghost Link" icon="pi pi-angle-right" rounded :href="'https://www.chadsoft.co.uk/time-trials' + time._links.item.href.substring(0, time._links.item.href.length-5) + '.html'"/>
      <Button as="RouterLink" label="Profile" icon="pi pi-user" class="mx-3" rounded :to="'/player/' + getPlayerId(time._links.player.href)"/>

    </div>
  </div>
</template>
