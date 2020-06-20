import Login from './views/Login.vue'
import Register from './views/Register.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Table from './views/nav1/Table.vue'
import Form from './views/nav1/Form.vue'
import user from './views/nav1/user.vue'
import Page6 from './views/nav3/Page6.vue'
import echarts from './views/charts/echarts.vue'
import CourseType from './views/course/courseType'

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/register',
        component: Register,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    {
        path: '/',
        component: Home,
        name: '首页',
        leaf: true,
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/echarts', component: echarts, name: '首页' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '课程管理',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/CourseType', component: CourseType, name: '课程类型' },
            { path: '/main', component: Main, name: '课程信息' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '系统管理',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/main', component: Main, name: '主页', hidden: true },
            { path: '/table', component: Table, name: 'Table' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '系统管理',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/main', component: Main, name: '主页', hidden: true },
            { path: '/table', component: Table, name: 'Table' }
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;