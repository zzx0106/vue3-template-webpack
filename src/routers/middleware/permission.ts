import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

/**
 * 权限拦截器
 */
function permission(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) {
  // TODO
  next();
}

export default permission;
