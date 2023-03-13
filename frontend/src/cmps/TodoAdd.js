export default {
    // props:[], 
    template: `
            <section class="add-toy">
                <form @submit.prevent="addToy">
                    <input type="text" v-model="newTask" placeholder="What needs to be done ?">
                    <button title="Add to list">+</button>
                </form>
            </section>
            `,
    data() {
        return {
            newTask: ''
        }
    },
    methods: {
        addToy() {
            this.$emit('addToy', this.newTask)
            this.newTask = ''
        }
    },
}