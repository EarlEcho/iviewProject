<template>
    <div class="hello">
        <Tabs value="login">
            <TabPane label="登录" name="login">
                <Form ref="submitLoginForm" :model="submitLoginForm" :rules="submitLoginRule"
                      class="login-form-box">
                    <FormItem prop="userName">
                        <Input type="text" v-model="submitLoginForm.userName" placeholder="用户名"></Input>
                    </FormItem>
                    <FormItem prop="pwd">
                        <Input type="password" v-model="submitLoginForm.pwd" placeholder="密码"></Input>
                    </FormItem>
                    <FormItem>
                        <Button type="primary" @click="handleSubmit('submitLoginForm')">登录</Button>
                    </FormItem>
                    <div class="other-action">
                        <router-link to="/find-pwd">忘记密码</router-link>
                    </div>
                </Form>
            </TabPane>
            <TabPane label="注册" name="siginIn">
                <Form ref="submitSignForm" :model="submitSignForm" :rules="submitSignRule" class="sign-form-box">
                    <FormItem prop="userName">
                        <Input type="text" v-model="submitSignForm.userName" placeholder="用户名"></Input>
                    </FormItem>
                    <FormItem prop="mobile">
                        <Input type="text" v-model="submitSignForm.mobile" placeholder="手机号"></Input>
                    </FormItem>
                    <FormItem prop="verfiyCode">
                        <Input type="text" v-model="submitSignForm.verfiyCode" placeholder="验证码">
                        <Button slot="append">获取验证码</Button>

                        <!--<ls-msg-send-btn code-url="/" :mobile="submitSignForm.verfiyCode"></ls-msg-send-btn>-->

                        </Input>
                    </FormItem>
                    <FormItem prop="pwd">
                        <Input type="password" v-model="submitSignForm.pwd" placeholder="密码"></Input>
                    </FormItem>
                    <FormItem>
                        <Button type="primary" @click="handleSubmit('submitSignForm')">立即注册</Button>
                    </FormItem>
                </Form>
            </TabPane>
        </Tabs>
    </div>
</template>

<script>
    import {Tabs, TabPane, Form, FormItem, Input, Button} from 'iview';

    export default {
        name: 'HelloWorld',
        components: {Tabs, TabPane, Form, FormItem, Input, Button},
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
        },
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
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
