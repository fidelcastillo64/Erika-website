<template>
  <header class="bg-white text-(--primary) p-4 font-italic flex flex-col-2 items-center h-[80px] md:flex-row md:justify-between md:px-20 xl:px-30">
    <div class=" flex w-full items-center ">
      <h1 class="text-xl md:text-2xl font-bold">Erika Díaz Villalón</h1>
    </div>
    <div class="text-xl flex w-full align-center text-(--primary) justify-end">
      <!-- Navegación para escritorio -->
        <nav class="hidden md:block">
            <ul class="flex flex-row space-x-6  ">
                <li
                    v-for="item in Mlist"
                    :key="item.name"
                    class="xl:text-lg text-xs"

                >
                    <a
                        v-on:click="scrollToSection(item.href)"
                        class="block ease-linear transition duration-300 hover:text-[var(--accent)] font-inter font-bold italic underline"
                    >
                        {{ item.name }}
                    </a>
                </li>
            </ul>
        </nav>
        <!-- Botones para móvil (Dark Mode y menú toggle) -->
        <div class="md:hidden flex items-center gap-4">
            <button 
                type="button" 
                class="block focus:outline-none z-30" 
                @click="isMenuOpen = !isMenuOpen"
            >
                <transition name="fade" mode="out-in">
                    <span v-if="isMenuOpen" key="close" class="text-2xl text-amber-50">
                        <font-awesome-icon icon="fa-solid fa-xmark" size="2x" />
                    </span>
                    <span v-else key="open" class="text-2xl z-30">
                        <font-awesome-icon icon="fa-solid fa-bars text-white" size="2x" />
                    </span>
                </transition>
            </button>
        </div>
        <!-- Navegación de pantalla completa para móvil -->
    <nav
        :class="['fixed inset-0 z-20 flex flex-col items-center justify-center bg-[#000000]/90 md:hidden', isMenuOpen ? 'block': 'hidden']"
    >
        <ul class="flex flex-col space-y-4">
            <li
                v-for="item in Mlist"
                :key="item.name"
                class="text-lg text-[var(--background)]"
            >
                <a
                    :href="item.href"
                    class="block ease-linear text-2xl transition duration-300 hover:text-[var(--accent)]"
                    @click="scrollToSection(item.href)"
                >
                    {{ item.name }}
                </a>
            </li>
        </ul>
    </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import {ref, computed } from 'vue';
//lista de elementos del menú
const Mlist = computed(() => [
    { name: 'Inicio', href: '#home' },
    { name: 'Acerca de mí', href: '#about' },
    { name: 'Mi Actualidad', href: '#social' },
    { name: 'Contacta me', href: '#contact' },
]);
const isMenuOpen = ref(false);



const scrollToSection = (href: string): void => {
  isMenuOpen.value = false; // Cierra el menú al hacer clic en un enlace
  // Desplaza suavemente a la sección correspondiente
  const section: HTMLElement | null = document.querySelector(href) as HTMLElement | null;
  // Si la sección existe, desplázate a ella
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>


<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: scale(0.8) rotate(90deg);
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
  transform: scale(1) rotate(0deg);
}

</style>