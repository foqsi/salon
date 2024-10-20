import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../components/LandingPage.vue';
import ServicesPage from '../components/ServicesPage.vue';
import AboutPage from '../components/AboutPage.vue';
import ContactPage from '../components/ContactPage.vue';
import AppointmentPage from '../components/AppointmentPage.vue';
import GalleryPage from '../components/GalleryPage.vue';

const routes = [
    {
        path: '/',
        name: 'LandingPage',
        component: LandingPage,
    },
    {
        path: '/services',
        name: 'ServicesPage',
        component: ServicesPage,
    },
    {
        path: '/about',
        name: 'AboutPage',
        component: AboutPage,
    },
    {
        path: '/contact',
        name: 'ContactPage',
        component: ContactPage,
    },
    {
        path: '/appointment',
        name: 'AppointmentPage',
        component: AppointmentPage,
    },
    {
        path: '/gallery',
        name: 'GalleryPage',
        component: GalleryPage,
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
