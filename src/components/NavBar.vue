<template> <header class="bg-white shadow w-full fixed top-0 left-0 right-0 z-10">
    <nav class="container mx-auto p-4 flex justify-between items-center">
      <h1 class="text-3xl font-bold text-red-600 flex items-center space-x-2">
        <a href="/" class="flex items-center">
          <img src="../assets/images/logo2.png" alt="Logo" class="w-full h-20">
        </a>
        <a href="/" class="inline-block">El Reno Nail Spa</a>
      </h1>
      <div class="block lg:hidden">
        <button @click="toggleMenu" class="text-gray-700 focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      <ul class="hidden lg:flex space-x-4">
        <li><a href="/" class="text-gray-700 hover:text-red-600 hover:font-bold">Home</a></li>
        <li><a href="/gallery" class="text-gray-700 hover:text-red-600 hover:font-bold">Gallery</a></li>
        <li><a href="/appointment" class="text-gray-700 hover:text-red-600 hover:font-bold">Appointments</a></li>
        <li><a href="/services" class="text-gray-700 hover:text-red-600 hover:font-bold">Services</a></li>
        <li><a href="/about" class="text-gray-700 hover:text-red-600 hover:font-bold">About</a></li>
        <li><a href="/contact" class="text-gray-700 hover:text-red-600 hover:font-bold">Contact</a></li>
      </ul>
    </nav>
    <!-- Side Menu --> 
    <transition name="slide">
      <div v-if="isMenuOpen" class="fixed inset-0 bg-gray-900 bg-opacity-75 z-20">
        <div class="fixed top-0 right-0 w-64 bg-white h-full shadow-lg z-30">
          <button @click="toggleMenu" class="absolute top-4 right-4 text-gray-700 focus:outline-none">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <ul class="flex flex-col items-start p-8 space-y-4">
            <li><a href="/" @click="toggleMenu" class="text-gray-700 text-lg hover:text-red-600">Home</a></li>
            <li><a href="/gallery" @click="toggleMenu" class="text-gray-700 hover:text-red-600">Gallery</a></li>
            <li><a href="/appointment" @click="toggleMenu" class="text-gray-700 text-lg hover:text-red-600">Appointments</a></li>
            <li><a href="/services" @click="toggleMenu" class="text-gray-700 text-lg hover:text-red-600">Services</a></li>
            <li><a href="/about" @click="toggleMenu" class="text-gray-700 text-lg hover:text-red-600">About</a></li>
            <li><a href="/contact" @click="toggleMenu" class="text-gray-700 text-lg hover:text-red-600">Contact</a></li>
          </ul>
        </div>
      </div>
    </transition>
  </header>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style>
.slide-enter-active, .slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter, .slide-leave-to {
  transform: translateX(100%);
}
</style>
