<template>
    <div class="article-list">
        <div>
            <ul class="list-unstyled">
                <b-media right-align vertical-align="center" tag="li" v-for="(post,index) in posts" :key="index">
                    <b-img slot="aside" :src="`http://blog.com/${post.cover}`" width="80" height="80" alt="placeholder"/>
                    <div class="media-info">
                        <div class="info-row">
                            <ul class="tag-list">
                                <li class="item">{{post.tag}}</li>
                                <li class="item">石杉的架构笔记</li>
                                <li class="item">{{post.created_at}}</li>
                                <li class="item">{{post.user_id}}</li>
                            </ul>
                        </div>
                        <div class="title-row">
                            <router-link :to="{path:`/post/detail/${post.id}`}" class="title">{{post.title}}</router-link>
                        </div>
                        <div class="action-list">
                            <ul class="action-row">
                                <li class="item like" @click="giveLike(post.id)">
                                    <span><i class="fas fa-thumbs-up"></i>{{ post.likes_count }}</span>
                                </li>
                                <li class="item comment">
                                    <span><i class="fas fa-comment-alt"></i>{{post.comments_count}}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </b-media>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "List",
        props: {
            posts: {
                type: Array
            }
        },
        methods: {
            giveLike(id) {
                this.$http.post(`/apis/like/inpost/${id}`).then(res => {
                    console.log(res);
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .media {
        border-bottom: 1px solid #F0F2F7;
        padding: 1rem 1.25rem;
    }

    .media:hover {
        background-color: rgba(0, 0, 0, .01);
    }

    .tag-list {
        display: flex;
        align-items: center;
        white-space: nowrap;
        font-size: 0.72rem;
        color: #b2bac2;
        .item:not(:last-child) {
            &::after {
                content: '·';
                padding: 0 0.25rem;
            }
        }
    }

    .title-row {
        .title {
            color: #2e3135;
            font-size: 1rem;
        }
        margin: .2rem 0 .5rem;
        &:hover {
            text-decoration: underline;
        }
    }

    .action-row {
        display: flex;
        .item {
            padding: 0 0.8rem;
            border: solid 1px #edeeef;
            span {
                font-size: .875rem;
                color: #b2bac2;
                font-weight: 500;
                .fas {
                    margin-right: 0.25rem;
                }
                cursor: pointer;
                user-select: none;
            }
            &:hover {
                background-color: #f7f8fa;
            }
        }
        .comment {
            border-left: none;
        }
    }
</style>
