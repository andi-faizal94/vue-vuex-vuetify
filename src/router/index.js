import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/frontend',
        // name: 'frontend',
        component: () =>
            import ( /* webpackChunkName: "frontend" */ '../views/frontend.vue')
    },
    {
        path: '/backend',
        // name: 'backend',
        component: () =>
            import ( /* webpackChunkName: "backend" */ '../views/backend.vue')
    }, {
        path: '/mobile',
        name: 'mobile',
        component: () =>
            import ( /* webpackChunkName: "mobile" */ '../views/mobile.vue')
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/register',
        component: () =>
            import ( /* webpackChunkName: "register" */ '../views/register.vue')
    },
    {
        path: '/akun',
        component: () =>
            import ('../views/akun.vue')
    },
    {
        path: '/admin',
        component: () =>
            import ('../views/adminHome.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router