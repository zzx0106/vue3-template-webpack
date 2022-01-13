/**
 * 权限控制
 */

import { App } from 'vue';
// import store from '@/store/store';

function checkPermission(el: Element, binding: any) {
  const { value = [] } = binding;
  // const pms = store.getters && store.getters.get_pms;
  if (value && value instanceof Array) {
    if (value.length > 0) {
      setTimeout(() => {
        // const hasPermission = value.some((role) => !!pms[role]);
        // if (!hasPermission) {
        //   el.parentNode && el.parentNode.removeChild(el);
        // }
      }, 0);
    }
  } else {
    throw new Error(`need pms! Like v-pms="['aabbcc','ccddee']"`);
  }
}
export default function permission(app: App) {
  app.directive('pms', {
    mounted(el, binding, vnode) {
      // v2 -> v3 : https://v3.cn.vuejs.org/guide/migration/custom-directives.html#边界情况-访问组件实例
      binding.instance?.$nextTick(() => checkPermission(el, binding));
      // vnode.context.$nextTick(() => checkPermission(el, binding));
    },
    updated(el, binding, vnode) {
      binding.instance?.$nextTick(() => checkPermission(el, binding));
      // vnode.context.$nextTick(() => checkPermission(el, binding));
    },
  });
}
