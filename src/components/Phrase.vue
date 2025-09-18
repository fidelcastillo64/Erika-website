<template>
    <section class="h-120 w-full text-xm md:text-2xl bg-(--primary) flex flex-col justify-center items-center text-center gap-4 font-barlow">
        <div class="text-white flex flex-col justify-center items-center gap-4 h-fit text-center">
            <!-- Asegúrate de importar la fuente Barlow en tu archivo principal (por ejemplo, en index.html o App.vue) -->
            <p class="font-barlow font-light w-3/5 ">
                Comprometida con la defensa de los derechos de la mujer y la promoción de valores de justicia, respeto y solidaridad. Su labor legislativa se ha centrado en impulsar la equidad de género y fortalecer el desarrollo social, siendo una voz activa en favor de la comunidad y el liderazgo.
            </p>
        </div>
        <div class="text-white font-barlow font-light flex flex-col justify-right items-right gap-4 h-fit text-right w-3/5">
            <h3>-Erika De Los Ángeles Díaz Villalón</h3>
        </div>
    </section>
    <section class="h-120 w-full parallax  md:bg-center bg-position-[bottom:50% left:50%] ">
        <!-- Espacio vacío para el efecto parallax -->
    </section>
</template>
<script lang="ts">
</script>
<style scoped>
.parallax {
    background-image: url('/camara de diputados.jpg');
    background-attachment: fixed;
    background-size: cover;
}
</style>