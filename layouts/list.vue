<script lang="ts" setup></script>

<template>
  <div>
    <slot name="title"></slot>

    <div
      p-5
      grid
      grid-flow-row-dense
      grid-cols-1
      md:grid-cols-2
      lg:grid-cols-3
      gap-2
    >
      <slot></slot>
    </div>
  </div>
</template>

<style scoped></style>
