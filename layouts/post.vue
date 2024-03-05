<script setup lang="ts">
import PageHeader from "~/components/pageHeader.vue";
import PageFooter from "~/components/pageFooter.vue";
import AdminBar from "~/components/adminBar.vue";

const config = useRuntimeConfig();
</script>

<template>
  <PageHeader />
  <AdminBar>
    Disclosure: This post may contain affiliate links. If you buy something
    through them, <span class="text-primary font-brand">NONOCO</span> will
    receive a small commission at no additional cost to you. Thank you for your
    support. 🥰
    <nuxt-link to="/legal/disclosure" hover:underline> (Learn More) </nuxt-link>
  </AdminBar>
  <main>
    <slot />
  </main>
  <PageFooter />
</template>

<style scoped></style>
