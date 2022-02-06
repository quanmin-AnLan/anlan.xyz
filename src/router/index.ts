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
    path: '/question',
    name: 'Question',
    component: () => import('../views/question.vue'),
  },
  {
    path: '/lisa',
    name: 'Lisa',
    component: () => import('../views/lisa/lisa.vue'),
    beforeEnter(to, from, next) {
      const isUserLogin: string = Cookies.get('isUserLogin');
      if (!!isUserLogin) {
        next();
      } else {
        alert('请输入用户标识');
      }
    },
  },
  {
    path: '/lisa/money',
    name: 'LisaMoney',
    component: () => import('../views/lisa/children/money.vue'),
  },
  {
    path: '/anlan',
    name: 'Anlan',
    component: () => import('../views/anlan/index.vue'),
    meta: {
      title: '安澜网 - 安澜专栏',
    },
  },
  {
    path: '/weiwei',
    name: 'Weiwei',
    component: () => import('../views/weiwei/weiwei.vue'),
    beforeEnter(to, from, next) {
      const isUserLogin: string = Cookies.get('isUserLogin');
      if (!!isUserLogin) {
        next();
      } else {
        alert('请输入用户标识');
      }
    },
  },
  {
    path: '/code',
    name: 'Code',
    component: () => import('../views/code/index.vue'),
    beforeEnter(to, from, next) {
      const isUserLogin: string = Cookies.get('isUserLogin');
      if (!!isUserLogin) {
        next();
      } else {
        alert('请输入用户标识');
      }
    },
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('../views/userConfig.vue'),
    beforeEnter(to, from, next) {
      const isUserLogin: string = Cookies.get('isUserLogin');
      if (!!isUserLogin) {
        next({ path: '/' + isUserLogin });
      } else {
        alert('请输入用户标识');
      }
    },
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
    path: '/linli',
    name: 'Linli',
    component: () => import('../views/qmdld/linli.vue'),
    meta: {
      title: '安澜网 - 琳璃专栏',
    },
  },
  {
    path: '/aiding',
    name: 'AiDing',
    component: () => import('../views/ai-ding/index.vue'),
    redirect: '/aiding/spiderTest',
    meta: {
      title: '猿人学 Python - 反反爬虫练习平台 V0.1',
    },
    children: [
      {
        path: '/aiding/spiderTest',
        component: () => import('../views/ai-ding/children/spiderTest.vue'),
      },
      {
        path: '/aiding/questionCenter',
        component: () => import('../views/ai-ding/children/questionCenter.vue'),
      },
    ],
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
    path: '/39sort',
    name: 'Sort',
    component: () => import('../views/sort.vue'),
  },
  {
    path: '/sort',
    name: 'Sort',
    component: () => import('../views/sort/index.vue'),
  },
  {
    path: '/sort/view',
    component: () => import('../views/sort/children/index.vue'),
    children: [
      {
        path: '/sort/view/1-59-sky',
        component: () => import('../views/sort/children/1-59-sky.vue'),
      },
      {
        path: '/sort/view/1-39-sky',
        component: () => import('../views/sort/children/1-39-sky.vue'),
      },
      {
        path: '/sort/view/1-strong',
        component: () => import('../views/sort/children/1-strong.vue'),
      },
      {
        path: '/sort/view/2-39-sky',
        component: () => import('../views/sort/children/2-39-sky.vue'),
      },
      {
        path: '/sort/view/2-59-sky',
        component: () => import('../views/sort/children/2-59-sky.vue'),
      },
    ],
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
      {
        path: '/jubao/view/20200831',
        component: () => import('../views/ju-bao/children/20200831.vue'),
      },
      {
        path: '/jubao/view/20200907',
        component: () => import('../views/ju-bao/children/20200907.vue'),
      },
      {
        path: '/jubao/view/20200914',
        component: () => import('../views/ju-bao/children/20200914.vue'),
      },
      {
        path: '/jubao/view/20200921',
        component: () => import('../views/ju-bao/children/20200921.vue'),
      },
      {
        path: '/jubao/view/20200928',
        component: () => import('../views/ju-bao/children/20200928.vue'),
      },
      {
        path: '/jubao/view/20201006',
        component: () => import('../views/ju-bao/children/20201006.vue'),
      },
      {
        path: '/jubao/view/20201012',
        component: () => import('../views/ju-bao/children/20201012.vue'),
      },
      {
        path: '/jubao/view/20201019',
        component: () => import('../views/ju-bao/children/20201019.vue'),
      },
      {
        path: '/jubao/view/20201026',
        component: () => import('../views/ju-bao/children/20201026.vue'),
      },
      {
        path: '/jubao/view/20201102',
        component: () => import('../views/ju-bao/children/20201102.vue'),
      },
      {
        path: '/jubao/view/20201109',
        component: () => import('../views/ju-bao/children/20201109.vue'),
      },
      {
        path: '/jubao/view/20201116',
        component: () => import('../views/ju-bao/children/20201116.vue'),
      },
      {
        path: '/jubao/view/20201123',
        component: () => import('../views/ju-bao/children/20201123.vue'),
      },
      {
        path: '/jubao/view/20201130',
        component: () => import('../views/ju-bao/children/20201130.vue'),
      },
      {
        path: '/jubao/view/20201207',
        component: () => import('../views/ju-bao/children/20201207.vue'),
      },
      {
        path: '/jubao/view/20201214',
        component: () => import('../views/ju-bao/children/20201214.vue'),
      },
      {
        path: '/jubao/view/20201221',
        component: () => import('../views/ju-bao/children/20201221.vue'),
      },
      {
        path: '/jubao/view/20201228',
        component: () => import('../views/ju-bao/children/20201228.vue'),
      },
      {
        path: '/jubao/view/20210104',
        component: () => import('../views/ju-bao/children/20210104.vue'),
      },
      {
        path: '/jubao/view/20210111',
        component: () => import('../views/ju-bao/children/20210111.vue'),
      },
      {
        path: '/jubao/view/20210118',
        component: () => import('../views/ju-bao/children/20210118.vue'),
      },
      {
        path: '/jubao/view/20210125',
        component: () => import('../views/ju-bao/children/20210125.vue'),
      },
      {
        path: '/jubao/view/20210201',
        component: () => import('../views/ju-bao/children/20210201.vue'),
      },
      {
        path: '/jubao/view/20210208',
        component: () => import('../views/ju-bao/children/20210208.vue'),
      },
      {
        path: '/jubao/view/20210215',
        component: () => import('../views/ju-bao/children/20210215.vue'),
      },
      {
        path: '/jubao/view/20210222',
        component: () => import('../views/ju-bao/children/20210222.vue'),
      },
      {
        path: '/jubao/view/20210301',
        component: () => import('../views/ju-bao/children/20210301.vue'),
      },
      {
        path: '/jubao/view/20210308',
        component: () => import('../views/ju-bao/children/20210308.vue'),
      },
      {
        path: '/jubao/view/20210315',
        component: () => import('../views/ju-bao/children/20210315.vue'),
      },
      {
        path: '/jubao/view/20210322',
        component: () => import('../views/ju-bao/children/20210322.vue'),
      },
      {
        path: '/jubao/view/20210329',
        component: () => import('../views/ju-bao/children/20210329.vue'),
      },
      {
        path: '/jubao/view/20210406',
        component: () => import('../views/ju-bao/children/20210406.vue'),
      },
      {
        path: '/jubao/view/20210412',
        component: () => import('../views/ju-bao/children/20210412.vue'),
      },
      {
        path: '/jubao/view/20210419',
        component: () => import('../views/ju-bao/children/20210419.vue'),
      },
      {
        path: '/jubao/view/20210426',
        component: () => import('../views/ju-bao/children/20210426.vue'),
      },
      {
        path: '/jubao/view/20210430',
        component: () => import('../views/ju-bao/children/20210430.vue'),
      },
      {
        path: '/jubao/view/20210506',
        component: () => import('../views/ju-bao/children/20210506.vue'),
      },
      {
        path: '/jubao/view/20210510',
        component: () => import('../views/ju-bao/children/20210510.vue'),
      },
      {
        path: '/jubao/view/20210517',
        component: () => import('../views/ju-bao/children/20210517.vue'),
      },
      {
        path: '/jubao/view/20210524',
        component: () => import('../views/ju-bao/children/20210524.vue'),
      },
      {
        path: '/jubao/view/20210531',
        component: () => import('../views/ju-bao/children/20210531.vue'),
      },
      {
        path: '/jubao/view/20210607',
        component: () => import('../views/ju-bao/children/20210607.vue'),
      },
      {
        path: '/jubao/view/20210615',
        component: () => import('../views/ju-bao/children/20210615.vue'),
      },
      {
        path: '/jubao/view/20210621',
        component: () => import('../views/ju-bao/children/20210621.vue'),
      },
      {
        path: '/jubao/view/20210628',
        component: () => import('../views/ju-bao/children/20210628.vue'),
      },
      {
        path: '/jubao/view/20210705',
        component: () => import('../views/ju-bao/children/20210705.vue'),
      },
      {
        path: '/jubao/view/20210712',
        component: () => import('../views/ju-bao/children/20210712.vue'),
      },
      {
        path: '/jubao/view/20210719',
        component: () => import('../views/ju-bao/children/20210719.vue'),
      },
      {
        path: '/jubao/view/20210726',
        component: () => import('../views/ju-bao/children/20210726.vue'),
      },
      {
        path: '/jubao/view/20210802',
        component: () => import('../views/ju-bao/children/20210802.vue'),
      },
      {
        path: '/jubao/view/20210809',
        component: () => import('../views/ju-bao/children/20210809.vue'),
      },
      {
        path: '/jubao/view/20210816',
        component: () => import('../views/ju-bao/children/20210816.vue'),
      },
      {
        path: '/jubao/view/20210823',
        component: () => import('../views/ju-bao/children/20210823.vue'),
      },
      {
        path: '/jubao/view/20210830',
        component: () => import('../views/ju-bao/children/20210830.vue'),
      },
      {
        path: '/jubao/view/20210906',
        component: () => import('../views/ju-bao/children/20210906.vue'),
      },
      {
        path: '/jubao/view/20210913',
        component: () => import('../views/ju-bao/children/20210913.vue'),
      },
      {
        path: '/jubao/view/20210922',
        component: () => import('../views/ju-bao/children/20210922.vue'),
      },
      {
        path: '/jubao/view/20210927',
        component: () => import('../views/ju-bao/children/20210927.vue'),
      },
      {
        path: '/jubao/view/20211008',
        component: () => import('../views/ju-bao/children/20211008.vue'),
      },
      {
        path: '/jubao/view/20211011',
        component: () => import('../views/ju-bao/children/20211011.vue'),
      },
      {
        path: '/jubao/view/20211018',
        component: () => import('../views/ju-bao/children/20211018.vue'),
      },
      {
        path: '/jubao/view/20211025',
        component: () => import('../views/ju-bao/children/20211025.vue'),
      },
      {
        path: '/jubao/view/20211101',
        component: () => import('../views/ju-bao/children/20211101.vue'),
      },
      {
        path: '/jubao/view/20211108',
        component: () => import('../views/ju-bao/children/20211108.vue'),
      },
      {
        path: '/jubao/view/20211115',
        component: () => import('../views/ju-bao/children/20211115.vue'),
      },
      {
        path: '/jubao/view/20211122',
        component: () => import('../views/ju-bao/children/20211122.vue'),
      },
      {
        path: '/jubao/view/20211129',
        component: () => import('../views/ju-bao/children/20211129.vue'),
      },
      {
        path: '/jubao/view/20211206',
        component: () => import('../views/ju-bao/children/20211206.vue'),
      },
      {
        path: '/jubao/view/20211213',
        component: () => import('../views/ju-bao/children/20211213.vue'),
      },
      {
        path: '/jubao/view/20211220',
        component: () => import('../views/ju-bao/children/20211220.vue'),
      },
      {
        path: '/jubao/view/20211227',
        component: () => import('../views/ju-bao/children/20211227.vue'),
      },
      {
        path: '/jubao/view/20220104',
        component: () => import('../views/ju-bao/children/20220104.vue'),
      },
      {
        path: '/jubao/view/20220110',
        component: () => import('../views/ju-bao/children/20220110.vue'),
      },
      {
        path: '/jubao/view/20220117',
        component: () => import('../views/ju-bao/children/20220117.vue'),
      },
      {
        path: '/jubao/view/20220124',
        component: () => import('../views/ju-bao/children/20220124.vue'),
      },
      {
        path: '/jubao/view/20220207',
        component: () => import('../views/ju-bao/children/20220207.vue'),
      },
      {
        path: '/jubao/view/20220214',
        component: () => import('../views/ju-bao/children/20220214.vue'),
      },
      {
        path: '/jubao/view/20220221',
        component: () => import('../views/ju-bao/children/20220221.vue'),
      },
      {
        path: '/jubao/view/20220228',
        component: () => import('../views/ju-bao/children/20220228.vue'),
      },
    ],
  },
  // {
  //   path: '/draw',
  //   name: 'Draw',
  //   component: () => import('../views/draw/index.vue'),
  //   meta: {
  //     title: '安澜网 - 抽奖中心',
  //   },
  // },
  // {
  //   path: '/draw/view',
  //   component: () => import('../views/draw/children/index.vue'),
  //   children: [
  //     {
  //       path: '/draw/view/1',
  //       component: () => import('../views/draw/children/1.vue'),
  //     },
  //     {
  //       path: '/draw/view/2',
  //       component: () => import('../views/draw/children/2.vue'),
  //     },
  //     {
  //       path: '/draw/view/3',
  //       component: () => import('../views/draw/children/3.vue'),
  //     },
  //     {
  //       path: '/draw/view/4',
  //       component: () => import('../views/draw/children/4.vue'),
  //     },
  //     {
  //       path: '/draw/view/5',
  //       component: () => import('../views/draw/children/5.vue'),
  //     },
  //   ],
  // },
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
  if (to.path.indexOf('/jubao/view/') !== -1) {
    window.document.title = '安澜查杀 - ' + window.location.pathname.slice(-8);
  }
  if (to.path.indexOf('/draw/view/') !== -1) {
    window.document.title = '安澜网 - 抽奖 - 第' + window.location.pathname.slice(-1) + '期';
  }
  next();
});
