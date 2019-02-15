<template>
    <div class="main">
        <b-container>
            <b-row>
                <b-col md="9" sm="12" class="wrapper">
                    <div class="author-info">
                        <b-media tag="li">
                            <b-img slot="aside" rounded="circle" blank blank-color="#abc" width="44" alt="placeholder"
                                   class="avator"/>
                            <h6 class="mt-0 mb-1">小生方勤</h6>
                            <div class="meta">2019年01月10日阅读{{ detail.id }}</div>
                        </b-media>
                    </div>
                    <h1 class="post-title">{{detail.title}}</h1>
                    <article v-html="detail.content"></article>
                    <div><img :src="detail.cover" alt=""></div>
                    <v-comment :comments="comments" :post-id="detail.id"></v-comment>
                </b-col>
                <b-col md="3" sm="12">
                    <v-side></v-side>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import Side from '@/components/Side'
    import MsgInput from '@/components/MsgInput'
    import Comment from '@/components/Comment'

    export default {
        name: "Detail",
        components: {
            'v-side': Side,
            'v-msg': MsgInput,
            'v-comment': Comment
        },
        data() {
            return {
                detail: {},
                focusing: false,
                message: '',
                comments: [],
            }
        },
        created() {
            this.getDetail();
            this.getComment();
        },
        methods: {
            getDetail() {
                let parmas = this.$route.params.id
                this.$http.get(`http://zhifou.com/api/post/${parmas}/show`).then(res => {
                    if (res.status == 200) {
                        this.detail = res.data;
                    }
                })
            },
            getComment() {
                //传入post的ID
                let parmas = this.$route.params.id
                this.$http.get(`http://zhifou.com/api/post/${parmas}/comment`).then(res => {
                    this.comments = res.data
                })
            }
        }
    }
</script>

<style lang="less" scoped>

    .wrapper {
        background-color: white;
    }

    .post-title {
        font-weight: bold;
        font-size: 1.6rem;
    }

    .author-info {
        padding: 1rem 0;
        margin-bottom: 1rem;
    }

    .media {
        .meta {
            font-size: .875rem;
            color: #909090;
        }
        h6 {
            font-weight: bold;
        }
    }

    article {
        padding: 1rem 0;
    }
</style>
