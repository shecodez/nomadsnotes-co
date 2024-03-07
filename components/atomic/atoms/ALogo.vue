<template>
  <div relative inline-block>
    <img src="/images/categories_text_logo_only-t.png" alt="logo" />
    <img
      src="/images/categories_only-t.png"
      alt="logo"
      class="absolute top-0 animate-spin-60"
    />
  </div>
</template>

<style scoped>
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.animate-spin-60 {
  animation: spin 60s linear infinite;
}
</style>
