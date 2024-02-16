<script setup lang="ts">
const showMsg = ref(true);
function close() {
  showMsg.value = false;
}
</script>

<template>
  <div px-5 bg-black text-white font-thin text-sm>
    <div v-if="showMsg" flex items-center justify-between>
      <div i-carbon:information />
      <div py-1 flex-1 text-center>
        <slot />
      </div>
      <button @click="close">
        <div i-carbon:close />
      </button>
    </div>
    <div v-else pt-5 />
  </div>
</template>
