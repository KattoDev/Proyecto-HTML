import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            component: HomeView,
            meta: { title: "Oferta de formación" },
        },
        {
            path: "/competencias",
            component: () => import("@/views/SkillsView.vue"),
            meta: { title: "Competencias" },
        },
        {
            path: "/the-forbiden",
            component: () => import("@/views/TheForbiden.vue"),
            meta: { title: "😺" },
        },
        {
            path: "/development/information",
            component: () => import("@/views/InformationView.vue"),
            meta: { title: "Registros" },
        },
        {
            path: "/:pathMatch(.*)*",
            redirect: "/",
        },
    ],
});

export default router;
