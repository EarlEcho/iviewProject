<template>
    <div class="ls-msg-send-btn" slot="append">
        <iButton @click="fetchSmsCode">获取验证码</iButton>
    </div>
</template>

<script>
    import iButton from 'iview/src/components/Button'
    export default {
        components: {iButton},
        name: 'ls-msg-send-btn',
        props: [],
        data() {
            return {}
        },
        methods: {
            fetchSmsCode: function () {

            }
        }
    }
</script>

<style scoped lang="less">

</style>
