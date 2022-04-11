<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import FooterContainer from '@/components/FooterContainer.vue'
</script>

<template>
  <NavBar />

  <div class="router-view">
    <RouterView />
  </div>

  <FooterContainer />
</template>

<style lang="scss">
@import '@/scss/main.scss';
</style>
