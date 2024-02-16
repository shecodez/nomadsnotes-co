<script setup lang="ts">
import PageHeader from "~/components/pageHeader.vue";
import PageFooter from "~/components/pageFooter.vue";
import AdminBar from "~/components/adminBar.vue";
</script>

<template>
  <div min-h-screen flex flex-col>
    <AdminBar>
      <p>
        2024 <span class="text-primary font-brand relative z-1">NoNo</span>
        <span ml--1.5 opacity-80 class="font-brand">DiGi</span>
        <em> ZenBuJo</em> Yang Edition is live!!
      </p>
    </AdminBar>
    <PageHeader />
    <main>
      <slot />
    </main>
    <PageFooter />
  </div>
</template>

<style scoped>
main {
  border-left: 1.25rem solid black;
  border-right: 1.25rem solid black;
}
</style>
