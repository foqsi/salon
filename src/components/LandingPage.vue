<template>
  <div class="bg-gray-100 min-h-screen flex flex-col">
    <main class="flex-grow pt-24">
      <!-- Sale Section -->
      <section class="bg-red-200 py-4 text-center">
        <div class="container mx-auto">
          <h2 class="text-2xl font-bold text-red-800 mb-2">Join us for our SOFT OPENING! <br>
            Enjoy all services with <span class="text-red-500 text-3xl">15%</span> off until May 9th!</h2>
        </div>
      </section>

      <div class="min-h-screen mt-20">
        <main class="flex-grow">
          <div class="relative">
          </div>
          <AboutComponent/>
          <LandingComponent />
          <div class="mb-20"></div>
        </main>
      </div>

      <!-- TODO: Scroll to proper service area -->
      <section
        class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 -mt-20"
      >
        <a href="/services" class="h-full">
          <div
            class="h-full flex flex-col bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 duration-300"
          >
            <img
              src="../assets/images/mani.png"
              alt="Manicure"
              class="w-full h-48 object-cover"
            />
            <div class="flex-grow p-6 text-center flex flex-col justify-between">
              <h3 class="text-2xl font-bold text-red-600 mb-4">Manicure</h3>
              <p class="text-gray-600">
                Professional manicure services to keep your nails looking beautiful.
              </p>
            </div>
          </div>
        </a>
        <a href="/services">
          <div
          class="h-full flex flex-col bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 duration-300"
          >
            <img
              src="../assets/images/pedi.png"
              alt="Pedicure"
              class="w-full h-48 object-cover"
            />
            <div class="p-6 text-center">
              <h3 class="text-2xl font-bold text-red-600 mb-4">Pedicure</h3>
              <p class="text-gray-600">
                Relaxing pedicure treatments for perfectly pampered feet.
              </p>
            </div>
          </div>
        </a>
        <a href="/services">
          <div
          class="h-full flex flex-col bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 duration-300"
          >
            <img
              src="../assets/images/nailart.png"
              alt="Nail Art"
              class="w-full h-48 object-cover"
            />
            <div class="p-6 text-center">
              <h3 class="text-2xl font-bold text-red-600 mb-4">Nail Art</h3>
              <p class="text-gray-600">
                Creative nail art designs to match your style and personality.
              </p>
            </div>
          </div>
        </a>
      </section>
    </main>
  </div>
</template>

<script>
import AboutComponent from "./AboutComponent.vue";
import LandingComponent from "./LandingComponent.vue";
export default {
  name: "LandingPage",
  components: {
    AboutComponent,
    LandingComponent,
  },
};
</script>
