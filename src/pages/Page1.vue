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
   console.log('keyCode  =', event.keyCode);
   asciiValue.value = event.keyCode
}
document.addEventListener('keydown', (event) => {
    checkEvent(event);
});
</script>

<template>
   <div class="tw-relative tw-h-screen tw-w-full tw-bg-cyan-950 tw-select-none">
    <span class="tw-absolute tw-text-sky-200  tw-text-5xl tw-top-[250px] tw-left-[430px] tw-font-serif tw-opacity-40">Get Ascii Values</span>
      <button
         
         class="btn tw-absolute tw-rounded-lg tw-text-2xl tw-font-bold tw-bg-sky-200 tw-p-1 tw-px-5 tw-text-cyan-950">
         {{ asciiValue }}
      </button>
   </div>
</template>

<style scoped></style>
