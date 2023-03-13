import { toyService } from '../services/toy.service.js'

export const toyStore = {
    strict: true,
    state() {
        return {
            // filterBy: { status: 'all' },
            // sortBy: { order: -1 },
            toys: [],
            // currToy: {},
        }
    },
    mutations: {
        setToys(state, { toys }) {
            state.toys = toys
        },
        removeToy(state, { toyId }) {
            const idx = state.toys.findIndex(td => td._id === toyId)
            state.toys.splice(idx, 1)
        },
        // setFilterBy(state, { filterBy }) {
        //     state.filterBy = filterBy
        // },
        // setSortBy(state, { sortBy }) {
        //     state.sortBy = sortBy
        // },
        // addToy(state, { newToy }) {
        //     state.toys.unshift(newToy)
        // },
        // editToy(state, { newToy }) {
        //     const idx = state.toys.findIndex(td => td._id === newToy._id)
        //     state.toys.splice(idx, 1, newToy)
        // },
        // toggleStatus(state, { toyId }) {
        //     const idx = state.toys.findIndex(td => td._id === toyId)
        //     state.toys[idx].status = state.toys[idx].status === 'active' ? 'done' : 'active'
        // },
        // setCurrToy(state, { toy }) {
        //     state.currToy = { ...toy }
        // },
    },
    actions: {
        loadToys({ commit, state }) {
            // console.log('loading', state.filterBy, state.sortBy)
            toyService.query() // { filterBy: state.filterBy, sortBy: state.sortBy }
                .then(toys =>
                    commit({ type: 'setToys', toys: JSON.parse(JSON.stringify(toys)) }))
                .catch(err => {
                    console.log('Failed to load toys', err)
                    throw err
                })
        },
        removeToy({ commit }, { toyId }) {
            return toyService.remove(toyId)
                .then(() => {
                    commit({ type: 'removeToy', toyId: toyId })
                    console.log('removed toy')
                })
                .catch((err) => { throw err })
        },
        // setFilterBy({ commit, state, dispatch }, { filterBy }) {
        //     console.log('filtering')
        //     commit({ type: 'setFilterBy', filterBy: filterBy })
        //     dispatch('loadToys')
        //         .then(toys =>
        //             commit({ type: 'setToys', toys: toys }))
        //         .catch(err => {
        //             console.log('Failed to load toys')
        //             throw err
        //         })
        // },
        // setSortBy({ commit, dispatch }, { sortBy }) {
        //     commit({ type: 'setSortBy', sortBy: sortBy })
        //     dispatch('loadToys')
        //         .then(toys =>
        //             commit({ type: 'setToys', toys: toys }))
        //         .catch(err => {
        //             console.log('Failed to load toys')
        //             throw err
        //         })
        // },
        // addToy({ commit, dispatch, getters }, { newTask }) {
        //     const toy = {
        //         task: newTask,
        //         createdAt: Date.now(),
        //         status: 'active',
        //         ownerUsername: getters.username
        //     }

        //     return toyService.save(toy)
        //         .then(savedToy => {
        //             // console.log(savedToy)
        //             commit({ type: 'addToy', newToy: savedToy })
        //             dispatch({ type: 'addActivity', activity: 'Added a toy' })
        //         })
        //         .catch(err => {
        //             console.log('Failed to add toy')
        //             throw err
        //         })
        // },
        // editToy({ commit, dispatch }, { newToy }) {
        //     newToy.updatedAt = Date.now()
        //     console.log(newToy)
        //     return toyService.save(newToy)
        //         .then(() => {
        //             commit({ type: 'editToy', newToy: newToy })
        //             console.log('Succesfully saved toy')
        //             dispatch({ type: 'addActivity', activity: 'Edited a toy' })
        //         })
        //         .catch(err => {
        //             console.log('Failed to save toy')
        //             throw err
        //         })
        // },
        // toggleStatus({ dispatch, commit }, { toyId }) {
        //     return toyService.toggleStatus(toyId)
        //         .then(() => {
        //             commit({ type: 'toggleStatus', toyId: toyId })
        //             dispatch({ type: 'addActivity', activity: 'Updated toy status' })
        //             dispatch('getProgress')
        //         })
        //         .catch(err => {
        //             console.log('failed to toggle status')
        //             throw err
        //         })
        // },
        // setCurrToy({ commit }, { toyId }) {
        //     return toyService.getById(toyId)
        //         .then((toy) => {
        //             commit({ type: 'setCurrToy', toy: toy })
        //         })
        //         .catch(err => { throw err })
        // },
        // getProgress({ commit }) {
        //     return toyService.getProgress()
        //         .then(progress => {
        //             commit({ type: 'setProgress', progress: progress })
        //         })
        //         .catch(err => {
        //             console.log('failed to get counts')
        //             throw err
        //         })
        // },
    },
    getters: {
        toysForDisplay({ toys }) {
            return toys
        },
        // currToy({ currToy }) {
        //     return currToy
        // }
    }
}