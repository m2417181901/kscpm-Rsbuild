import { createRouter, createWebHashHistory } from 'vue-router';
import Layout from '../views/Layout.vue';

const routes = [
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: '/',
                name: 'index',
                component: import('@/views/Index/index.vue'),
            },
        ],
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        redirect: '/',
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
