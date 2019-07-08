import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        aryStop: []
    },
    mutations: {
        pushStops (state, stops) {
            state.aryStop = stops
        }
    },
    actions: {
        pushStops(context, stops){
            context.commit('pushStops', stops)
        }
    }
})
