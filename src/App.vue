<script setup lang="ts">
import Header from './components/header.vue';
import HeroSecction from './components/HeroSecction.vue';
import Sections from './components/Sections.vue';
</script>

<template>
  <Header />
  <HeroSecction />
  <Sections />  
</template>

<style scoped>
/* header always on top */
header {
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
}
</style>
