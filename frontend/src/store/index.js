import { createStore } from 'vuex'

import { toyStore } from './toy.store.js'

const storeOptions = {
    strict: true,
    modules: {
        toyStore,
    }
}

const store = createStore(storeOptions)
export default store