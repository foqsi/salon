<template>
    <div>
      <!-- Image Container with Hover Effect -->
      <div 
        class="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        @click="openModal"
      >
        <img 
          :src="image.image" 
          :alt="image.name" 
          class="w-full h-120 object-cover rounded-lg transform transition-transform duration-300 hover:scale-105"
        />
      </div>
  
      <!-- Modal for Larger Image View -->
      <div v-if="isModalOpen" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" @click.self="closeModal">
        <div class="relative max-w-3xl w-full">
          <img 
            :src="image.image" 
            :alt="image.name" 
            class="w-full object-cover rounded-lg"
          />
          <!-- Close Button ('X') -->
          <button 
            class="absolute text-white text-4xl font-bold" 
            @click="closeModal"
          >&times;</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ImageItem',
    props: {
      image: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        isModalOpen: false,
      };
    },
    mounted() {
      window.addEventListener('keydown', this.handleEscKey);
    },
    beforeUnmount() {
      window.removeEventListener('keydown', this.handleEscKey);
    },
    methods: {
      openModal() {
        this.isModalOpen = true;
      },
      closeModal() {
        this.isModalOpen = false;
      },
      handleEscKey(event) {
        if (event.key === 'Escape' && this.isModalOpen) {
          this.closeModal();
        }
      }
    },
  };
  </script>
  
  <style scoped>
  .h-120 {
    height: 20rem; /* Adjust this as per your design needs */
  }
  
  @media (max-width: 640px) {
    .h-120 {
      height: 20rem; /* Smaller height for mobile devices */
    }
  }
  </style>
  