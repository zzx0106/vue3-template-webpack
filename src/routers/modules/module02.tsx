import { RouteRecordRaw } from 'vue-router';

export const module02: RouteRecordRaw[] = [
  {
    name: 'demo04',
    path: '/module02/demo04',
    meta: { cache: false },
    component: () => import('@/pages/module02/demo04.vue'),
  },
];
