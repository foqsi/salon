<template>
  <div class="bg-gray-100 min-h-screen flex flex-col items-center py-32">
    <header class="container mx-auto text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-800">About Us</h1>
      <p class="text-gray-600 mt-4">Learn more about El Reno Nail Spa and our commitment to providing exceptional nail care.</p>
    </header>

    <main class="container mx-auto px-4">
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
        <p class="text-gray-600">
          At El Reno Nail Lounge, our mission is to deliver a relaxing and enjoyable experience while ensuring your nails look stunning. We are committed to using high-quality products and providing exceptional service in a clean and welcoming environment.
        </p>
      </section>

      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-800 mb-6">Meet the Team</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-md text-center">
            <!-- <img src="https://via.placeholder.com/150" alt="Team Member 1" class="w-32 h-32 object-cover rounded-full mx-auto mb-4"/> -->
            <h3 class="text-xl font-semibold text-gray-800">Loc Nguyen</h3>
            <p class="text-gray-600">Founder & Owner</p>
            <p class="text-gray-500 mt-2">With over a decade of experience, Loc is passionate about delivering the best nail care services and ensuring each client leaves with a smile.</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md text-center">
            <!-- <img src="https://via.placeholder.com/150" alt="Team Member 2" class="w-32 h-32 object-cover rounded-full mx-auto mb-4"/> -->
            <h3 class="text-xl font-semibold text-gray-800">Duyen Nguyen</h3>
            <p class="text-gray-600">Lead Nail Technician</p>
            <p class="text-gray-500 mt-2">Duyen brings creativity and precision to her work, specializing in intricate nail art and ensuring top-notch customer service.</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md text-center">
            <!-- <img src="https://via.placeholder.com/150" alt="Team Member 3" class="w-32 h-32 object-cover rounded-full mx-auto mb-4"/> -->
            <h3 class="text-xl font-semibold text-gray-800">Lan Nguyen</h3>
            <p class="text-gray-600">Nail Technician</p>
            <p class="text-gray-500 mt-2">Lan is dedicated to making every visit a pleasant experience with her friendly demeanor and attention to detail.</p>
          </div>
        </div>
      </section>

      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
        <p class="text-gray-600">
          El Reno Nail Spa Lounge was founded with a vision to provide exceptional nail care services in a luxurious and relaxing environment. Our team of skilled professionals is committed to making every visit enjoyable and ensuring that you leave feeling pampered and refreshed.
        </p>
      </section>

      <section>
        <h2 class="text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>
        <p class="text-gray-600">
          Have questions or want to book an appointment? Feel free to reach out to us at <a href="mailto:email" class="text-pink-600">email</a> or call us at <a href="tel:" class="text-pink-600">phone</a>.
        </p>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
};
</script>

