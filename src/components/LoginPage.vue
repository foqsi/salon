<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h2 class="text-2xl font-bold mb-6 text-center text-gray-700">Admin Login</h2>
      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <label for="username" class="block text-gray-600 mb-2">Username</label>
          <input v-model="username" type="text" id="username" class="w-full px-4 py-2 border rounded-lg" required />
        </div>
        <div class="mb-4">
          <label for="password" class="block text-gray-600 mb-2">Password</label>
          <input v-model="password" type="password" id="password" class="w-full px-4 py-2 border rounded-lg" required />
        </div>
        <button type="submit" class="w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-300 transition duration-300">Login</button>
      </form>
      <p v-if="error" class="text-red-500 mt-4 text-center">{{ error }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      error: ''
    };
  },
  methods: {
    async handleLogin() {
      try {
        // Send a POST request to the PHP script for login
        const response = await fetch('https://elrenonailspa.com/api/php/db.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: this.username,
            password: this.password,
          }),
        });

        const result = await response.json();

        if (result.success) {
          // Redirect to services page upon successful login
          this.$router.push('/services');
        } else {
          // Show error message
          this.error = result.message;
        }
      } catch (error) {
        this.error = 'Error logging in. If you are an admin, please contact the owner of webpage for assistance.';
      }
    }
  }
};
</script>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
}
</style>
