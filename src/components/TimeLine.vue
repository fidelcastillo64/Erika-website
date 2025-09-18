<template>
    <section class="h-fit w-full text-xm md:text-2xl bg-white flex flex-col md:flex-row  justify-center items-center text-center">
        <div class="w-full md:w-1/2 p-5 md:px-20">
            <h2 class="text-3xl md:text-4xl w-full text-left font-bold text-(--primary) mb-8">-Trayectoria</h2>
            <div class="flex w-full flex-col items-start ">
                <Year v-for="(item, index) in Timeline" :key="item.Year" :Year="item.Year" :cargos="item.cargos" :last="index === Timeline.length - 1" :index="index" />
            </div>
        </div>
        <div class=" text-white flex flex-col justify-center w-full md:w-1/2 items-center gap-4 h-full text-center p-0 md:p-4">
            <img src="/publico.jpg" class="w-full h-full bg-cover object-cover " />
        </div>
    </section>
</template>
<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue';
const Year = defineAsyncComponent(() => import('./elements/Year.vue'));

const Timeline = computed(() => [
    { Year: '2018 - 2021', cargos: ["Secretaria de Desarrollo Social del gobierno de Corregidora, Querétaro."] },
    { Year: '2015 - 2018', cargos: ["Regidora de Corregidora, Querétaro."] },
    { Year: '2010 - 2013', cargos: ["Secretaria de Promoción Política de la Mujer en Corregidora, Querétaro.", "Asistente del Presidente del Comité Directivo Municipal de Corregidora, Querétaro", "Integrante del Sistema de Protección Integral Nacional de Niñas, Niños y Adolescentes (SIPINNA) a nivel municipal."]  },
    { Year: '2009 - 2010', cargos: ["Candidata suplente a Diputada Local por el Distrito 7."] }
]);
</script>
<style scoped>
</style>