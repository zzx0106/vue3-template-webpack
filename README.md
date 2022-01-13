问题总结
VueRouter： 1.错误：Uncaught SyntaxError: The requested module '/node_modules/.vite/vue-router.js?v=' does not provide an export named 'default'
解决方案
1）先检查 vue-router 是不是 4x 版本，如果不是先升级
https://stackoverflow.com/questions/66971106/vite-the-requested-module-vue-router
2）使用 import \* as vueRouter from 'vue-router'; 或者 import {createRouter} from 'vue-router';
因为 vue 路由器不提供默认导出：

TODO
baseComponent 封装
因为 setup 无法使用 mixin，所以可以采取 useXXX 方案替代
该方法拥有功能如下，通用 msgbox，通用 toast，重写方法使其 promise 不会返回 catch，并且支持 await
keep-alive 路由实现

window:
ctrl + shift + p
mac:
command + shift + p
输入：
Show Recommended Extensions

安装所有依赖
