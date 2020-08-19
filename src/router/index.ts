import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Cookies from 'js-cookie';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/qmdld',
    name: 'qmdld',
    component: () => import('../views/qmdld/index.vue'),
    beforeEnter(to, from , next) {
      const isLogin: string = Cookies.get('isLogin');
      if (isLogin && isLogin === 'true') {
        next();
      } else {
        alert('请登录后再查看');
      }
    },
  },
  {
    path: '/aiding',
    name: 'AiDing',
    component: () => import('../views/ai-ding/index.vue'),
    meta: {
      title: '猿人学 Python - 反反爬虫练习平台 V0.1',
    },
  },
  {
    path: '/jubao',
    name: 'JuBao',
    component: () => import('../views/ju-bao/index.vue'),
    meta: {
      title: '安澜网 - 稽查中心',
    },
  },
  {
    path: '/jubao/view',
    component: () => import('../views/ju-bao/children/index.vue'),
    children: [
      {
        path: '/jubao/view/20200730',
        component: () => import('../views/ju-bao/children/20200730.vue'),
      },
      {
        path: '/jubao/view/20200803',
        component: () => import('../views/ju-bao/children/20200803.vue'),
      },
      {
        path: '/jubao/view/20200810',
        component: () => import('../views/ju-bao/children/20200810.vue'),
      },
      {
        path: '/jubao/view/20200813',
        component: () => import('../views/ju-bao/children/20200813.vue'),
      },
      {
        path: '/jubao/view/20200817',
        component: () => import('../views/ju-bao/children/20200817.vue'),
      },
      {
        path: '/jubao/view/20200824',
        component: () => import('../views/ju-bao/children/20200824.vue'),
      },
    ],
  },
  {
    path: '/404',
    name: '404',
    component: () => import('../views/404.vue'),
  },
  {
    path: '*',
    redirect: '/404',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title || '安澜网';
  next();
});
