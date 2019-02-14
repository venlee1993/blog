<template>
    <div class="main">
        <b-container>
            <b-row>
                <b-col md="9">
                    <div class="card">
                        <div class="card-header">
                            <vs-link></vs-link>
                        </div>
                        <div class="card-body">
                            <vs-list :posts="posts"></vs-list>
                        </div>
                    </div>
                </b-col>
                <b-col md="3">
                    <vs-side></vs-side>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import List from '@/components/List'
    import Side from '@/components/Side'
    import Link from '@/components/Link'

    export default {
        name: "Index",
        components: {
            'vs-list': List,
            'vs-side': Side,
            'vs-link': Link
        },
        data() {
            return {
                posts: []
            }
        },
        created() {
            this.$http.get('/apis/post/index').then(res => {
                if (res.status == 200) {
                    this.posts = res.data.data
                }
            })

        }
    }
</script>

<style scoped>
    .card-body {
        padding: 0;
    }
</style>
