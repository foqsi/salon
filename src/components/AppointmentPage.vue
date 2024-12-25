<template>
    <div class="bg-gray-100 min-h-screen flex flex-col items-center py-32">
      <header class="container mx-auto text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-800">Book Your Appointment</h1>
        <p class="text-gray-600 mt-4">Schedule your next visit with us. Please fill out the form below, and we’ll get back to you to confirm your appointment.</p>
      </header>
  
      <main class="container mx-auto px-4">
        <form @submit.prevent="handleSubmit" class="bg-white p-8 rounded-lg shadow-md">

          <iframe src="https://app.acuityscheduling.com/schedule.php?owner=33835314&ref=embedded_csp" title="Schedule Appointment" width="100%" height="800" frameBorder="0"></iframe>
        
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
