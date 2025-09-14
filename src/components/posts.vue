<template>
  <div v-if="posts.length">
    <h2>Últimos posts de Instagram</h2>
    <div v-for="post in posts" :key="post.id">
      <img :src="post.image_url" :alt="post.caption" />
      <p>{{ post.caption }}</p>
      <p>Fecha de publicación: {{ new Date(post.date_time_posted).toLocaleDateString() }}</p>
      <hr />
    </div>
  </div>
  <div v-else>
    Cargando posts...
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

// 1. Define el tipo de dato para un post
interface InstagramPost {
  id: string;
  image_url: string;
  caption: string;
  date_time_posted: string;
}

export default defineComponent({
  name: 'InstagramFeed',
  data() {
    return {
      // 2. Anota el tipo del array de posts
      posts: [] as InstagramPost[],
      jsonFeedUrl: 'https://data.accentapi.com/feed/25596240.json?no_cache=20250907085637' 
    };
  },
  mounted() {
    this.fetchInstagramFeed();
  },
  methods: {
    async fetchInstagramFeed() {
      try {
        // 3. Usa `axios` con un tipo genérico para la respuesta
        const response = await axios.get<{ posts: InstagramPost[] }>(this.jsonFeedUrl);
        
        // 4. Los datos ya están tipados
        this.posts = response.data.posts;
      } catch (error) {
        console.error('Error al obtener el feed de Instagram:', error);
      }
    }
  }
});
</script>