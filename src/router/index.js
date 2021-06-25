import { createRouter, createWebHistory } from 'vue-router'

import UserProfile from '../views/UserProfile.vue'

const routes = [{
        path: '/',
        name: 'UserProfile',
        component: UserProfile
    },
    {
        path: '/admin',
        name: 'Admin',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Admin.vue')
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router