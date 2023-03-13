import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service.js"
import { toyService } from "../services/toy.service.js"

// import CMP from './'
export default {
    // props:[], 
    template: `
    <section class="toy-edit">
    <RouterLink to="/toy">Back to to-do list</RouterLink>
        <div>
            Edit task : 
            <input type="text" v-model="newToy.task">
            <button @click="editToy">Save change</button>
        </div>
    </section>
    `,
    data() {
        return {
            newToy: {}
        }
    },
    created() {
        this.$store.dispatch({ type: 'setCurrToy', toyId: this.$route.params.toyId })
            .then(() => this.newToy = { ...this.$store.getters.currToy })
        // .catch(err => { throw err })
    },
    methods: {
        editToy() {
            this.$store.dispatch({ type: 'editToy', newToy: { ...this.newToy } })
                .then(() => {
                    showSuccessMsg('Edited toy')
                    this.$router.push('/toy')
                })
                .catch(err => showErrorMsg('Failed to edit toy', err))

        }
    },
    computed: {},
    // etc.
    // components:{},
}