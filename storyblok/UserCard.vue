<script setup lang="ts">
import { formatDate } from "@/utils";
import type { UserCard } from "@/storyblok/types";

defineProps<{
  blok: UserCard;
}>();
</script>

<template>
  <div v-editable="blok" class="center flex-col py-1 gap-4">
    <h3 class="text-4xl font-cursive">@{{ blok.username }}</h3>

    <div>
      <nuxt-img
        v-if="blok.image.id"
        :src="blok.image.filename"
        :alt="blok.image.alt"
        class="h-72 w-72 rounded-full"
      />
    </div>

    <p>{{ blok.description }}</p>

    <storyblok-component v-for="b in blok.social_ats" :key="b._uid" :blok="b" />
  </div>
</template>
