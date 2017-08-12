import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Page1 from './views/nav1/Page1.vue'
import Page2 from './views/nav2/Page2.vue'
import Page3 from './views/nav3/Page3.vue'

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    //{ path: '/main', component: Main },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'el-icon-date',//图标样式class
        leaf: true,//只有一个节点
        children: [
            // { path: '/main', component: Main, name: '主页', hidden: true },
            { path: '/page1', component: Page1, name: '维护计划' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'el-icon-setting',
        leaf: true,//只有一个节点
        children: [
            { path: '/page2', component: Page2, name: '维护项' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'el-icon-search',
        leaf: true,//只有一个节点
        children: [
            { path: '/page3', component: Page3, name: '维护历史' }
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;