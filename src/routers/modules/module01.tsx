import { KeepAlive, resolveDynamicComponent } from 'vue';
import { RouteRecordRaw } from 'vue-router';

export const module01: RouteRecordRaw[] = [
  {
    name: 'module01',
    path: '/module01',
    meta: { cache: false },
    // component: () => import('@/components/common/c-view-second.vue'),
    component: {
      render() {
        const { cache } = this.$route.meta;
        return (
          <router-view>
            {(e: any) => {
              return [
                <KeepAlive>
                  {cache && resolveDynamicComponent(e.Component)}
                  {/* <component :is="e.Component"/> */}
                </KeepAlive>,
                !cache && resolveDynamicComponent(e.Component),
              ];
            }}
          </router-view>
        );
      },
    },
    children: [
      {
        name: 'demo01',
        path: '/module01/demo01',
        meta: { cache: true },
        component: () => import('@/pages/module01/demo01.vue'),
      },
    ],
  },
];

// export const children: RouteRecordRaw[] = [
//   { }
// ]
