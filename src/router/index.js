const routers = [
    {
        path: '/',
        meta: {title: "登录-注册"},
        name: 'LoginRepwd',
        component: (resolve) => require(['../views/index/LoginRePwd.vue'], resolve)
    }
];
export default routers;
