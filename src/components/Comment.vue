<template>
    <div class="comment-box">
        <h6 class="comment-title text-center">评论</h6>
        <v-msg :target-id="postId" :params="{post_id:postId}" @publish="addComment">
            <div class="avator" slot="avator">
                <b-img rounded="circle" width="32" height="32" :src="avatar" alt="img"/>
            </div>
        </v-msg>
        <div class="comment-inner">
            <ul class="comment-list">
                <li class="item" v-for="(comment) in comments" :key="comment.id">
                    <div class="comment">
                        <div class="d-flex">
                            <div class="avator">
                                <b-img rounded="circle" width="32" height="32" :src="comment.user.avatar" alt="img"></b-img>
                            </div>
                            <div class="comment-info">
                                <div class="comment-temp">
                                    <div class="nickname">{{ comment.user.name}}</div>
                                    <div class="words">{{comment.content}}</div>
                                    <div class="reply-stat d-flex">
                                        <div class="time">{{comment.created_at}}</div>
                                        <div class="action-box">
                                            <span class="like" @click="likeRequest(comment.id)"><i class="fas fa-thumbs-up"></i>0</span>
                                            <span class="reply" @click="slideInput(comment.id,0)"><i class="fas fa-comment"></i>{{compare(comment.id,0)?'收起回复':'回复'}}</span>
                                        </div>
                                    </div>
                                    <v-msg v-if="compare(comment.id,0)" :params="{post_id:postId,comment_id:comment.id,replied_id:comment.user.id}" @publish="replyComment"></v-msg>
                                </div>
                                <div class="comment-reply" v-if="comment.replies">
                                    <ul class="reply-list">
                                        <li class="item" v-for="(reply) in comment.replies" :key="`${comment.id}-${reply.id}`">
                                            <div class="d-flex reply-temp">
                                                <div class="avator">
                                                    <b-img rounded="circle" width="32" height="32" :src="reply.user.avatar" alt="img"></b-img>
                                                </div>
                                                <div class="comment-info">
                                                    <div class="nickname">{{ reply.user.name }}</div>
                                                    <div class="words">
                                                        <span>{{reply.user.name}}</span>
                                                        <em class="key-word">回复</em>
                                                        <span>{{reply.replyer.name}}:</span>
                                                        <span>{{reply.content}}</span>
                                                    </div>
                                                    <div class="reply-stat d-flex">
                                                        <div class="time">{{ reply.created_at }}</div>
                                                        <div class="action-box"><span class="like" @click="likeRequest(reply.id)"><i class="fas fa-thumbs-up"></i>0</span><span class="reply" @click="slideInput(comment.id,reply.id)"><i class="fas fa-comment"></i>{{compare(comment.id,reply.id)?'收起回复':'回复'}}</span></div>
                                                    </div>
                                                    <v-msg v-if="compare(comment.id,reply.id)" :params="{post_id:postId,comment_id:comment.id,replied_id:reply.user.id}" @publish="replyComment"></v-msg>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import MsgInput from "@/components/MsgInput";
    import {mapState} from "vuex";
    import avatar from "@/assets/images/avatar.jpg";

    export default {
        name: "Comment",
        components: {
            "v-msg": MsgInput
        },
        data() {
            return {
                slideDownId: "0-0",
                eventType: {post: "post", comment: "comment", reply: "reply"},
                avatar: avatar
            };
        },
        props: {
            //-----帖子ID-----
            postId: {
                type: Number
            },
            //-----留言数据-----
            comments: {
                type: Array
            }
        },
        computed: {
            ...mapState(["userInfo"])
        },
        methods: {
            slideInput(index, idx) {
                this.slideDownId = this.compare(index, idx) ? "0-0" : `${index.toString()}-${idx.toString()}`;
            },
            compare(index, idx) {
                return `${index.toString()}-${idx.toString()}` == this.slideDownId;
            },
            addComment(parmas) {
                this.$http.post("http://zhifou.com/api/post/comment", parmas).then(res => {
                    return
                    if (res.status == 200) {
                        this.comments.unshift(res.data.data);
                    }
                });
            },
            replyComment(params) {
                this.$http.post("http://zhifou.com/api/comment/reply", params).then(res => {
                    console.log(res);
                });
            },
            likeRequest(id) {
                this.$http.post("http://zhifou.com/apis/like/action", {cid: id}).then(res => {
                });
            }
        }
    };
</script>

<style lang="less" scoped>
    .comment {
        margin: 1rem 1rem 1rem 3.2rem;
        .fas {
            margin-right: 0.2rem;
        }
        .avator {
            margin-right: 0.6rem;
        }
        .nickname,
        .words {
            font-size: 0.875rem;
        }
        .words {
            margin-top: 0.4rem;
            .key-word {
                font-style: normal;
                font-size: 0.725rem;
                padding: 0 0.25rem;
            }
        }
        .reply-stat {
            font-size: 0.875rem;
            margin-top: 0.5rem;
            color: #8a93a0;
            justify-content: space-between;
            align-items: center;
            .time {
                font-size: 0.875rem;
            }
            .action-box {
                span {
                    cursor: pointer;
                    user-select: none;
                }
                .reply {
                    margin-left: 2rem;
                }
            }
        }

        .comment-box {
            margin-top: 0.6rem;
        }

        .comment-title {
            margin: 4rem 0 1rem 0;
        }
        .comment-info {
            flex: 1;
        }
        .comment-reply {
            margin-top: 0.8rem;
            background-color: #fafbfc;
        }
        .reply-temp {
            .msg-input {
                margin-top: 0.5rem;
            }
        }
        .reply-list {
            .item {
                padding: 0.875rem 0.875rem 0 0.875rem;
                .comment-info {
                    padding-bottom: 0.875rem;
                }
                &:not(:last-child) {
                    .comment-info {
                        border-bottom: 1px solid #f1f1f1;
                    }
                }
            }
            .reply-temp {
                .msg-input {
                    background-color: white;
                }
            }
        }
    }
</style>
