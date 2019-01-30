import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/post/Index'
import Detail from '@/views/post/Detail'
import Create from '@/views/post/Create'
import Profile from '@/views/user/Profile'
import Edit from '@/views/user/Edit'

Vue.use(Router)

export default new Router({
    mode: 'history',
    linkActiveClass: 'active',
    routes: [
        {
            path: '/',
            component: Index,
        },
        {
            path: '/post/detail/:id',
            component: Detail
        },
        {
            path: '/post/create',
            component: Create
        },
        {
            path: '/user/profile',
            component: Profile
        },
        {
            path: '/user/edit',
            component: Edit
        },
    ]
})
