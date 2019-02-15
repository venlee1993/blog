<template>
    <b-modal centered size="sm" :title="loginModal.type == 'login' ? '登录' : '注册'" class="login-modal" @hidden="hideModal" v-model="loginModal.status">
        <b-container fluid>
            <b-form @submit="submit">
                <div class="input-item">
                    <b-form-input type="text" placeholder="请输入邮箱" v-model="formData.email"></b-form-input>
                </div>
                <div class="input-item">
                    <b-form-input type="password" placeholder="请输入密码" v-model="formData.password"></b-form-input>
                </div>
                <div class="input-item" v-if="loginModal.type == `register`">
                    <b-form-input type="password" placeholder="重复密码" v-model="formData.password_confirmation"></b-form-input>
                </div>
                <div class="input-item">
                    <b-btn variant="primary" size="md" class="w-100" type="submit">登录</b-btn>
                </div>
            </b-form>
        </b-container>
        <div slot="modal-footer" class="w-100">
            <div class="login-way d-flex">
                <div>
                    <b-img src="https://b-gold-cdn.xitu.io/v3/static/img/weibo.fa758eb.svg" width="38" height="38" rounded="circle"/>
                </div>
                <div>
                    <b-img src="https://b-gold-cdn.xitu.io/v3/static/img/wechat.e0ff124.svg" width="38" height="38" rounded="circle"/>
                </div>
                <div>
                    <b-img src="https://b-gold-cdn.xitu.io/v3/static/img/github.547dd8a.svg" width="38" height="38" rounded="circle"/>
                </div>
            </div>
        </div>
    </b-modal>
</template>

<script>
    import {mapState, mapMutations} from 'vuex'

    export default {

        name: "LoginModal",

        data() {
            return {
                isSubmit: false,
                formData: {email: '', password: '', password_confirmation: ''},
            }
        },

        computed: {
            ...mapState(['loginModal'])
        },

        methods: {

            ...mapMutations(['LOGIN', 'SET_MODAL']),

            hideModal() {
                this.SET_MODAL({status: false, type: `login`})
                this.reset();
            },

            submit(e) {
                e.preventDefault();
                if (this.isSubmit) return;
                this.loginModal.type == "login" ? this.loginRequest() : this.registerRequest();
            },
            reset() {
                for (let i in this.formData) {
                    this.formData[i] = ''
                }
            },
            validata() {

            },
            loginRequest() {
                let params = {
                    email: this.formData.email,
                    password: this.formData.password,
                }
                this.isSubmit = true;
                this.$http.post('http://zhifou.com/api/auth/login', params).then(res => {
                    console.log(res);
                    if (res.status == 201) {
                        //本地存储登录信息
                        this.LOGIN(res.data)
                        //收起登录弹框
                        this.SET_MODAL({status: false, type: `login`});
                    }
                }).then(res => {
                    this.isSubmit = false;
                }).catch(e => {
                    this.isSubmit = false;
                })
            },
            registerRequest() {
                let params = {
                    email: this.formData.email,
                    password: this.formData.password,
                    password_confirmation: this.formData.password_confirmation
                }
                this.isSubmit = true;
                this.$http.post('http://zhifou.com/api/auth/register', params).then(res => {
                    if (res.status == 201) {
                        this.isSubmit = false;
                        window.location.reload();
                    }
                }).catch(e => {
                    console.error(e);
                })
            }
        }
    }
</script>

<style lang="less" scoped>

    .login-modal {

        .input-item {
            margin-bottom: 1rem;
        }

        .login-way {
            justify-content: space-between;
            padding: 0 2rem;
        }

        .login-modal .input-item {
            margin-bottom: 1rem;
        }
    }
</style>
