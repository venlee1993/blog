<template>
    <div class="msg-input">
        <div class="form-area">
            <slot name="avator"></slot>
            <div class="text">
                <b-form-textarea v-model="message" placeholder="输入留言..." :min-rows="1" ref="textarea"></b-form-textarea>
            </div>
            <div class="submit">
                <b-button variant="primary" @click="Msgsubmit">提交</b-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MsgInput",
        data() {
            return {
                message: ''
            }
        },
        props: {
            params: {
                type: Object
            }
        },
        methods: {
            Msgsubmit() {
                let data = this.params;
                data.content = this.message
                this.$emit('publish', data);
            }
        }
    }
</script>

<style lang="less" scoped>
    .msg-input {
        background-color: #fafbfc;
        padding: 1rem;
        .form-area {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            .avator {
                margin-right: .875rem;
            }
            .text {
                flex: 1;
                textarea {
                    font-size: 0.875rem;
                    resize: none;
                }
            }
            .submit {
                align-self: flex-end;
                min-width: 3.375rem;
                margin-left: .875rem;
                button {
                    font-size: .875rem;
                }
            }
        }
    }
</style>
