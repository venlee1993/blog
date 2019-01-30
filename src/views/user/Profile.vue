<template>
    <div class="main">
        <vs-header></vs-header>
        <b-container>
            <b-row class="inner">
                <b-col :md="9">
                    <b-card>
                        <div class="user-setting d-flex">
                            <div class="avatar">
                                <b-img rounded="circle" width="90" height="90" src="https://user-gold-cdn.xitu.io/2019/1/24/1687f171f0f3bd65?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1" alt="img" class="m-1"/>
                            </div>
                            <div class="setting-link">
                                <div class="user-name">venlee</div>
                                <div class="user-tag">前端</div>
                                <div class="user-tag">怎样淹死一条鱼?</div>
                            </div>
                            <div class="user-edit"><router-link to="/user/edit">编辑资料</router-link></div>
                        </div>
                    </b-card>
                    <b-card no-body>
                        <b-tabs card v-model="tabIndex">
                            <b-tab title="动态">
                                Tab Contents 1
                            </b-tab>
                            <b-tab title="专栏">
                                Tab Contents 2
                            </b-tab>
                            <b-tab title="分享">
                                Tab Contents 3
                            </b-tab>

                            <b-tab title="文章">
                                fdfdsfsdfdsfds
                            </b-tab>
                        </b-tabs>
                    </b-card>
                </b-col>
                <b-col :md="3">
                    <div class="foucs-column d-flex bg-white">
                        <div class="foucsed">
                            <div class="name">关注了</div>
                            <span class="count">0</span>
                        </div>
                        <div class="foucser">
                            <div class="name">关注者</div>
                            <span class="count">0</span>
                        </div>
                    </div>

                    <div class="profile-column">
                        <ul class="foucs-list">
                            <li class="foucs-item">
                                <span>关注的话题</span>
                                <span>0</span>
                            </li>
                            <li class="foucs-item">
                                <span>关注的话题</span>
                                <span>0</span>
                            </li>
                            <li class="foucs-item">
                                <span>关注的话题</span>
                                <span>0</span>
                            </li>
                            <li class="foucs-item">
                                <span>关注的话题</span>
                                <span>0</span>
                            </li>
                            <li class="foucs-item">
                                <span>关注的话题</span>
                                <span>0</span>
                            </li>
                            <li class="foucs-item">
                                <span>关注的话题</span>
                                <span>0</span>
                            </li>
                        </ul>
                    </div>
                    <div class="footer">刘看山知乎指南知乎协议知乎隐私保护指引 应用工作申请开通知乎机构号 侵权举报网上有害信息举报专区 违法和不良信息举报：010-82716601 儿童色情信息举报专区 电信与服务业务经营许可证 网络文化经营许可证 联系我们</div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import Header from '@/components/Header'

    export default {
        name: "Profile",
        components: {
            'vs-header': Header
        },
        data() {
            return {
                tabIndex: 0
            }
        },
        methods: {
            linkClass(idx) {

            }
        }
    }
</script>

<style lang="less" scoped>
    .user-setting {
        .avatar {
            margin-right: 2rem;
        }
        .setting-link {
            align-self: flex-start;
            flex: 1;
        }
        .user-name {
            font-size: 1.8rem;
        }
        .user-edit {
            padding-top: .6rem;
        }
        .edit {
            width: 5rem;
        }
        .user-tag {
            padding-left: .1rem;
            font-size: .875rem;
            color: #72777b;
        }
    }

    .card-text {
        margin-top: 1rem;
    }

    .foucs-card .card-body {
        padding: 0;
    }

    .foucs-column {
        margin-bottom: .2rem;
    }

    .foucser, .foucsed {
        padding: 10px 0;
        flex: 1;
        text-align: center;
        cursor: pointer;
        .count {
            font-size: 1rem;
            font-weight: bold;
            margin-top: .8rem;
        }
        &:hover {
            color: var(--primary);
        }
    }

    .foucsed {
        border-right: solid 1px #F0F2F7;
    }

    .foucs-list .foucs-item {
        padding: 10px 4px;
        display: flex;
        justify-content: space-between;
        span {
            font-size: .875rem;
            color: #646464;
            cursor: pointer;
        }
        span:hover {
            color: #175199;
        }
        border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    }

    .footer {
        font-size: .825rem;
        line-height: 1.8;
        color: #646464;
    }
</style>
