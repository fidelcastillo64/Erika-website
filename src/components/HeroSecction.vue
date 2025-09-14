<template>
    <section class="h-screen  flex flex-col justify-center items-center text-center text-[var(--text)] parallax">
        <div class="bg-white rounded-lg shadow-lg align-center 
            flex flex-col gap-3 p-4 m-8
            md:flex-row md:gap-6 md:mb-0
            xl:grid xl:grid-cols-2 xl:p-8 xl:w-5/10
            ">
            <div class="flex justify-center items-center">
                <img src="/Erika.jpg" alt="Foto de Erika" class="w-7/10 h-60 md:w-full md:h-100 object-cover mx-auto md:mx-0" />
            </div>
            <div class="flex flex-col justify-center text-(--primary) text-left p-2" >
                <h1 class="text-2xl md:text-4xl font-bold mb-0 md:mb-4">Erika Díaz Villalón</h1>
                <p class="text-lg md:text-3xl">Abogada</p>
                <p class="text-2xl md:text-5xl font-bold">Líder social</p>
                <div class="h-1 my-4 bg-(--primary) w-8/10 rounded-lg">
                </div>
                <p class="text-sm md:text-md  text-(--text)">
                    Las cosas lindas que me están pasando las acepto y agradezco con amor
                </p>
                <div class="grid grid-cols-3 mt-6 justify-start items-center gap-1 w-2/4 px-1 ">
                    <font-awesome-icon icon="fa-brands fa-square-facebook" size="2x" class="text-(--primary) hover:text-[var(--accent)] cursor-pointer transition duration-300 ease-linear" />
                    <font-awesome-icon icon="fa-brands fa-instagram" size="2x" class="text-(--primary) hover:text-[var(--accent)] cursor-pointer transition duration-300 ease-linear" />
                    <font-awesome-icon icon="fa-brands fa-x-twitter" size="2x" class="text-(--primary) hover:text-[var(--accent)] cursor-pointer transition duration-300 ease-linear" />
                </div>
                <p class="mt-6 text-sm md:text-2xl text-(--text) underline font-inter italic cursor-pointer hover:text-[var(--accent)] transition duration-300 ease-linear">
                    Acerca de mi
                </p>    
            </div>
        </div>
    </section>
</template> 
<style scoped>
.parallax {
    background-image: url('/Carretera.jpg');
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
}
</style>