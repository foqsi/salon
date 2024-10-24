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
        meta: { title: 'El Reno Nail Salon' }
    },
    {
        path: '/services',
        name: 'ServicesPage',
        component: ServicesPage,
        meta: { title: 'Our Services - El Reno Nail Salon' }
    },
    {
        path: '/about',
        name: 'AboutPage',
        component: AboutPage,
        meta: { title: 'About Us - El Reno Nail Salon' }
    },
    {
        path: '/contact',
        name: 'ContactPage',
        component: ContactPage,
        meta: { title: 'Contact Us - El Reno Nail Salon' }
    },
    {
        path: '/appointment',
        name: 'AppointmentPage',
        component: AppointmentPage,
        meta: { title: 'Book an Appointment - El Reno Nail Salon' }
    },
    {
        path: '/gallery',
        name: 'GalleryPage',
        component: GalleryPage,
        meta: { title: 'Gallery - El Reno Nail Salon' }
    }
];


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

// This navigation guard will run before each route change
router.beforeEach((to, from, next) => {
    // If the route has a title in the meta field, use it; otherwise, fallback to a default title
    document.title = to.meta.title || 'El Reno Nail Salon';
    next();
});

export default router;
