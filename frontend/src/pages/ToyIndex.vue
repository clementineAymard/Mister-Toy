<template>
    <section class="toy-index">
        <!-- <ToyFilter @setFilterBy="onSetFilterBy" @setSortBy="onSetSortBy" /> -->

        <!-- <ToyAdd @addToy="onAddToy" /> -->

        <ToyList :toys="toys"
        @removeToy="onRemoveToy" />
        <!-- @toggleToyStatus="onToggleToyStatus"  -->

    </section>
</template>

<script>
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'

// import ToyAdd from '../cmps/ToyAdd.js'
// import ToyFilter from '../cmps/ToyFilter.js'
import ToyList from '../cmps/ToyList.vue'


export default {
    created() {
        this.$store.dispatch('loadToys')
    },
    computed: {
        // user() {
        //     return this.$store.getters.user
        // },
        toys() {
            return this.$store.getters.toysForDisplay
        },
    },
    methods: {
        onRemoveToy(toyId) {
            this.$store.dispatch({ type: 'removeToy', toyId: toyId })
                .then(toy => showSuccessMsg('Successfully removed toy'))
                .catch(err => showErrorMsg('Failed to remove toy'))
        },
        // onSetFilterBy(filterBy) {
        //     this.$store.dispatch({ type: 'setFilterBy', filterBy: filterBy })
        // },
        // onSetSortBy(sortBy) {
        //     this.$store.dispatch({ type: 'setSortBy', sortBy: sortBy })
        // },
        // onAddToy(newTask) {
        //     this.$store.dispatch({ type: 'addToy', newTask })
        //         .then(toy => showSuccessMsg('Successfully added toy'))
        //         .catch(err => showErrorMsg('Failed to add toy'))
        // },
        // onToggleToyStatus(toyId) {
        //     this.$store.dispatch({ type: 'toggleStatus', toyId })
        // },
    },
    components: {
        // ToyAdd,
        // ToyFilter,
        ToyList,
    }
}
</script>