import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from '../components/HomeComponent.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeComponent
    },
    {
        path: '/bliv-medlem',
        name: 'BecomeMember',
        component: () => import('../components/BecomeMember.vue')
    },
    {
        path: '/bestyrelse',
        name: 'Bestyrelse',
        component: () => import('../components/Bestyrelse.vue')
    },
    {
        path: '/billeder',
        name: 'Gallery',
        component: () => import('../components/Gallery.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth'
            }
        }
        // Scroll to top if no hash
        return { top: 0 }
    }
})

export default router 