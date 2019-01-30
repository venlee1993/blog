<template>
    <div class="main">
        <b-container>
            <b-row>
                <b-col :md="8">
                    <b-card title="个人资料">
                        <div class="info-view">
                            <ul class="settint-list">
                                <li class="item d-flex">
                                    <span class="title">头像</span>
                                    <div class="avatar d-flex">
                                        <div class="image">
                                            <b-img fluid src="https://picsum.photos/72/72/?image=55" alt="Thumbnail"/>
                                        </div>
                                        <div class="upload">
                                            <p>支持 jpg、png 格式大小 5M 以内的图片</p>
                                            <input type="file" name="pic" accept="image/png, image/jepg" hidden ref="files" @change="upload">
                                            <b-button size="sm" variant="primary" class="upload-btn" @click="chooseImage">点击上传</b-button>
                                        </div>
                                    </div>
                                </li>
                                <li class="item d-flex" v-for="(input,index) in formGroup" :key="input.name">
                                    <span class="title">{{input.label}}</span>
                                    <div class="input-area">
                                        <input
                                            type="text"
                                            :name="input.name"
                                            :initial="input.value"
                                            class="input"
                                            placeholder=""
                                            autocomplete="off"
                                            @focus="inputFocus(index)"
                                            @blur="inputBlur(index)"
                                            v-model="input.value"
                                            :ref="input.name"
                                        ></div>
                                    <div class="action d-flex">
                                        <div class="save" v-if="input.focus" @click="submitItem({[input.name]:formGroup[index].value})">保存</div>
                                        <div class="modify" @click="modifyItem(input.name)">修改</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </b-card>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>

    export default {
        name: "Edit",
        components: {},
        data() {
            return {
                formGroup: [
                    {name: 'name', label: '用户名', value: 'venlee', focus: false},
                    {name: 'work', label: '职位', value: 'venlee', focus: false},
                    {name: 'company', label: '公司', value: 'venlee', focus: false},
                    {name: 'profile', label: '个人介绍', value: 'venlee', focus: false},
                    {name: 'index', label: '个人主页', value: 'venlee', focus: false}
                ]
            }
        },
        methods: {
            chooseImage() {
                this.$refs.files.dispatchEvent(new MouseEvent('click'))
            },
            inputFocus(index) {
                this.formGroup[index].focus = true;
            },
            inputBlur(index) {
                this.formGroup[index].focus = false;
            },
            submitItem(data) {
                return
                this.$http.post('/apis/user/setting', data).then(res => {
                    console.log(res);
                })
            },
            modifyItem(tar) {
                this.$refs[tar][0].select();
                this.$refs[tar][0].focus();
            },
            upload() {
                let file = event.target.files[0];
                this.$http.post('/apis/user/upload', {avatar: file}).then(res => {
                    console.log(res);
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .info-view {
        padding: 0 30px;
    }

    .settint-list {
        .item {
            padding: 1.6rem 0;
            align-items: center;
            border-bottom: solid 1px #F0F2F7;
            .title {
                width: 8rem;
                font-size: .875rem;
            }
            .input-area {
                flex: 1;
            }
            .input {
                width: 90%;
                font-size: 1.25rem;
                border: none;
                color: #909090;
            }
            .action {
                font-size: .875rem;
                color: var(--primary);
                .save, .modify {
                    padding: 0 4px;
                    cursor: pointer;
                }
            }
            .avatar {
                .image {
                    margin-right: 1rem;
                }
                .upload {
                    p {
                        font-size: .75rem;
                    }
                }
                .upload-btn {
                    font-size: .75rem;
                }
            }
        }
    }
</style>
