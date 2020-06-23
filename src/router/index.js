import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.inc()
NProgress.configure({
    showSpinner: false,
    speed: 500
})

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    }
    // {
    //     path: '/our-team',
    //     name: 'Our Team',
    //     component: OurTeam
    // },
    // {
    //     path: '/why-choose-the-philippines',
    //     name: 'Wny Choose The Philippines',
    //     component: WhyPhilippines
    // },
    // {
    //     path: '/pricing',
    //     name: 'Pricing',
    //     component: Pricing
    // },
    // {
    //     path: '/contact-us',
    //     name: 'Contact Us',
    //     component: ContactUs
    // },
    // {
    //     path: '/privacy-policy',
    //     name: 'Privacy Policy',
    //     component: PrivacyPolicy
    // },
    // {
    //     path: '/terms-and-conditions',
    //     name: 'Terms And Conditions',
    //     component: TermsAndConditions
    // },
    // {
    //     path: '*',
    //     component: PageNotFound
    // }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {
                x: 0,
                y: 0
            }
        }
    }
})

router.beforeResolve((to, from, next) => {
    if (to.name) {
        NProgress.start()
    }
    next()
})

router.afterEach((to, from) => {
    NProgress.done()
})

export default router
