<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <NavBar />

  <div class="router-view">
    <RouterView />
  </div>

</template>

<style lang="scss">
@import '@/scss/main.scss';
</style>
