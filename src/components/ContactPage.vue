<template>
  <div class="bg-gray-100 min-h-screen flex flex-col py-32">
    <main class="container mx-auto mb-12">
      <h1 class="text-4xl font-bold text-gray-800 text-center">Contact Us</h1>
      <p class="text-gray-600 mt-4 px-4 text-center">
        We’d love to hear from you! Fill out the form below or visit us at our
        location.
      </p>
    </main>

    <main class="container mx-auto px-4">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div>
          <form
            @submit.prevent="handleSubmit"
            class="bg-white p-8 rounded-lg shadow-md"
          >
            <h2 class="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>

            <div class="mb-4">
              <label for="name" class="block text-gray-700 font-semibold mb-2"
                >Full Name</label
              >
              <input
                type="text"
                id="name"
                v-model="form.name"
                required
                class="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div class="mb-4">
              <label for="email" class="block text-gray-700 font-semibold mb-2"
                >Email Address</label
              >
              <input
                type="email"
                id="email"
                v-model="form.email"
                required
                class="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div class="mb-4">
              <label for="phone" class="block text-gray-700 font-semibold mb-2"
                >Phone Number</label
              >
              <input
                type="tel"
                id="phone"
                v-model="form.phone"
                class="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div class="mb-4">
              <label
                for="message"
                class="block text-gray-700 font-semibold mb-2"
                >Message</label
              >
              <textarea
                id="message"
                v-model="form.message"
                rows="4"
                required
                class="w-full p-2 border border-gray-300 rounded"
              ></textarea>
            </div>

            <button
              type="submit"
              class="bg-red-600 text-white px-6 py-2 rounded-full text-lg hover:bg-red-500"
            >
              Send Message
            </button>
          </form>
        </div>

        <!-- Google Map -->
        <MapComponent />
      </div>
    </main>
  </div>
</template>

<script>
import MapComponent from "./MapComponent.vue";

export default {
  name: "ContactPage",
  components: {
    MapComponent,
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        phone: "",
        message: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      alert("Message sent! We will get back to you shortly.");
      this.form = {
        name: "",
        email: "",
        phone: "",
        message: "",
      };
    },
  },
};
</script>
