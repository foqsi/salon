<template>
    <div class="bg-white p-6 rounded-lg shadow-md">
      <img :src="service.img" :alt="service.name" class="w-full h-48 object-cover mb-4 rounded-lg"/>
      <h3 class="text-2xl font-bold text-red-600 mb-2">{{ service.title }}</h3>
      <p class="text-gray-600 mb-4">{{ service.description }}</p>
      <p class="mt-4 text-red-600 font-bold">{{ service.price }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ServiceItem',
    props: {
      service: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
