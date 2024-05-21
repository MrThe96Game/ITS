import { createStore } from 'vuex'

const store = createStore({
    state: {
        count: 0
    },
    mutations: {
        increment(state, payload) {
            state.count += payload.value;
        }
    },
    getters: {
        getCount(state) {
            return state.count;
        }
    }
})

export default store;