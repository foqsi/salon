<template>
    <div class="bg-gray-100 min-h-screen flex flex-col items-center py-20">
      <header class="container mx-auto text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-800">Book Your Appointment</h1>
        <p class="text-gray-600 mt-4">Schedule your next visit with us. Please fill out the form below, and we’ll get back to you to confirm your appointment.</p>
      </header>
  
      <main class="container mx-auto px-4">
        <form @submit.prevent="handleSubmit" class="bg-white p-8 rounded-lg shadow-md">
          <h2 class="text-2xl font-bold text-gray-800 mb-6">Appointment Form</h2>
  
          <div class="mb-4">
            <label for="name" class="block text-gray-700 font-semibold mb-2">Full Name</label>
            <input type="text" id="name" v-model="form.name" required class="w-full p-2 border border-gray-300 rounded"/>
          </div>
  
          <div class="mb-4">
            <label for="email" class="block text-gray-700 font-semibold mb-2">Email Address</label>
            <input type="email" id="email" v-model="form.email" required class="w-full p-2 border border-gray-300 rounded"/>
          </div>
  
          <div class="mb-4">
            <label for="phone" class="block text-gray-700 font-semibold mb-2">Phone Number</label>
            <input type="tel" id="phone" v-model="form.phone" required class="w-full p-2 border border-gray-300 rounded"/>
          </div>
  
          <div class="mb-4">
            <label for="service" class="block text-gray-700 font-semibold mb-2">Select Service</label>
            <select id="service" v-model="form.service" required class="w-full p-2 border border-gray-300 rounded">
              <option value="" disabled>Select a service</option>
              <option value="Classic Manicure">Classic Manicure</option>
              <option value="Gel Manicure">Gel Manicure</option>
              <option value="Pedicure">Pedicure</option>
              <option value="Nail Art">Nail Art</option>
              <option value="Acrylic Nails">Acrylic Nails</option>
              <option value="Spa Packages">Spa Packages</option>
            </select>
          </div>
  
          <div class="mb-4">
            <label for="date" class="block text-gray-700 font-semibold mb-2">Preferred Date</label>
            <input type="date" id="date" v-model="form.date" required class="w-full p-2 border border-gray-300 rounded"/>
          </div>
  
          <div class="mb-4">
            <label for="time" class="block text-gray-700 font-semibold mb-2">Preferred Time</label>
            <input type="time" id="time" v-model="form.time" required class="w-full p-2 border border-gray-300 rounded"/>
          </div>
  
          <button type="submit" class="bg-pink-600 text-white px-6 py-2 rounded-full text-lg hover:bg-pink-700">Submit Appointment Request</button>
        </form>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AppointmentPage',
    data() {
      return {
        form: {
          name: '',
          email: '',
          phone: '',
          service: '',
          date: '',
          time: '',
        },
      };
    },
    methods: {
      handleSubmit() {
        alert('Appointment request submitted! We will get back to you shortly.');
        this.form = {
          name: '',
          email: '',
          phone: '',
          service: '',
          date: '',
          time: '',
        };
      },
    },
  };
  </script>