<script setup lang="ts">
import PageHeader from "~/components/pageHeader.vue";
import PageFooter from "~/components/pageFooter.vue";
import AdminBar from "~/components/adminBar.vue";
import SocialLinks from "~/components/SocialLinks.vue";
</script>

<template>
  <div relative min-h-screen flex flex-col>
    <AdminBar :closeable="true">
      <p>
        2024 <span class="text-primary font-brand relative z-1">NoNo</span>
        <span ml--1.5 opacity-80 class="font-brand">DiGi</span>
        <em> ZenBuJo</em> Yang Edition is live!!
      </p>
    </AdminBar>
    <PageHeader />
    <main class="pg-border-x">
      <slot />
    </main>
    <PageFooter />
  </div>
  <SocialLinks />
</template>

<style scoped>
.fixed-center-y {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
}
</style>
