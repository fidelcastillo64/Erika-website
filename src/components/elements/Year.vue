<template>
    <div class="group flex gap-x-6">
        <!-- icono y linea -->
        <div class="relative">
                <!-- le linea desaparece si es el ultimo elemento -->
                <div v-if="!last" class="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-(--primary)">
                </div>
                <span class="relative z-10 grid h-10 w-10 place-items-center rounded-full bg-(--primary) text-white">
                    <font-awesome-icon icon="fa-solid fa-building-columns" class="grid w-1"  />
                </span>
                </div>
                <!-- titulo y texto -->
                <div class="-translate-y-1.5 pt-2 pb-8 text-slate-600">
                <p class="font-barlow text-xl md:text-3xl font-semibold text-(--primary) text-left">{{ Year }}</p>
                <template v-for="cargo in cargos" :key="cargo">
                    <p class="text-left pt-2 text-xs md:text-sm">{{ cargo }}</p>
                </template>    
            </div>
        </div>
</template>
<script setup lang="ts">
// resivimos los datos del timeline
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

defineProps<{
    index: number;
    last: boolean;
    Year: string;
    cargos: string[];
}>();
</script>
<style scoped>
</style>
