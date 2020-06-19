// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

/**
 * Import Plugins */
import VeeValidate from 'vee-validate'
import VueMeta from 'vue-meta'
import VueScrollTo from 'vue-scrollto'
import Vuex from 'vuex'
import storePlugin from './storePlugin'
import VueLazyload from 'vue-lazyload'

/**
 * Import Styles */
import './assets/stylus/main.styl'

/**
 * Use plugins in vue app */
Vue.use(VeeValidate)
Vue.use(VueMeta, {
    refreshOnceOnNavigation: true
})
Vue.use(VueScrollTo, {
    container: 'body',
    easing: 'ease',
    offset: 0,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
})

Vue.use(Vuex)
Vue.use(storePlugin)
Vue.use(VueLazyload)

Vue.config.productionTip = false

Vue.mixin({
    methods: {
        loading (status) {
            const me = this
            if (status) {
                me.$store.state.loading = true
            } else {
                me.$store.state.loading = false
            }
        }
    }
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
