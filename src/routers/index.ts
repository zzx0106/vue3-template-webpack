// 需要使用*写法，vue-router不提供默认导出
import * as VueRouter from 'vue-router';

// import permission from '@/routers/middleware/permission';
// import http from '@/directives/permission';

import permission from './middleware/permission';
import title from './middleware/title';
import routes from './routes';

interface IRouter extends VueRouter.Router {
  /** 拦截器 */
  interceptor(callback: VueRouter.NavigationGuardWithThis<IRouter>): void;
}
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, left: 0 };
    }
  },
}) as IRouter;
// 路由拦截器
router.interceptor = function (callback = (to, from, next) => next()) {
  (this as IRouter).beforeEach((to, from, next) => {
    try {
      callback.call(this as IRouter, to, from, next);
    } catch (error) {
      console.error('interceptor error', error);
      next();
    }
  });
};

router.interceptor(permission);
router.interceptor(title);
export default router;
