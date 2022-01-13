import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

/**
 * title拦截器
 */
function title(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) {
  if (to.meta?.title) {
    document.title = (to.meta.title as string) || (to.name as string) || '';
  }
  next();
}

export default title;
