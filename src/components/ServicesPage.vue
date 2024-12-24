<template>
  <div class="bg-gray-100 min-h-screen flex flex-col items-center">
    <main class="container mx-auto py-32">
      <h1 class="text-4xl font-bold text-gray-800 mb-8 text-center">Services</h1>

      <!-- Admin Add Service Section -->
      <div v-if="isAdmin" class="bg-white p-6 mb-8 rounded-lg shadow-md w-full max-w-3xl">
        <h2 class="text-2xl font-bold text-gray-800 mb-4">Add New Service</h2>
        <div class="flex flex-col md:flex-row gap-4">
          <!-- Category Dropdown -->
          <select
            v-model="newService.category_id"
            @change="logCategorySelection"
            class="w-full md:w-1/3 border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option disabled value="">Select Category</option>
            <option v-for="category in categories" :key="category.id" :value="category.id">
              {{ category.name }}
            </option>
          </select>

          <!-- Service Name -->
          <input
            v-model="newService.name"
            placeholder="Service Name"
            class="w-full md:w-1/3 border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <!-- Price -->
          <input
            v-model="newService.price"
            placeholder="Price"
            type="number"
            class="w-full md:w-1/3 border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <!-- Description -->
        <textarea
          v-model="newService.description"
          placeholder="Service Description (optional)"
          class="w-full mt-4 border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        ></textarea>

        <!-- TODO: Fix checkbox -->
        <!-- Price Modifier Checkbox -->
        <div class="flex items-center mt-4">
          <input
            type="checkbox"
            v-model="newService.hasModifier"
            class="mr-2"
          />
          <label for="hasModifier" class="text-gray-700">
            Add a "+" modifier to the price
          </label>
        </div>

        <!-- Add Button -->
        <button
          @click="addService"
          class="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-400 focus:ring-2 focus:ring-blue-300"
        >
          Add Service
        </button>
      </div>

      <!-- Editable Admin View -->
      <div v-if="isAdmin" class="overflow-x-auto shadow-md rounded-lg w-full max-w-5xl">
        <table class="w-full bg-white border border-gray-200 rounded-lg">
          <thead class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <tr>
              <th class="py-3 px-6 text-left">Service</th>
              <th class="py-3 px-6 text-left">Description</th>
              <th class="py-3 px-6 text-left">Price</th>
              <th class="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody class="text-gray-700 text-sm font-light">
            <tr v-if="services.length === 0" class="border-b border-gray-200 hover:bg-gray-100">
              <td colspan="4" class="py-3 px-6 text-center">No services available</td>
            </tr>
            <template v-for="(category, index) in services" :key="index">
              <!-- Category Header -->
              <tr>
                <td colspan="4" class="py-4 px-6 text-lg font-bold text-gray-800 bg-gray-100">
                  {{ category.category }}
                </td>
              </tr>
              <!-- Editable Service Rows -->
              <tr
                v-for="service in category.services"
                :key="service.id"
                class="border-b border-gray-200 hover:bg-gray-100"
              >
                <td class="py-3 px-6">
                  <input
                    v-model="service.name"
                    class="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </td>
                <td class="py-3 px-6">
                  <input
                    v-model="service.description"
                    class="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </td>
                <td class="py-3 px-6">
                  <input
                    v-model="service.price"
                    type="number"
                    class="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </td>
                <td class="py-3 px-6 text-center">
                  <button
                    @click="updateService(service)"
                    class="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-400 focus:ring-2 focus:ring-green-300"
                  >
                    Save
                  </button>
                  <button
                    @click="deleteService(service.id)"
                    class="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-400 focus:ring-2 focus:ring-red-300 ml-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>

      <!-- User View -->
      <div v-if="!isAdmin" class="overflow-x-auto shadow-md rounded-lg">
        <table class="w-full bg-white border border-gray-200 rounded-lg">
          <tbody class="text-gray-700 text-sm font-light">
            <tr v-if="services.length === 0" class="hover:bg-gray-100">
              <td colspan="3" class="py-3 px-6 text-center">No services available</td>
            </tr>
            <template v-for="(category, index) in services" :key="index">
              <!-- Category Header -->
              <tr>
                <td colspan="3" class="py-4 px-12 text-gray-800 border-b border-red-600 charmb text-5xl test">
                  {{ category.category }}
                </td>
              </tr>
              <!-- Service Rows -->
              <tr
                v-for="service in category.services"
                :key="service.id"
                class="hover:bg-gray-100"
              >
                <td class="py-3 px-6 charm text-3xl">{{ service.name }}</td>
                <td class="py-3 px-6">{{ service.description || '-' }}</td>
                <td class="py-3 px-6 text-xl">
                  ${{ service.price }}<span v-if="service.price_modifier">{{ service.price_modifier }}</span>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </main>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Charm:wght@400;700&display=swap');

.test {
  background-image: url('../assets/images/services-bg.png');
  background-position: left;
  background-repeat: no-repeat;
}

.s1 {
  background-image: url('../assets/images/s1.png');
  background-size: fill;
  background-position: center;
  background-repeat: no-repeat;
}


.charm {
  font-family: "Charm", serif;
  font-weight: 400;
  font-style: normal;
}

.charmb {
  font-family: "Charm", serif;
  font-weight: 700;
  font-style: normal;
}
</style>

<script>
import { getServices, addService, updateService, deleteService } from "../data/services.js";

export default {
  data() {
    return {
      services: [], // Grouped services by category
      categories: [], // Categories for selection
      newService: { name: "", price: 0, category_id: "" },
      isAdmin: false,
    };
  },
  async created() {
    try {
      this.services = await getServices();

      this.categories = this.services.map((category) => ({
        id: category.id,
        name: category.category,
      }));
      console.log("Categories for dropdown:", this.categories);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  },
  methods: {
    async addService() {
      try {
        await addService(this.newService);
        this.services = await getServices();
        this.newService = { name: "", price: 0, category_id: "" };
      } catch (error) {
        console.error("Error adding service:", error);
      }
    },
    async updateService(service) {
      try {
        await updateService(service);
        this.services = await getServices();
      } catch (error) {
        console.error("Error updating service:", error);
      }
    },
    async deleteService(id) {
      try {
        await deleteService(id);
        this.services = await getServices();
      } catch (error) {
        console.error("Error deleting service:", error);
      }
    },
  },
};
</script>