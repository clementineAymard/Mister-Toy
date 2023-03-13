
<template>
    <section class="main">
        <AppHeader />
        <RouterView />
        <AppFooter />
        <!-- <UserMsg/> -->
    </section>
</template>

<script>
import AppHeader from './cmps/AppHeader.vue'
import AppFooter from './cmps/AppFooter.vue'
// import UserMsg from './cmps/UserMsg'

export default {
    components: {
        AppHeader,
        AppFooter,
        // UserMsg
    },
}
</script>
