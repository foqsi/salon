<template>
  <div class="bg-gray-100 min-h-screen flex flex-col">
    <main class="flex-grow pt-16">
      <!-- Sale Section -->
      <!-- <section class="bg-red-300 py-4 text-center">
        <div class="container mx-auto">
          <h2 class="text-2xl font-bold text-red-800 mb-2">Grand Opening Sale!</h2>
          <h2 class="text-1xl font-bold text-black-600 mb-2">December 15 - December 31</h2>
          <p class="text-lg text-gray-800">Enjoy 20% off all services during our grand opening celebration.</p>
          <p class="text-base text-gray-600 mt-1">Don't miss out on this limited-time offer!</p>
        </div>
      </section> -->

      <div class="min-h-screen">
        <main class="flex-grow">
          <div class="relative h-[55vh]">
            <img
              src="../assets/images/bg4.png"
              alt="Example"
              class="w-full h-full object-cover max-w-[920px] mx-auto"
            />
            <div
              class="absolute inset-0 bg-gradient-to-b from-gray-300 to-transparent opacity-35"
            ></div>
            <div class="absolute bottom-4 left-4 text-white"></div>
          </div>
          <div class="mb-20"></div>
          <AboutComponent />
          <LandingComponent />
        </main>
      </div>

      <!-- TODO: Scroll to proper service area -->
      <section
        class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-12 -mt-20"
      >
        <a href="/services">
          <div
            class="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 duration-300"
          >
            <img
              src="../assets/images/mani.png"
              alt="Manicure"
              class="w-full h-48 object-cover"
            />
            <div class="p-6 text-center">
              <h3 class="text-2xl font-bold text-red-600 mb-4">Manicure</h3>
              <p class="text-gray-600">
                Professional manicure services to keep your nails looking
                beautiful.
              </p>
            </div>
          </div>
        </a>
        <a href="/services">
          <div
            class="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 duration-300"
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
            class="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 duration-300"
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
