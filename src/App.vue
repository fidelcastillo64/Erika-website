<script setup lang="ts">
const Header = defineAsyncComponent(() => import('./components/Header.vue'));
const HeroSection = defineAsyncComponent(() => import('./components/HeroSection.vue'));
const Sections = defineAsyncComponent(() => import('./components/Sections.vue'));
const Phrase = defineAsyncComponent(() => import('./components/Phrase.vue'));
const TimeLine = defineAsyncComponent(() => import('./components/TimeLine.vue'));
const Present = defineAsyncComponent(() => import('./components/Present.vue'));
const Conctact = defineAsyncComponent(() => import('./components/Conctact.vue'));
const Footer = defineAsyncComponent(() => import('./components/Footer.vue'));
import { ref, onMounted, computed, onUnmounted, defineAsyncComponent } from 'vue';
// 1. Obtener el botón por su ID




// calculamos el alto de la pantalla para ajustar el header
const HeaderRef = ref<InstanceType<typeof Header> | null>(null);
const HeroSectionRef = ref<InstanceType<typeof HeroSection> | null>(null);
const headerHeight = ref(80); // Altura inicial del header en píxeles

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


document.addEventListener('DOMContentLoaded', () => {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // Ahora, scrollToTopBtn ya no será null si el elemento existe en el HTML
    if (scrollToTopBtn) {
        // Lógica para mostrar/ocultar el botón al hacer scroll
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollToTopBtn.classList.remove('opacity-0', 'invisible');
                scrollToTopBtn.classList.add('opacity-100', 'visible');
            } else {
                scrollToTopBtn.classList.remove('opacity-100', 'visible');
                scrollToTopBtn.classList.add('opacity-0', 'invisible');
            }
        });

        // Lógica para el clic del botón
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

  
</script>

<template>
  <Header ref="HeaderRef" class="header"  />
  <HeroSection ref="HeroSectionRef" :style="headerStyles" />
  <Sections /> 
  <Phrase />
  <TimeLine />
  <Present /> 
  <Conctact />
  <Footer />
  <button id="scrollToTopBtn"
    class="fixed bottom-5 right-5 z-100 p-3 bg-(--primary) text-white shadow-lg transition-all duration-300 opacity-0 invisible  hover:scale-110 focus:outline-none"
    title="Ir arriba">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
    </svg>
  </button>
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
