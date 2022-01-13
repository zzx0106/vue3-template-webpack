import { App } from 'vue';

// 获取当前目录下的所有自定义指令
const modules = require.context('./', true, /\.ts$/);
export default function initDirectives(app: App) {
  const ids = modules.keys().filter((id) => id !== './index.ts'); // 过滤掉当前的index.ts，防止无线调用
  ids.forEach((id) => {
    const module = modules(id);
    const callback = module.default;
    console.log('加载全局directive', id);
    callback(app);
  });
}
