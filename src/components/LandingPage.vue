<template>
  <div class="bg-gray-100 min-h-screen flex flex-col">
    <main class="flex-grow pt-16">


      <!-- Sale Section -->
      <section class="bg-pink-100 py-4 text-center">
        <div class="container mx-auto">
          <h2 class="text-2xl font-bold text-pink-600 mb-2">Grand Opening Sale!</h2>
          <p class="text-lg text-gray-800">Enjoy 20% off all services during our grand opening celebration.</p>
          <p class="text-base text-gray-600 mt-1">Don't miss out on this limited-time offer!</p>
        </div>
      </section>

      <div class="bg-cover bg-center h-[75vh] flex items-center justify-center" :style="{ backgroundImage: `url(${require('@/assets/images/bg.png')})` }">
        <div class="container mx-auto text-center">
          <div class="bg-black bg-opacity-50 p-8 inline-block rounded-lg">
            <h2 class="text-5xl font-bold text-white mb-6">Welcome to El Reno Nail Spa</h2>
            <p class="text-xl text-white mb-8">Your perfect destination for stunning nails and relaxing spa experiences.</p>
            <button class="bg-pink-600 text-white px-8 py-3 rounded-full text-xl hover:bg-pink-700 transition duration-300">
              <a href="/appointment">Book an Appointment</a>
            </button>
          </div>
        </div>
      </div>
      
      <section class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-12 -mt-20">
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="../assets/images/mani.png" alt="Manicure" class="w-full h-48 object-cover">
          <div class="p-6 text-center">
            <h3 class="text-2xl font-bold text-pink-600 mb-4">Manicure</h3>
            <p class="text-gray-600">Professional manicure services to keep your nails looking beautiful.</p>
          </div>
        </div>
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="../assets/images/pedi.png" alt="Pedicure" class="w-full h-48 object-cover">
          <div class="p-6 text-center">
            <h3 class="text-2xl font-bold text-pink-600 mb-4">Pedicure</h3>
            <p class="text-gray-600">Relaxing pedicure treatments for perfectly pampered feet.</p>
          </div>
        </div>
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="../assets/images/nailart.png" alt="Nail Art" class="w-full h-48 object-cover">
          <div class="p-6 text-center">
            <h3 class="text-2xl font-bold text-pink-600 mb-4">Nail Art</h3>
            <p class="text-gray-600">Creative nail art designs to match your style and personality.</p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'LandingPage'
};
</script>