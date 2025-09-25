<template>
    <div class=" xl:flex-row w-full h-auto md:h-fit xl:h-[calc(100vh*3/4)] hidden md:flex p-2 gap-2 flex-col transition-all ease-in-out duration-700">
        <a class="flex-row xl:w-6/10 gap-2 hover:cursor-pointer hover:scale-[1.01] hover:shadow-xl transition-all duration-500 ease-in-out" :href="posts[0].link">
            <div class="flex md:flex-row flex-col items-center h-full w-full bg-white gap-2 text-white">
                <img :src="posts[0].image_url" :alt="posts[0].caption" class="h-full w-auto object-cover aspect-ratio"/>
                <div class="bg-(--primary) h-[600px] xl:h-full w-full flex flex-col p-4 gap-2 items-center justify-center text-white">
                    <p class="text-sm  w-2/3 font-light">
                    📅 {{ new Date(posts[0].date_time_posted).toLocaleDateString() }}
                    </p>
                    <p class="w-2/3 text-lg md:text-xl font-bold">{{ posts[0].pic_text }}</p>
                </div>
            </div>
        </a>
        <div class="flex flex-col w-full xl:w-4/10">
            <a class="flex flex-row h-1/2 gap-2 p-2 text-white hover:cursor-pointer hover:scale-[1.01] hover:shadow-xl transition-all duration-500 ease-in-out" :href="posts[1].link">
                <img :src="posts[1].image_url" :alt="posts[1].caption"  class="h-full w-auto object-cover aspect-ratio"/>
                <div class="bg-(--accent) h-[600px] xl:h-full w-full flex flex-col p-4 gap-2 items-center justify-center  text-white">
                    <p class="text-sm  w-2/3 font-light">
                    📅 {{ new Date(posts[1].date_time_posted).toLocaleDateString() }}
                    </p>
                    <p class="w-2/3 text-lg md:text-xl font-bold">{{ posts[1].pic_text }}</p>
                </div>
            </a>
            <a class=" bg-(--secondary) flex flex-row h-1/2 gap-2 text-white hover:cursor-pointer hover:scale-[1.01] hover:shadow-xl transition-all duration-500 ease-in-out" :href="posts[2].link">
                <div class=" h-[600px] xl:h-full w-full flex flex-col p-4 gap-2 items-center justify-center  text-white">
                    <p class="text-sm  w-2/3 font-light">
                    📅 {{ new Date(posts[2].date_time_posted).toLocaleDateString() }}
                    </p>
                    <p class="w-2/3 text-lg md:text-xl font-bold">{{ posts[2].pic_text }}</p>
                </div>
                <img :src="posts[2].image_url" :alt="posts[2].caption"  class="h-full w-auto object-cover aspect-ratio"/>
            </a>
        </div>
    </div>
    <!-- mobile view -->
    <div class=" md:hidden flex flex-col w-full h-auto gap-4 p-4 font-barlow">
        <a class="flex flex-col bg-(--primary)  gap-2 text-white" :href="posts[0].link">
            <img :src="posts[0].image_url" :alt="posts[0].caption" class="'w-full h-auto object-cover'"/>
            <div class="flex flex-col items-left p-4">
                <p class="text-sm  w-2/3 font-light">
                    📅 {{ new Date(posts[0].date_time_posted).toLocaleDateString() }}
                </p>
                <p class="text-md font-bold mt-2">{{ posts[0].pic_text }}</p>
            </div>
        </a>
        <a class="flex flex-col bg-(--secondary) gap-2 text-white" :href="posts[1].link">
            <img :src="posts[1].image_url" :alt="posts[1].caption" class="'w-full h-auto object-cover'"/>
            <div class="flex flex-col items-left p-4">
                <p class="text-sm  w-2/3 font-light">
                    📅 {{ new Date(posts[1].date_time_posted).toLocaleDateString() }}
                </p>
                <p class="text-md font-bold mt-2">{{ posts[1].pic_text }}</p>
            </div>
        </a>
        <a class="flex flex-col  bg-(--primary) gap-2 text-white" :href="posts[2].link">
            <img :src="posts[2].image_url" :alt="posts[2].caption" class="'w-full h-auto object-cover'"/>
            <div class="flex flex-col items-left p-4">
                <p class="text-sm  w-2/3 font-light">
                    📅 {{ new Date(posts[2].date_time_posted).toLocaleDateString() }}
                </p>
                <p class="text-md md:text-xl font-bold mt-2">{{ posts[2].pic_text }}</p>
            </div>
        </a>
    </div>
</template>
<script setup lang="ts">
const props = defineProps<{
    posts: Array<{
        id: string;
        image_url: string;
        caption: string;
        date_time_posted: string;
        pic_text: string;
        link: string;
    }>;
}>();



</script>
<style scoped>
.post1 {
    height: calc(100vh - 80px);
    width: 100%;
    display: flex;
    flex-direction: row;
}
</style>