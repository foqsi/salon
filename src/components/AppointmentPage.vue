<template>
  <div class="bg-gray-100 min-h-screen flex flex-col items-center py-32">
    <header class="container mx-auto text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-800">Book Your Appointment</h1>
      <p class="text-gray-600 mt-4">
        Schedule your next appointment!
      </p>
    </header>
    <main class="container mx-auto px-4 flex justify-center">
      <div v-if="acceptingAppointments" class="max-w-lg w-full">
        <form @submit.prevent="handleSubmit" class="bg-white p-8 rounded-lg shadow-md">
          <p class="text-sm text-gray-500 mb-6">Fields marked with <span class="text-red-500">*</span> are required.</p>

          <div class="mb-4">
            <label class="block text-gray-700 mb-2" for="date">Preferred Date</label>
            <input v-model="form.date" type="date" id="date" class="w-full p-2 border rounded" />
          </div>

          <div class="mb-6">
            <label class="block text-gray-700 mb-2" for="time">Preferred Time</label>
            <select v-model="form.time" id="time" class="w-full p-2 border rounded" :disabled="!form.date">
              <option disabled value="">Select a time</option>
              <option v-for="slot in availableTimes" :key="slot" :value="slot">{{ slot }}</option>
            </select>
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 mb-2" for="firstName">First Name <span class="text-red-500">*</span></label>
            <input v-model="form.firstName" type="text" id="firstName" class="w-full p-2 border rounded" required placeholder="First name" />
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 mb-2" for="lastName">Last Name <span class="text-red-500">*</span></label>
            <input v-model="form.lastName" type="text" id="lastName" class="w-full p-2 border rounded" required placeholder="Last name" />
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 mb-2" for="email">Email <span class="text-red-500">*</span></label>
            <input v-model="form.email" type="email" id="email" class="w-full p-2 border rounded" required placeholder="email@domain.com" />
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 mb-2" for="phone">Phone <span class="text-red-500">*</span></label>
            <input v-model="form.phone" type="tel" id="phone" class="w-full p-2 border rounded" required placeholder="4055551234" />
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 mb-2" for="tech">Tech</label>
            <input v-model="form.tech" id="tech" class="w-full p-2 border rounded" />
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 mb-2" for="message">Message <span class="text-red-500">*</span></label>
            <textarea v-model="form.message" id="message" class="w-full p-2 border rounded" required placeholder="Let us know what you're looking for, preferred times, or any other details."></textarea>
          </div>

          <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
        </form>
      </div>

      <div v-else class="text-center bg-white p-8 rounded-lg shadow-md">
        <p class="text-xl text-gray-700">We are not currently accepting appointments. Please check back soon.</p>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'AppointmentPage',
  data() {
    return {
      acceptingAppointments: false,
      form: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        date: '',
        time: '',
      },
    };
  },
  async mounted() {
    try {
      const res = await fetch("/api/php/settings.php?key=acceptingAppointments");
      const data = await res.json();
      this.acceptingAppointments = data.value === true || data.value === 1;
    } catch (err) {
      console.error("Failed to load appointment setting:", err);
    }
  },
  computed: {
    availableTimes() {
      if (!this.form.date) return [];
      const selectedDate = new Date(this.form.date + 'T00:00:00');
      const day = selectedDate.getUTCDay();
      const start = day === 0 ? 12 : 10;
      const end = day === 0 ? 18 : 19;
      const slots = [];
      for (let hour = start; hour < end; hour++) {
        ['00', '30'].forEach(min => {
          slots.push(`${hour.toString().padStart(2, '0')}:${min}`);
        });
      }
      return slots;
    },
  },
  methods: {
    async handleSubmit() {
      try {
        const res = await fetch("/api/php/send_appointment.php", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(this.form),
        });
        const result = await res.json();

        if (result.success) {
          alert("Appointment request sent!");
          this.form = {
            firstName: '', lastName: '', email: '', phone: '',
            message: '', date: '', time: '', tech: ''
          };
        } else {
          alert("Failed to send email: " + result.error);
        }
      } catch (err) {
        console.error("Submit error:", err);
        alert("Something went wrong. Please try again later.");
      }
    }
  }
};
</script>
