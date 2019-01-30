<template>
    <div class="main">
        <v-header></v-header>
        <b-container>
            <b-card>
                <div class="card-body">
                    <b-form @submit="onSubmit" @reset="onReset" class="post-form">
                        <div class="title-row">
                            <b-form-input v-model="form.title" placeholder="文章标题"></b-form-input>
                        </div>
                        <div class="column-row">
                            <div class="column-list">
                                <ul>
                                    <li v-for="(item,index) in columns" :key="index" :class="form.column_id==item.id ? 'item active':'item'" @click="chooseColumn(item)">{{ item.name}}</li>
                                </ul>
                            </div>
                        </div>
                        <div class="tag-row">
                            <b-form-input v-model="form.tag" type="text" placeholder="自定义标签"></b-form-input>
                        </div>
                        <div class="editor-row">
                            <v-editor :content="form.content" :options="option" ref="rich_text" @change="editorChange($event)"></v-editor>
                        </div>
                        <div class="submit-row">
                            <b-button size="sm" variant="primary" type="submit">发布</b-button>
                        </div>
                    </b-form>
                </div>
            </b-card>
        </b-container>
        <v-modal></v-modal>
    </div>
</template>

<script>

    import Header from '@/components/Header'
    import LoginModal from '@/components/LoginModal'
    import 'quill/dist/quill.snow.css'
    import {quillEditor} from 'vue-quill-editor'

    export default {
        name: "Create",
        components: {
            'v-header': Header,
            'v-editor': quillEditor,
            'v-modal': LoginModal
        },
        data() {
            return {
                form: {
                    title: '',
                    column_id: 7,
                    tag: '',
                    content: '',
                },
                columns: [
                    {id: 1, name: 'Android'},
                    {id: 2, name: '前端'},
                    {id: 3, name: 'ios'},
                    {id: 4, name: '产品'},
                    {id: 5, name: '设计'},
                    {id: 6, name: '工具资源'},
                    {id: 7, name: '阅读'},
                    {id: 8, name: '后端'},
                    {id: 9, name: '人工智能'},
                    {id: 10, name: '运维'}
                ],
                option: {
                    theme: 'snow',
                    modules: {
                        toolbar: [
                            ['bold', 'italic'],
                            ['blockquote', 'code-block'],
                            [{'header': 1}, {'header': 2}],
                            [{'list': 'ordered'}, {'list': 'bullet'}],
                            [{'indent': '-1'}, {'indent': '+1'}],
                            [{'header': [1, 2, 3, 4, 5, 6, false]}],
                            [{'color': []}, {'background': []}],
                            [{'align': []}],
                            ['clean'],
                            ['link', 'image']
                        ]
                    },
                }
            }
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault();
                let data = this.form;
                this.$http.post('/apis/post/store', data)
                    .then(res => {
                        if (res.status == 200) {
                            this.$router.push({path: `/post/detail/${res.data.post}`})
                        }
                    })
            },
            onReset(evt) {
                evt.preventDefault();
            },
            chooseColumn(item) {
                this.form.column_id = item.id;
            },
            validata() {
                if (this.form.title.length > 50) {
                    console.error('title 过长');
                }
            },
            editorChange({html}) {
                this.form.content = html
            }
        },

    }
</script>

<style lang="less" scoped>

    .post-form [class$='-row']:not(.column-row) {
        margin-bottom: 1.4rem;
    }

    .form-control {
        border-radius: 0;
        font-size: .875rem;
    }

    .form-control:focus {
        box-shadow: none;
    }

    .column-list {
        font-size: 0;
        .item {
            user-select: none;
            display: inline-block;
            font-size: .75rem;
            padding: .2rem .7rem;
            border: solid 1px #ced4da;
            cursor: pointer;
            margin-right: .5rem;
            margin-bottom: .5rem;
        }
        .item:hover, .item.active {
            border-color: rgba(0, 127, 255, .15);
            background-color: rgba(0, 127, 255, .05);
            color: #007fff;
        }
    }
</style>
