<template>
    <div v-for="post in posts" :key="post.id">
        <div class="flex flex-row flex-4 items-center h-[calc(100vh-80px)] w-full p-2 bg-white gap-4 text-white">
            <img :src="post.image_url" :alt="post.caption"  class="h-full w-auto object-cover aspect-ratio"/>
            <div class="bg-(--primary) h-full w-full flex flex-col p-4 gap-2 items-center justify-center  text-white">
                <p class="w-2/3 font-light">Fecha de publicación: {{ new Date(post.date_time_posted).toLocaleDateString() }}</p>
                <p class="w-2/3 text-3xl">{{ post.pic_text }}</p>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
defineProps<{
    posts: Array<{
        id: string;
        image_url: string;
        caption: string;
        date_time_posted: string;
        pic_text: string;
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