<template>
  <div class="bg-gray-100 min-h-screen flex flex-col items-center">
    <main class="container mx-auto py-32">
      <h2 class="text-4xl font-bold text-gray-800 mb-8 text-center">Gallery</h2>
      <p class="text-gray-600 mb-16"></p>

      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center"
      >
        <ImageItem v-for="image in images" :key="image.id" :image="image" />
      </div>
    </main>
  </div>
</template>

<script>
import { images } from "../data/images.js";
import ImageItem from "./ImageItem.vue";

export default {
  name: "GalleryPage",
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
