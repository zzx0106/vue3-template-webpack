import { defineComponent } from '@vue/runtime-core';
import { RouteRecordRaw } from 'vue-router';
import { h, resolveComponent, resolveDynamicComponent, KeepAlive } from 'vue';
const children: RouteRecordRaw[] = [
  {
    path: '/children',
    name: 'children',
    component: {
      render() {
        const { cache } = this.$route.meta;
        return (
          <router-view>
            {(e: any) => {
              return (
                <>
                  <KeepAlive>
                    {cache && resolveDynamicComponent(e.Component)}
                    {/* <component :is="e.Component"/> */}
                  </KeepAlive>
                  {!cache && resolveDynamicComponent(e.Component)}
                </>
              );
            }}
          </router-view>
        );
      },
    },
    // component: defineComponent({
    //   render() {
    //     const { cache } = this.$route.meta;
    //     console.log('cache', cache);

    //     return (
    //       <router-view>
    //         {(e: any) => {
    //           console.log('e', e);
    //           return (
    //             <>
    //               <KeepAlive>
    //                 {cache && resolveDynamicComponent(e.Component)}
    //                 {/* <component is={e.Component} /> */}
    //               </KeepAlive>
    //               {!cache && resolveDynamicComponent(e.Component)}
    //             </>
    //           );
    //         }}
    //       </router-view>
    //     );
    //   },
    //   // setup(props, { slots }) {
    //   //   console.log('====================================');
    //   //   console.log('slots', props);
    //   //   console.log('====================================');
    //   //   // const { cache } = this.$route.meta;
    //   //   return (e: any) => {
    //   //     return (
    //   //       <router-view>
    //   //         {(e: any) => {
    //   //           console.log('e', e);
    //   //           return (
    //   //             <>
    //   //               <keep-alive>
    //   //                 {resolveDynamicComponent(e.Component)}
    //   //                 {/* <component is={e.Component} /> */}
    //   //               </keep-alive>
    //   //               {resolveDynamicComponent(e.Component)}
    //   //             </>
    //   //           );
    //   //         }}
    //   //       </router-view>
    //   //     );
    //   //   };
    //   // },
    // }),
    // {
    //   setup() {
    //     return <router-view></router-view>;
    //   },
    //   // render() {
    //   //   const { cache } = this.$route.meta;
    //   //   return h(resolveComponent('router-view'));
    //   //   return [
    //   //     h(resolveComponent('keep-alive'), [cache && h(resolveComponent('router-view'))]),
    //   //     !cache && h(resolveComponent('router-view')),
    //   //   ];
    //   //   return h('div', [h('keep-alive', [cache && h('router-view')]), !cache && h('router-view')]);
    //   // },
    //   // render() {
    //   //   const { cache } = this.$route.meta;
    //   //   console.log('====================================');
    //   //   console.log('cache', cache);
    //   //   console.log('====================================');
    //   //   return (
    //   //     <router-view v-slots={ Component, route }>
    //   //       {Component}
    //   //       {/* <keep-alive v-if="route.meta.keepAlive">
    //   //         <component :is="Component" />
    //   //       </keep-alive>
    //   //       <component v-else :is="Component" /> */}
    //   //     </router-view>
    //   //   );

    //   //   // return [
    //   //   // <keep-alive>
    //   //   //   {cache && <router-view></router-view>}
    //   //   // </keep-alive>,
    //   //   // !cache && <router-view></router-view>
    //   //   // ];
    //   // },
    // },
    children: [
      {
        // v3 -> v4 ===> '/' -> ''
        // https://next.router.vuejs.org/zh/guide/migration/#命名路由缺少必要的-params
        path: '',
        name: 'A',
        meta: {
          title: '子路由',
          cache: true,
        },
        component: () => import('@/pages/children.vue'),
      },
    ],
  },
];
export default children;
