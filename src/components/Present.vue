<template>
    <section v-if="posts.length">
      <h2 class="w-full bg-(--secondary) text-white px-20 py-6 text-3xl font-barlow font-semibold">Mi Actualidad</h2>
      <!-- añto screen menos -80px -->
       <posts :posts="posts" />
    </section>
    <section v-else>
        Cargando posts...
    </section>
</template>
<script setup lang="ts">
import axios from 'axios';
import Posts from './elements/Post.vue';
// 1. Define el tipo de dato para un post
interface InstagramPost {
  id: string;
  image_url: string;
  caption: string;
  date_time_posted: string;
  pic_text: string; // Campo opcional para el texto adicional
  post_url: string; // Campo opcional para la URL del post
}

// Composable logic for InstagramFeed
import { ref, onMounted } from 'vue';

const posts = ref<InstagramPost[]>([]);
const jsonFeedUrl = 'https://data.accentapi.com/feed/25596240.json?no_cache=20250907085637';

async function fetchInstagramFeed() {
  try {
    const response = await axios.get<{ posts: InstagramPost[] }>(jsonFeedUrl);
    // 4. tommos solo los primeros 5 posts
    posts.value = response.data.posts.slice(0, 5);
    console.log('Posts fetched:', posts.value);
  } catch (error) {
    console.error('Error al obtener el feed de Instagram:', error);
  }
}

onMounted(() => {
  fetchInstagramFeed();
});

</script>
<style scoped>
</style>