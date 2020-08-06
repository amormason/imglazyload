import Vue from 'vue';
import imgLazy from './directive/imgLazy';
import App from './App.vue';
import router from './router';
import store from './store';

// 如果是全局引用指令
Vue.directive('imgLazy', imgLazy);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
