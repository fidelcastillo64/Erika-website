<script setup lang="ts">
import Header from './components/header.vue';
import HeroSecction from './components/HeroSecction.vue';
import Sections from './components/Sections.vue';
import { ref, onMounted, computed, onUnmounted } from 'vue';


// calculamos el alto de la pantalla para ajustar el header
const HeaderRef = ref<InstanceType<typeof Header> | null>(null);
const HeroSectionRef = ref<InstanceType<typeof HeroSecction> | null>(null);
const headerHeight = ref(0);

//estilos dinamicos para el header
const headerStyles = computed(() => ({
  'height': `calc(100svh - ${headerHeight.value}px)`,
  'margin-top': `${headerHeight.value}px`
}));

const calculateHeaderHeight = () => {
  if (HeaderRef.value) {
    headerHeight.value = HeaderRef.value.$el.offsetHeight;
  }
};
onMounted(() => {
  calculateHeaderHeight();
  window.addEventListener('resize', calculateHeaderHeight);
});
onUnmounted(() => {
  window.removeEventListener('resize', calculateHeaderHeight);
});
  
</script>

<template>
  <Header ref="HeaderRef" class="header"  />
  <HeroSecction ref="HeroSectionRef" :style="headerStyles" />
  <Sections />  
</template>

<style scoped>
/* header always on top */
.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: 100%;
}
</style>
