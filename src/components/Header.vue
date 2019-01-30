<template>
    <b-navbar toggleable="md" type="light" variant="white" class="shadows" fixed="top">
        <b-container>
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
            <b-navbar-brand href="#">知否</b-navbar-brand>
            <b-collapse is-nav id="nav_collapse">
                <b-navbar-nav>
                    <b-nav-item href="#">首页</b-nav-item>
                    <b-nav-item href="#">发现</b-nav-item>
                    <b-nav-item href="#">话题</b-nav-item>
                </b-navbar-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-form>
                        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder/>
                        <b-button size="sm" class="my-2 my-sm-0" type="submit" variant="primary">提问</b-button>
                    </b-nav-form>
                    <b-nav-item-dropdown no-caret v-if="loginState">
                        <template slot="button-content">
                            <b-img rounded="circle" width="30" height="30" :src="`http://blog.com/${userInfo.avatar||defaultAvatar}`" alt="img"></b-img>
                        </template>
                        <router-link to="/user/profile" class="dropdown-item">个人中心</router-link>
                        <router-link to="#" class="dropdown-item">我的主页</router-link>
                        <router-link to="#" class="dropdown-item">我的收藏</router-link>
                        <router-link to="#" class="dropdown-item">设置</router-link>
                        <span class="dropdown-item" @click="LOGOUT">注销</span>
                    </b-nav-item-dropdown>
                    <div v-else class="login-register d-flex">
                        <div class="item" @click="SET_MODAL({status:true,type:`login`})">登录</div>
                        <div class="item" @click="SET_MODAL({status:true,type:`register`})">注册</div>
                    </div>
                </b-navbar-nav>
            </b-collapse>
        </b-container>
    </b-navbar>
</template>

<script>

    import {mapState, mapMutations} from "vuex";
    import avatarImg from '@/assets/images/avatar.jpg'

    export default {
        name: "Header",
        data() {
            return {
                defaultAvatar: avatarImg,
            }
        },
        computed: {
            ...mapState(['loginState', 'userInfo'])
        },
        methods: {
            ...mapMutations(['LOGOUT', 'SET_MODAL'])
        }
    };
</script>

<style lang="less" scoped>

    .navbar-nav .nav-item {
        margin-right: 1rem;
    }

    .login-register {
        margin-left: 1rem;
        align-items: center;

    }

    .login-register .item {
        padding: 0 0.2rem;
        color: var(--blue);
        cursor: pointer;
        &:hover {
            color: var(--gray-dark);
        }
        &:last-child {
            padding-bottom: 0;
        }
    }
</style>
