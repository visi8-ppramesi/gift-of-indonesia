import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export const routes = [
    {
        path: '',
        component: () => import('../pages/Welcome'),
        name: 'welcome',
        meta: { title: 'Welcome', noCache: false }
    },
    {
        path: '/sight',
        component: () => import('../pages/Sight'),
        name: 'sight',
        meta: { title: 'Sight of Indonesia', noCache: false }
    },
    {
        path: '/sound',
        component: () => import('../pages/Sound'),
        name: 'sound',
        meta: { title: 'Sound of Indonesia', noCache: false }
    },
    {
        path: '/taste',
        component: () => import('../pages/Taste'),
        name: 'taste',
        meta: { title: 'Taste of Indonesia', noCache: false }
    },
    {
        path: '/order',
        component: () => import('../pages/Order'),
        name: 'order',
        meta: { title: 'Order Food', noCache: false }
    },
    {
        path: '/recipe/:id',
        component: () => import('../pages/Recipe'),
        name: 'recipe',
        meta: { title: 'Food Recipe', noCache: false }
    },
    {
        path: '/scene/:id',
        component: () => import('../pages/SceneViewer'),
        name: 'sceneViewer',
        meta: { title: 'Scene', noCache: false }
    },
    {
        path: '/id-viewer',
        component: () => import('../pages/IdentifierViewer'),
        name: 'IdentifierViewer',
        meta: { title: 'Id Viewer', noCache: false }
    },
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: routes,
});

const router = createRouter();

export default router