<script setup lang="ts">
import { useRecaptchaProvider } from "vue-recaptcha";

useRecaptchaProvider();
</script>

<template>
  <nuxt-loading-indicator />
  <nuxt-layout>
    <nuxt-page />
  </nuxt-layout>
</template>

<style>
html {
  scroll-behavior: smooth;
}

body {
  background-color: white;
  color: #1f2937;
  /* @apply bg-white text-gray-800; */
}

.prose a {
  text-decoration: none;
  padding-left: 4px;
  padding-right: 4px;
  position: relative;
  transition: color 0.3s ease;
}

.prose a::before {
  content: "";
  background: rgba(255, 0, 79, 1);
  position: absolute;
  left: 0;
  bottom: 2px;
  width: 100%;
  height: 11px;
  z-index: -1;
  transition: all 0.1s ease-in-out;
  border-radius: 3px;
  font-weight: bold;
}

.prose a:hover {
  text-decoration: none !important;
}

.prose a:hover::before {
  bottom: 0;
  height: 100%;
}

.center-y {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.center-x {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.router-link-active,
.router-link-exact-active {
  color: rgb(255, 0, 79);
}

/* Page Transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease-in-out;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: scale(0.99);
}

/* Form */
input[required],
textarea[required],
input.required,
textarea.required {
  background-image: radial-gradient(rgb(239, 68, 68) 15%, transparent 16%),
    radial-gradient(rgb(239, 68, 68) 15%, transparent 16%);
  background-size: 1.2em 1.2em;
  background-position: right top;
  background-repeat: no-repeat;
}

input:disabled,
button:disabled {
  cursor: not-allowed;
  opacity: 50%;
  filter: grayscale(1);
}

/* Font styles */
.font-outline {
  -webkit-text-stroke: 1px black;
}

/* Alerts */
.alert {
  padding: 1rem;
  display: flex;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  /* @apply p-4 flex items-center my-4; */
  border-left-width: 4px;
  border-left-style: solid;
}
.success-alert {
  border-color: rgb(34, 197, 94);
  background-color: rgba(74, 222, 128, 0.2);
  color: rgb(34, 197, 94);
  /* @apply border-l-4 border-green-500 bg-green-400 bg-opacity-20 text-green-500; */
}
.error-alert {
  border-color: rgb(239, 68, 68);
  background-color: rgba(248, 113, 113, 0.2);
  color: rgb(239, 68, 68);
  /* @apply border-l-4 border-red-500 bg-red-400 bg-opacity-20 text-red-500; */
}
.warning-alert {
  border-color: rgb(249, 115, 22);
  background-color: rgba(251, 146, 60, 0.2);
  color: rgb(249, 115, 22);
  /* @apply border-l-4 border-orange-500 bg-orange-400 bg-opacity-20 text-orange-500; */
}
</style>
