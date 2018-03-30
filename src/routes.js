import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Page1 from './views/nav1/Page1.vue'
import Page2 from './views/nav2/Page2.vue'
import Page3 from './views/nav3/Page3.vue'
import Page4 from './views/nav4/Page4.vue'
import Page5 from './views/nav4/Page5.vue'
import Page6 from './views/nav4/backToTop.vue'
import echarts from './views/charts/echarts.vue'
import threejs from './views/3d/threejs.vue'
import vedio from './views/3d/vedio.vue'
import babylonjs from './views/3d/babylonjs.vue'

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
        iconCls: 'fa fa-cog',//图标样式class
        leaf: true,//只有一个节点
        children: [
            // { path: '/main', component: Main, name: '主页', hidden: true },
            { path: '/page1', component: Page1, name: '维护项' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-calendar-check-o',
        leaf: true,//只有一个节点
        children: [
            { path: '/page2', component: Page2, name: '维护计划' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-search',
        leaf: true,//只有一个节点
        children: [
            {
                path: '/page3',
                component: Page3,
                name: '维护历史',
                meta: {
                    title: "维护历史"
                }
            }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '综合实例',
        iconCls: 'fa fa-star',
        leaf: false,//不只一个节点
        hidden: false,
        children: [
            {
                path: '/page4',
                component: Page4,
                name: 'seed',
                meta: {
                    title: "列表"
                }
            },
            {
                path: '/page5',
                component: Page5,
                name: 'table',
                meta: {
                    title: "列表"
                }
            },
            {
                path: '/page6',
                component: Page6,
                name: 'backToTop'
            }
        ]
    },
    {
        path: '/',
        component: Home,
        name: 'Charts',
        iconCls: 'fa fa-bar-chart',
        children: [
            { path: '/echarts', component: echarts, name: 'echarts' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '3d',
        iconCls: 'fa fa-diamond',
        children: [
            { path: '/threejs', component: threejs, name: 'threejs' },
            { path: '/babylonjs', component: babylonjs, name: 'babylonjs' }
            // { path: '/vedio', component: vedio, name: 'vedio' }
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;