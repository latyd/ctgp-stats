<script setup>
import { reactive } from 'vue';
import { miiFileRead, encodeStudio, editMii } from "@/mii.js";
import FileUpload from 'primevue/fileupload';
import Button from 'primevue/button';

const state = reactive({
    miiName: null,
    miiWeight: null,
    miiData: null, // Store the extracted Mii data for download
    miiImageUrl: "",
    editMii
});

// Process the RKG file and extract the Mii data
const processRkgFile = async (event) => {
    const file = event.files[0]; // Get the uploaded file
    if (!file) {
        console.error('No file selected');
        return;
    }
    try {
        const reader = new FileReader();
        reader.onload = () => {
            const arrayBuffer = reader.result;
            const miiData = processFile(new Uint8Array(arrayBuffer));
            if (miiData) {
                state.miiName = extractMiiName(miiData);
                state.miiWeight = extractMiiWeight(miiData);
                state.miiData = miiData; // Store Mii data for saving

                // Generate the Mii image URL after extracting the Mii data
                loadMiiFile(miiData);
            }
        };
        reader.readAsArrayBuffer(file); // Read file as array buffer
    } catch (error) {
        console.error('Error processing RKG file:', error.message);
    }
};

// Function to load and process Mii file data
const loadMiiFile = (buffer) => {
    // Process the Mii file using miiFileRead
    miiFileRead(buffer);

    // Encode the Mii studio data into a URL for the Nintendo Studio API
    const previewData = encodeStudio(state.editMii.studio);

    // Set the Mii image URL in the reactive state
    state.miiImageUrl = `https://studio.mii.nintendo.com/miis/image.png?data=${previewData}&width=512`;
};

// Process the Mii data from the RKG file
const processFile = (fileData) => {
    const MII_FILE_SIZE = 0x4A;
    const MII_DATA_OFFSET = 0x3C;
    const RKG_HEAD_SIZE = 4;

    // Check if it's a valid RKG file and extract Mii data
    if (startsWith(fileData, [0x52, 0x4B, 0x47, 0x44])) {
        if (fileData.length < MII_FILE_SIZE + MII_DATA_OFFSET) {
            console.error("Invalid RKG file: size too small");
            return null;
        }
        return fileData.slice(MII_DATA_OFFSET, MII_DATA_OFFSET + MII_FILE_SIZE);
    } else if (fileData.length === MII_FILE_SIZE) {
        return fileData;
    } else {
        console.error("Invalid file: incorrect size");
        return null;
    }
};

// Helper function to check file header
const startsWith = (fileData, prefix) => {
    return prefix.every((byte, index) => fileData[index] === byte);
};

// Extract the Mii name from the data
const extractMiiName = (miiData) => {
    const nameBytes = miiData.slice(0x02, 0x16);
    const decoder = new TextDecoder('utf-16be');
    const miiName = decoder.decode(nameBytes).replace(/\0/g, '');
    return miiName;
};

// Extract the Mii weight from the data
const extractMiiWeight = (miiData) => {
    return miiData[0x17];
};

// Function to download the .mii file
const saveMiiFile = () => {
    if (!state.miiData) {
        console.error("No Mii data available to save.");
        return;
    }

    // Create a Blob from the Mii data
    const blob = new Blob([state.miiData], { type: 'application/octet-stream' });

    // Create a link element and trigger the download
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = state.miiName + '.mii'; // Set the file name for download
    link.click();
};
</script>

<template>
    <div class="flex flex-col py-10 justify-center items-center">
        <div class="w-96 mb-16">
            <h1
                class="text-5xl font-sans font-black mb-6 text-center bg-gradient-to-b from-slate-50 to-slate-500 bg-clip-text text-transparent uppercase italic ">
                Mii Viewer
            </h1>
            <p class="text-sm text-white mb-6 text-center">
                Extract mii data from RKG file.
            </p>
            <!-- File Input for user to upload RKG file -->
             <div class="text-white">
                <FileUpload mode="basic" name="rkgFile" accept=".rkg" :auto="false" chooseLabel="Browse RKG File"
                @select="processRkgFile" class="!bg-white !text-black !ring-2 !ring-indigo-300"/>
             </div>
        </div>
        <div class="wrCard md:w-1/2 mx-3 md:px-16 bg-gray-800 rounded-xl shadow-xl relative outline outline-offset-4 outline-2 ring-4 ring-indigo-300 p-6 text-left flex justify-between items-center mb-5">
            <div>
                <div class="mb-4 flex align-middle justify-center md:justify-start">
                    <!-- <i class="pi pi-user text-xl text-white mr-2 py-2" style="font-size:1.5rem"></i> -->
                    <h1 class="text-3xl text-neutral-600 font-bold">
                        Mii Name: {{ state.miiName }}
                    </h1>
                </div>
                <div class="text-neutral-600 mb-4 flex align-middle justify-center md:justify-start">
                    <p class="font-bold">
                        Weight: {{ state.miiWeight }}
                    </p>
                </div>
                <Button v-if="state.miiData" @click="saveMiiFile" label="Download Mii" icon="pi pi-download" class="text-white"/>
            </div>
            <img :src="state.miiImageUrl || 'https://studio.mii.nintendo.com/miis/image.png?data=000f165d6574777a7f848f9399a6a9b6bbb8bfc6cdd4dbe2f1fc0310181f450c0f161b161c1619151f22292a353b39&width=512&type=face'" class="h-48 md:h-64 w-auto object-right" />
        </div>
    </div>

</template>
