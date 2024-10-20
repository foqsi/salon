<template>
  <div class="bg-gray-100 min-h-screen flex flex-col items-center">
    <main class="container mx-auto text-center py-20">
      <h2 class="text-4xl font-bold text-gray-800 mb-8">Gallery</h2>
      <p class="text-gray-600 mb-16"></p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ImageItem v-for="image in images" :key="image.id" :image="image" />
      </div>
    </main>
  </div>
</template>

<script>
import { images } from '../data/images.js';
import ImageItem from './ImageItem.vue';

export default {
  name: 'GalleryPage',
  components: {
    ImageItem,
  },
  data() {
    return {
      images,
    };
  },
};
</script>