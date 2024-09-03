import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: HomeView,
        },
        {
            path: '/competencias',
            component: () => import('@/views/SkillsView.vue'),
        },
        {
            path: '/the-forbiden',
            component: () => import('@/views/TheForbiden.vue'),
        },
        {
            path: '/development/information',
            component: () => import('@/views/InformationView.vue'),
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: '/',
        },
    ],
});

export default router;
