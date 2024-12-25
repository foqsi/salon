<template>
  <div class="bg-gray-100 max-w-5xl mx-auto leading-relaxed">
    <main class="container mx-auto px-4">
      <section class="mb-12 flex flex-col md:flex-row items-start">
        <!-- Text Content -->
        <div class="md:w-1/2">
          <h2 class="text-3xl font-bold text-gray-800 mb-6">About Us</h2>
          <p class="text-gray-600 text-justify">
            At <b>El Reno Nail Spa</b>, we are more than just a nail salon.
            We are a family-owned and family-operated business dedicated to serving
            our community with care and excellence. <br/>
            As a new addition to the town, we take pride in offering a welcoming 
            and relaxing environment where every client feels valued and pampered. <br/>
            Our mission is simple: to provide outstanding nail and spa services 
            that combine quality, creativity, and comfort. Whether you're here for a quick 
            touch-up, a luxurious spa treatment, or stunning nail art, our team is 
            committed to exceeding your expectations. <br/>
            We believe in building lasting relationships with our clients by delivering
            personalized care and attention to detail. Every visit to El Reno Nail Spa is
            an opportunity to relax, unwind, and leave feeling refreshed and confident. <br/>
            Thank you for welcoming us to El Reno. We look forward to serving you and being
            a part of your self-care journey!
          </p>
        </div>
        <!-- Image -->
        <div class="md:w-1/2 md:pl-8 mt-4 sm:mt-20 mb-20 sm:mb-4">
          <img
            src="../assets/images/storefront.jpg"
            alt="El Reno Nail Spa"
            class="rounded-lg shadow-lg object-cover w-full h-full"
          />
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "AboutComponent",
};
</script>
