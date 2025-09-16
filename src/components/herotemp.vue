<template>
        <section class="flex flex-col justify-center items-center text-center text-[var(--text)] p-4 parallax">
        <!-- El contenedor principal del contenido -->
        <div class="bg-white shadow-lg items-center justify-center rounded-lg 
            flex flex-col md:flex-row gap-4 p-6 py-6 md:p-8  
            ">
            <!-- Contenedor de la imagen -->
            <div class="flex h-fit justify-center items-center">
                <img 
                    src="/Erika.jpg" 
                    alt="Foto de Erika" 
                    class="object-contain w-full " 
                />
            </div>
            <!-- Contenedor del texto -->
            <div class="flex flex-col  text-[var(--primary)] text-left gap-1 md:gap-4 px-4 h-fit">
                <h1 class="text-xl md:text-4xl font-bold mb-0">Erika Díaz Villalón</h1>
                <p class="text-lg md:text-3xl text-[var(--text)]">Abogada</p>
                <p class="text-2xl md:text-5xl font-bold">Líder social</p>
                <div class="h-1 bg-[var(--primary)] w-8/10 "></div>
                <p class="text-xs md:text-base text-[var(--text)]">
                    Las cosas lindas que me están pasando las acepto y agradezco con amor
                </p>
                <!-- Contenedor de los íconos de redes sociales -->
                <div class="flex justify-start items-center gap-4 text-center">
                    <font-awesome-icon icon="fa-brands fa-square-facebook" size="2x" class="text-[var(--primary)] hover:text-[var(--accent)] cursor-pointer transition duration-300 ease-linear" />
                    <font-awesome-icon icon="fa-brands fa-instagram" size="2x" class="text-[var(--primary)] hover:text-[var(--accent)] cursor-pointer transition duration-300 ease-linear" />
                    <font-awesome-icon icon="fa-brands fa-x-twitter" size="2x" class="text-[var(--primary)] hover:text-[var(--accent)] cursor-pointer transition duration-300 ease-linear" />
                </div>
                <p class="text-sm md:text-2xl text-[var(--text)] underline font-inter italic cursor-pointer hover:text-[var(--accent)] transition duration-300 ease-linear">
                    Acerca de mi
                </p>    
            </div>
        </div>
    </section>
</template>