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
            path: "/development/information",
            component: () => import("@/views/InformationView.vue"),
            meta: { title: "Registros" },
        },
        {
            path: "/inscripcion",
            component: () => import("@/views/InscriptionView.vue"),
            meta: { title: "Inscripcion al curso" },
        },
        {
            path: "/the-forbiden",
            component: () => import("@/views/TheForbiden.vue"),
            meta: { title: "😺" },
        },
        {
            path: "/:pathMatch(.*)*",
            redirect: "/",
        },
    ],
});

export default router;
