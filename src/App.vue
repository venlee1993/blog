<template>
    <div id="app">
        <vs-header></vs-header>
        <router-view/>
        <vs-login></vs-login>
    </div>
</template>

<script>
    import Header from '@/components/Header'
    import LoginModal from '@/components/LoginModal'

    export default {
        name: 'App',
        components: {
            'vs-header': Header,
            'vs-login': LoginModal
        }
    }
</script>


<style lang="less">
    @import "assets/css/base.css";
</style>
