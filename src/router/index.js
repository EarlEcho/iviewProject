import Vue from 'vue'
import Router from 'vue-router'


//登录
const LoginRepwd = () => import('@/views/index/LoginRepwd')
//首页
const HomePage = () => import('@/views/index/Homepage')

Vue.use(Router)

const router = new Router({

    routes: [
        {
            path: '/',
            meta: {title: "登录-注册"},
            name: 'LoginRepwd',
            component: LoginRepwd
        }
    ]

})

router.beforeEach((to, from, next) => {
    if (to.meta.title) {//如果设置标题，拦截后设置标题
        document.title = to.meta.title
    }
    next()
})

export default router
