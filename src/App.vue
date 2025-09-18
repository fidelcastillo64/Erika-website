<script setup lang="ts">
const Header = defineAsyncComponent(() => import('./components/Header.vue'));
const HeroSection = defineAsyncComponent(() => import('./components/HeroSection.vue'));
const Sections = defineAsyncComponent(() => import('./components/Sections.vue'));
const Phrase = defineAsyncComponent(() => import('./components/Phrase.vue'));
const TimeLine = defineAsyncComponent(() => import('./components/TimeLine.vue'));
import { ref, onMounted, computed, onUnmounted, defineAsyncComponent } from 'vue';


// calculamos el alto de la pantalla para ajustar el header
const HeaderRef = ref<InstanceType<typeof Header> | null>(null);
const HeroSectionRef = ref<InstanceType<typeof HeroSection> | null>(null);
const headerHeight = ref(0);

// Estilos dinámicos para el header
const headerStyles = computed(() => ({
  'height': `calc(var(--app-height) - ${headerHeight.value}px)`,
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
  <HeroSection ref="HeroSectionRef" :style="headerStyles" />
  <Sections /> 
  <Phrase />
  <TimeLine />
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
