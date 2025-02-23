import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from '../components/HomeComponent.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeComponent
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../components/AboutComponent.vue')
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import('../components/ContactComponent.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router 