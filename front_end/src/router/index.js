import { createRouter, createWebHistory } from 'vue-router'

import login from '../views/login.vue'
import HomePage from "../views/HomePage";


const routes = [
    {
        path: '/login',
        name: 'login',
        component: login,
    },

    {
        path: '/home',
        name: 'HomePage',
        component: HomePage,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router