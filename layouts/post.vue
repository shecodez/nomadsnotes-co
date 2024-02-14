<script setup lang="ts">
import PageHeader from "~/components/pageHeader.vue";
import PageFooter from "~/components/pageFooter.vue";
import AdminBar from "~/components/adminBar.vue";

const config = useRuntimeConfig();
</script>

<template>
  <PageHeader />
  <AdminBar>
    {{ config.public.app.name }} is reader-supported. When you buy through links
    on our site, we may earn an affiliate commission.
    <nuxt-link to="/legal/affiliate" hover:underline> (Learn More) </nuxt-link>
  </AdminBar>
  <main>
    <slot />
  </main>
  <PageFooter />
</template>

<style scoped></style>
