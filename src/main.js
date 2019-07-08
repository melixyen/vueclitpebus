import Vue from 'vue'
import App from './App.vue'
import ptx from './lib/ptx.es.js'
import router from './router'
import store from './store'

Vue.config.productionTip = false
ptx.AppID = atob('M2FhNWNkN2RmMTQwNGU1ZmJhYzA2N2JmMDAzODg3Yjc=');
ptx.AppKey = atob("TFprbHRGcjhvSkxGenFpUmU1RmdCeUgxYUFZ");


new Vue({
    router,
    store,
    computed: {
        aryStop () {
            return store.state.aryStop
        }
    },
    methods: {
        updateStop () {
            store.commit('pushStops');
        }
    },
    render: h => h(App)
}).$mount('#app')
