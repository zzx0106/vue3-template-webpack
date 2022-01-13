// 动态加载全局组件
import { App } from 'vue';

// 获取当前目录下的所有自定义指令
const componentsContext = require.context('./', true, /\.vue$/);
export default function initGlobalComponents(app: App) {
  componentsContext.keys().forEach((component) => {
    try {
      console.log('加载全局component', component);
      const componentConfig = componentsContext(component);
      const [target, $1] = /([^\/]*)\.vue/g.exec(component) || [];
      if (!$1) return console.warn(`${component}组件不符合规范，无法注册全局`);
      /**
       * 兼容 import export 和 require module.export 两种规范
       * c,t,r,l
       */
      const ctrl = componentConfig.default || componentConfig;
      app.component(ctrl.name || $1, ctrl);
    } catch (error) {
      console.warn('全局组件注册报错', error);
    }
  });
  return app;
}
