<template>
  <div class="bg-red-900 text-white w-full">
    <div class="container mx-auto py-8 px-4 flex flex-col md:flex-row items-start justify-between">
      <!-- Text Section -->
      <div class="md:w-1/2">
        <h2 class="text-lg font-bold mb-4">Contact Us</h2>
        <p>1601 Investors Ave, El Reno, OK, 73036</p>
        <!-- TODO: Get Phone number -->
        <a href="tel:+405" class="text-white underline hover:text-gray-300">
      
        </a>
        
        <a href="mailto:contact@elrenonailspa.com"
          class="text-white underline hover:text-gray-300">
          contact@elrenonailspa.com
        </a>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <a href="/login" class="hover:text-red-300"
        >Admin</a>

      </div>

      
      <!-- Map Section -->
      <div class="md:w-1/2 mt-8 md:mt-0">
        <MapComponent />
      </div>
    </div>

    <!-- Footer Section -->
    <footer class="text-center py-4 border-white border-t-2">
      <p>&copy; El Reno Nail Spa @ 2024. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
import MapComponent from './MapComponent.vue';

export default {
  name: 'FooterBar',
  components: {
    MapComponent
  },
};
</script>
