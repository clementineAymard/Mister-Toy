<template>
    <section class="app-header">
        <RouterLink class="logo" to="/">Mister Toy</RouterLink>

        <div class="btn-ham-menu" @click="toggleMenu"></div>
        <nav :class="isMenuShownClass">

            <RouterLink to="/" @click="toggleMenu">Home</RouterLink>
            <RouterLink to="/toys" @click="toggleMenu">Toys</RouterLink>

        </nav>
    </section>
</template>

<script>
export default {
    name: '',
    data() {
        return {
            isMenuShown: false,
        }
    },
    created() {},
    methods: {
        toggleMenu(){
            this.isMenuShown = !this.isMenuShown
        }
    },
    computed: {
        isMenuShownClass(){
            return this.isMenuShown ? 'menu-open' : ''
        }
    },
    components: {

    },
}
</script>
