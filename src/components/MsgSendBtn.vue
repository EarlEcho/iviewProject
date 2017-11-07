<template>
    <div class="ls-msg-send-btn" slot="append">
        <Button  @click="fetchSmsCode">获取验证码</Button>
    </div>
</template>

<script>
    import {Button} from 'iview'
    export default {
        components: {Button},
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
