<template>
    <div class="card">
        <div class="card-header text-center">
            <router-link to="/post/create" target="_blank">写文章</router-link>
        </div>
        <div class="card-body">
            <b-list-group>
                <b-list-group-item>Cras justo odio</b-list-group-item>
                <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
                <b-list-group-item>Morbi leo risus</b-list-group-item>
                <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
                <b-list-group-item>Vestibulum at eros</b-list-group-item>
            </b-list-group>
            <b-list-group>
                <b-list-group-item>Cras justo odio</b-list-group-item>
                <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
                <b-list-group-item>Morbi leo risus</b-list-group-item>
                <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
                <b-list-group-item>Vestibulum at eros</b-list-group-item>
            </b-list-group>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Side",
        data() {
            return {
                draft: 2
            }
        }
    }
</script>

<style lang="less" scoped>
</style>
