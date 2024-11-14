<script setup>
import { ref, watch } from "vue";
const randomX = ref(10);
const randomY = ref(10);
const asciiValue = ref(null);
function checkEvent(event) {
   randomX.value = Math.floor(Math.random() * 1000);
   randomY.value = Math.floor(Math.random() * 550);
   const button = document.getElementsByClassName("btn")[0];

   button.style.top = randomY.value + 'px';
   button.style.left = randomX.value + 'px';
   const key = event.key
   console.log('keyCode  =', event);
   asciiValue.value = key.charCodeAt(0)
}
document.addEventListener('keydown', (event) => {
    checkEvent(event);
});
</script>

<template>
   <div class="tw-relative tw-h-screen tw-flex tw-justify-center tw-items-center tw-w-full tw-bg-cyan-950 tw-select-none">
    <span class=" tw-text-sky-200  tw-text-5xl tw-font-serif tw-opacity-40">Get Ascii Values</span>
      <button
         
         class="btn tw-absolute tw-rounded-lg tw-text-5xl tw-font-bold tw-bg-sky-200 tw-py-4 tw-px-6 tw-text-cyan-950">
         {{ asciiValue }}
      </button>
   </div>
</template>

<style scoped></style>
