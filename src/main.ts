import Vue from 'vue';
import App from 'src/App.vue';
import router from 'src/router/index';
import store from 'src/store/index';
import 'src/plugins/element.ts';
import 'src/less/base.less';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
