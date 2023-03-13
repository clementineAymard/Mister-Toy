<template>
    <section class="toy-list">
        <ul>
            <li v-for="toy in toys">
                <ToyPreview :toy="toy" title="Preview" />

                <div>
                    <!-- <button @click="this.$router.push('/toy/edit/' + toy._id)">Edit</button> <span> | </span> -->
                    <!-- <button @click="this.$router.push('/toy/' + toy._id)" title="Go to details">See</button> <span> | -->
                    <!-- </span> -->
                    <button @click="removeToy(toy._id)" title="Delete"> X </button>
                </div>
            </li>
        </ul>
    </section>
</template>

<script>
import ToyPreview from './ToyPreview.vue'

export default {
    props: ['toys'],
    methods: {
        removeToy(toyId) {
            this.$emit('removeToy', toyId)
        }
    },
    components: {
        ToyPreview,
    },
}
</script>
