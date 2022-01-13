import { RouteRecordRaw } from 'vue-router';

import children from '@/routers/modules/children';
import { module01 } from './modules/module01';
import { module02 } from './modules/module02';

// import * as routerList from './modules';

// export const firstRoute: any = Object.keys(routerList).map((key: string) => (routerList as any)[key]);

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/pages/index.vue'),
    children: [...module01, ...module02, ...children],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/widget/login.vue'),
  },
  // {
  //   path: '/',
  //   name: 'index',
  //   component: () => import('@/pages/index.vue'),
  //   children: [
  //     ...children, //
  //   ],
  // },
];
export default routes;
