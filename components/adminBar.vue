<script setup lang="ts">
defineProps(["closeable"]);

const showMsg = ref(true);
function close() {
  showMsg.value = false;
}
</script>

<template>
  <div v-if="showMsg" class="pg-bg-color" px-5>
    <div flex items-center justify-between>
      <!-- TODO: link to /faq -->
      <!-- <div i-carbon:help title="Help" /> -->
      <div py-1 flex-1 text-center font-thin text-sm>
        <slot />
      </div>
      <button v-if="closeable" @click="close">
        <div i-carbon:close />
      </button>
    </div>
  </div>
</template>
