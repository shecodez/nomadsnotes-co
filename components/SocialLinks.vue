<script setup>
const socialIcons = [
  {
    icon: "i-carbon:logo-pinterest",
    label: "Pinterest",
    link: "https://www.pinterest.com/nomadsnotesco/",
  },
  {
    icon: "i-carbon:logo-instagram",
    label: "Instagram",
    link: "https://www.instagram.com/nomadsnotesco/",
  },
  {
    icon: "i-carbon:logo-youtube",
    label: "YouTube",
    link: "https://youtube.com/@nomadsnotesco",
  },
];
</script>

<template>
  <div
    class="social-links z-20 right-5 text-primary border-1 border-transparent"
  >
    <ul flex flex-col justify-center gap-6>
      <li v-for="(n, i) in socialIcons" :key="n.label">
        <a
          :href="n.link"
          target="_blank"
          class="social-icon-link flex items-center gap-6 text-lg px-2"
        >
          <div :class="n.icon" />
          <span class="social-label font-cursive">{{ n.label }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.social-links {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
}
.social-links li:hover a.social-icon-link svg {
  opacity: 1;
}
.social-links li:hover span.social-label {
  opacity: 1 !important;
  visibility: visible;
  transform: translateX(-0.5rem);
  transition: 0.2s opacity, 0.2s visibility, 0.2s transform;
}

.social-icon-link svg {
  opacity: 0.7;
}

span.social-label {
  opacity: 0;
  visibility: hidden;
  right: 2em;
  position: absolute;
  white-space: nowrap;
  transform: translateX(0.5rem);
  transition: 0.2s opacity, 0.2s visibility, 0.2s transform;
}
</style>
