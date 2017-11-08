<style scoped lang="less">


</style>
<template>
    <!--等待提交组件-->
    <div class="ls-submit-btn">
        <iButton type="primary" @click="beginSubmit" :loading="loading" :disabled="disabled">{{buttonText}}</iButton>
    </div>

</template>
<script>
    import iButton from 'iview/src/components/Button'

    export default {
        name: 'ls-submit-btn',
        components: {iButton},
        /*props参数中：  submitUrl:发送表单数据的Url  submitMethod:请求方式    submitData：要发送的数据
         *   btnText：表单提交按钮上的文字     beforSubmit:发送请求前的执行函数(一般用于验证表单)
         *     */
        props: ['submitUrl', 'submitMethod', 'submitData', 'btnText', 'submitFormRef', 'beforeSubmit'],
        data() {
            return {
                buttonText: '提交',
                loading: false,
                disabled: false
            }
        },
        mounted: function () {
            this.buttonText = this.btnText || this.buttonText;
        },
        methods: {
            beginSubmit: function () {

            }
        }
    }
</script>
