import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/aiding',
    name: 'AiDing',
    component: () => import('../views/ai-ding/index.vue'),
    meta: {
      title: '猿人学 Python - 反反爬虫练习平台 V0.1',
    },
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
