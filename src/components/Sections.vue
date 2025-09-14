<template>
    <section class="w-full h-120 flex flex-col md:flex-row justify-center items-center text-[var(--text)] gap-0 text-left">
        <div class="bg-(--primary) text-white w-full h-full flex items-center justify-center" >
            <div class="w-1/2">
                <p class="w-full font-light">Sobre mi</p>
                <h2 class="w-full text-3xl font-bold underline hover:text-gray-300 transition duration-300">Biografía ></h2>
            </div>
        </div>
        <div class="bg-(--secondary) text-white w-full h-full flex items-center justify-center" >
            <div class="w-1/2">
                <p class="w-full font-light">Trayectoria y</p>
                <h2 class="w-full text-3xl font-bold underline hover:text-gray-300 transition duration-300">Profesional ></h2>
            </div>
        </div>
        <div class="bg-(--accent) text-white w-full h-full flex items-center justify-center" >
            <div class="w-1/2">
                <p class="w-full font-light">Publicaciones y</p>
                <h2 class="w-full text-3xl font-bold underline hover:text-gray-300 transition duration-300">Medios ></h2>
            </div>
        </div>
    </section>
    <section class="h-130 w-full parallax  md:bg-center bg-position-[bottom:30%]">
    
    </section>
</template>
<script setup lang="ts">
</script>
<style scoped>
.parallax {
    background-image: url('/camara.jpg');
    background-attachment: fixed;
    background-size: cover;
}

</style>