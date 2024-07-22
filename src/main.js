import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'
import VueGoogleMaps from '@fawmi/vue-google-maps'

const app = createApp(App);

app.use(router);

app.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
    v: 'weekly',
  },
  installComponents: true,
});

app.mount('#app');