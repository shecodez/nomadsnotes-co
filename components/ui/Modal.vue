<script setup lang="ts">
const props = defineProps(["isOpen", "isRight", "css"]);
const emit = defineEmits(["close"]);

const modal = ref();

watch(
  () => props.isOpen,
  (isOpen) => {
    const bodyEl = document.querySelector("body");
    if (isOpen) {
      // Disable scroll
      bodyEl!.style.overflow = "hidden";
    } else {
      // Enable scroll
      bodyEl!.style.overflow = "auto";
    }
  }
);

onKeyStroke(
  "Escape",
  () => {
    emit("close");
  },
  { eventName: "keydown" }
);

onClickOutside(modal, () => {
  emit("close");
});
</script>

<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      class="modal bg-border center w-screen h-screen fixed z-3 inset-0"
    >
      <div ref="overlay" class="overlay" />

      <client-only>
        <div ref="modal" class="relative" :class="css">
          <slot />
        </div>
      </client-only>
    </div>
  </Teleport>
</template>

<style scoped>
.modal .overlay {
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: rgb(0, 0, 0, 0.4);
  backdrop-filter: saturate(180%) blur(20px);
  transition: all 500ms ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
