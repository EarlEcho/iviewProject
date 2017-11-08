<template>
    <div class="login-wrapper">
        <div class="login-sign-box">
            <Tabs value="login">
                <TabPane label="登录" name="login">
                    <iForm ref="submitLoginForm" :model="submitLoginForm" :rules="submitLoginRule"
                           class="login-form-box">
                        <FormItem prop="userName">
                            <iInput type="text" v-model="submitLoginForm.userName" placeholder="用户名"></iInput>
                        </FormItem>
                        <FormItem prop="pwd">
                            <iInput type="password" v-model="submitLoginForm.pwd" placeholder="密码"></iInput>
                        </FormItem>
                        <FormItem>
                            <iButton type="primary" @click="handleSubmit('submitLoginForm')">登录</iButton>
                        </FormItem>
                        <div class="other-action">
                            <router-link to="/find-pwd">忘记密码</router-link>
                        </div>
                    </iForm>
                </TabPane>
                <TabPane label="注册" name="siginIn">
                    <iForm ref="submitSignForm" :model="submitSignForm" :rules="submitSignRule" class="sign-form-box">
                        <FormItem prop="userName">
                            <iInput type="text" v-model="submitSignForm.userName" placeholder="用户名"></iInput>
                        </FormItem>
                        <FormItem prop="mobile">
                            <iInput type="text" v-model="submitSignForm.mobile" placeholder="手机号"></iInput>
                        </FormItem>
                        <FormItem prop="verfiyCode">
                            <iInput type="text" v-model="submitSignForm.verfiyCode" placeholder="验证码">
                            </iInput>
                            <ls-msg-send-btn></ls-msg-send-btn>
                        </FormItem>
                        <FormItem prop="pwd">
                            <iInput type="password" v-model="submitSignForm.pwd" placeholder="密码"></iInput>
                        </FormItem>
                        <FormItem>
                            <iButton type="primary" @click="handleSubmit('submitSignForm')">立即注册</iButton>
                        </FormItem>
                    </iForm>
                </TabPane>
            </Tabs>
        </div>
        <div class="index-copyright-info">
            <p>版权信息 </p>
        </div>
    </div>
</template>
<script>
    import {Tabs, TabPane, FormItem, Form, Input, Button} from 'iview';
    import LsMsgSendBtn from '@/components/MsgSendBtn'

    /*会与原生HTML标签冲突的组件*/
    import iButton from 'iview/src/components/Button';
    import iForm from 'iview/src/components/Form';
    import iInput from 'iview/src/components/Input';


    export default {
        components: {
            Tabs, TabPane, FormItem, LsMsgSendBtn, iForm, iInput, iButton
        },
        data() {
            return {
                submitLoginForm: {
                    userName: '',
                    pwd: ''
                },
                submitSignForm: {
                    userName: '',
                    mobile: '',
                    verfiyCode: '',
                    pwd: ''
                },
                submitLoginRule: {
                    userName: [
                        {required: true, message: '请填写用户名', trigger: 'blur'}
                    ],
                    pwd: [
                        {required: true, message: '请填写密码', trigger: 'blur'},
                        {type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur'}
                    ]
                },
                submitSignRule: {
                    userName: [
                        {required: true, message: '请填写用户名', trigger: 'blur'}
                    ],
                    mobile: [
                        {required: true, message: '请填写手机号', trigger: 'blur'}
                    ],
                    verfiyCode: [
                        {required: true, message: '请填写验证码', trigger: 'blur'}
                    ],
                    pwd: [
                        {required: true, message: '请填写密码', trigger: 'blur'},
                        {type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur'}
                    ]
                }
            }
        }
        ,
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('提交成功!');
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                })
            }
            ,
            fetchSmsCode: function () {

            }
        }
    }
</script>
<style scoped lang="less">
    .login-wrapper {
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
        position: fixed;
        display: block;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        text-align: center;
        background-color: #fafafa;
        &:before {
            content: '';
            display: inline-block;
            height: 100%;
            vertical-align: middle;
            margin-right: -0.25em;
        }
        .login-sign-box {
            border: solid 1px #cfcbcb;
            background-color: rgba(255, 255, 255, 0.5);
            border-radius: 6px;
            padding: 20px;
            height: 470px;
            display: inline-block;
            vertical-align: middle;
            width: 350px;
            .ivu-btn-primary {
                height: 38px !important;
                font-size: 15px !important;
                letter-spacing: 1px;
            }
        }
        .index-copyright-info {
            display: block;
            border: solid 1px #cfcbcb;

        }
        .login-form-box, .sign-form-box {
            padding: 20px 15px 20px 15px;
            .ivu-btn-primary {
                width: 100%;
            }
        }
        .ivu-input-group {
            font-size: 16px;
        }
        .other-action {
            text-align: left;
        }
        .sign-form-box {

            .ivu-form-item {
                margin-bottom: 20px;
            }
        }
    }
</style>
