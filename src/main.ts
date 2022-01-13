import '@/utils/polyfill'; // 初始化兼容方案
import { createApp } from 'vue';
import App from './App.vue';
import router from './routers/index';
import '@/assets/common.scss';
import '@/assets/reset.scss';
import '@/assets/element-override.scss';
console.log('router', router);

import initDirectives from './directives/index';
import './utils/inject';
// import store, { key } from './store/store';
import store from './store/store';
import initGlobalComponents from './components/global';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import locale from 'element-plus/lib/locale/lang/zh-cn';

(() => {
  const app = createApp(App);
  // 初始化全局指令
  initDirectives(app);
  // 初始化全局组件
  initGlobalComponents(app);
  // 初始化vuex
  app.use(store);
  // app.use(store, key);
  // 初始化路由
  app.use(router);
  // 初始化element UI, 切换成中文
  app.use(ElementPlus, { locale });
  app.mount('#app');
})();
