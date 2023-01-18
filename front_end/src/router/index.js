import { createRouter, createWebHistory } from 'vue-router'

import login from '../views/login.vue'



const routes = [
    {
        path: '/login',
        name: 'login',
        component: login,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router