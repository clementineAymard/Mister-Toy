import { toyService } from "../services/toy.service.js"

// import CMP from './'
export default {
    // props:[], 
    template: `
        <section class="toy-details">
            <RouterLink to="/toy">Back to to-do list</RouterLink>
            <div class="details flex-column">

                <div><span>Task: </span>{{toy.task}}</div>
                <div><span>Date created: </span>{{date}}</div>
               <div class="cap"><span>Status :  </span>{{toy.status}}</div>

            </div>
        </section>
    `,
    data() {
        return {}
    },
    created(){
        this.$store.dispatch({type:'setCurrToy', toyId: this.$route.params.toyId})
    },
    methods: {},
    computed: {
        toy(){
            return this.$store.getters.currToy
        },
        date(){
            var formattedDate = new Date(this.toy.createdAt)
            // console.log(formattedDate)
            const option = {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                // hour12: false,
            }
            return new Intl.DateTimeFormat('en', option).format(formattedDate)
        }
    },
    // etc.
    // components:{},
}