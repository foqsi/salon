<template>
  <div class="bg-gray-100 min-h-screen flex flex-col items-center">
    <main class="container mx-auto text-center py-32">
      <h2 class="text-4xl font-bold text-gray-800 mb-8">Our Services</h2>
      <p class="text-gray-600 mb-16">Discover the wide range of nail care services we offer to keep your nails looking their best.</p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceItem v-for="service in services" :key="service.id" :service="service" />
      </div>
    </main>
  </div>
</template>

<script>
import { services } from '../data/services.js';
import ServiceItem from './ServiceItem.vue';

export default {
  name: 'ServicesPage',
  components: {
    ServiceItem,
  },
  data() {
    return {
      services,
    };
  },
};
</script>