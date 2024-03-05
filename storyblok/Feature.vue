<script setup lang="ts">
import type { Feature } from "@/storyblok/types";

const props = defineProps<{
  blok: Feature;
}>();

const blokCss = computed(() => props.blok.css || "");
</script>

<template>
  <div v-editable="blok" class="w-full py-8 text-center" :class="blok.css">
    <h3 class="text-6xl font-statement">
      {{ blok.title }}
    </h3>

    <ul
      v-if="blokCss.includes('subtitle-hover-reveal')"
      class="center gap-1 mb-2 h-8"
    >
      <template v-for="word in blok.subtitle.split(' ')" :key="word">
        <li class="hover-acronym cursor-pointer">
          <h4 text-2xl font-bold>
            {{ word.charAt(0) }}
            <span class="hidden font-cursive">{{ word.substring(1) }}</span>
          </h4>
        </li>
      </template>
    </ul>
    <h4 v-else text-2xl font-bold mb-2>{{ blok.subtitle }}</h4>

    <storyblok-component v-for="b in blok.content" :key="b._uid" :blok="b" />

    <div flex flex-col gap-2 text-center>
      <div flex items-center>
        <hr flex-1 border-t-1 border-black h-full mr-5 />
        <div w-16 v-if="blok.icon.filename">
          <nuxt-img :src="blok.icon.filename" :alt="blok.icon.alt" w-full />
        </div>
        <hr flex-1 border-t-1 border-black h-full ml-5 />
      </div>
      <p font-thin>
        {{ blok.description }}
      </p>
      <a lowercase text-xs font-bold>{{ blok.link_text }}</a>
    </div>
  </div>
</template>

<style scoped>
.hover-acronym:hover span {
  display: inline-block !important;
}
</style>
