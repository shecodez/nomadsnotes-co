<script lang="ts" setup>
const config = useRuntimeConfig();

const story = await useAsyncStoryblok(
  "home",
  { version: "draft" },
  { customParent: "https://app.storyblok.com" }
);

useHead({
  title: `${config.public.app.name}`,
});
</script>

<template>
  <storyblok-component v-if="story" :blok="story.content" />
</template>

<style scoped>
.centered-axis-xy {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

#instagram-feed {
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}

.marquee-left span {
  line-height: 1.5rem;
  /* Starting position */
  transform: translateX(100%);
  /* Apply animation to this element */
  animation: scroll-left 30s linear infinite;
}
/* Move it (define the animation) */
@keyframes scroll-left {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
