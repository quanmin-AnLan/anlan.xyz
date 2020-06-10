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
