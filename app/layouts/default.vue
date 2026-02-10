<template>
  <div class="nuxt-layout nuxt-layout--default">
    <nuxt-loading-indicator />

    <app-nav-bar />


    <div class="page-content">
      <slot />
    </div>

    <app-footer />
  </div>
</template>

<!-- <script setup lang="ts">
</script> -->
