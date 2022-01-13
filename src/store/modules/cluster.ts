import { defineStore, StateTree } from 'pinia';
import { res_user_get_addr_options, res_user_get_staticTags, res_user_get_staticTags_data, Rule } from '@/api/user/cluster.i';
import { api_get_addr_options, api_user_get_staticTags } from '@/api/user/cluster';
import storage from '@/utils/storage';

// Rule
interface ClusterState {
  staticTags: res_user_get_staticTags[];
  addrOptions: res_user_get_addr_options;
  initPropsOptions: Rule;
}

const useClusterStore = defineStore({
  id: 'cluster',
  state: (): ClusterState => ({
    staticTags: [],
    addrOptions: {},
    initPropsOptions: {
      field: '',
      function: '=',
      params: [],
      tag_name: '',
      tag_des: '',
      tag_type: '',
    },
  }),
  getters: {
    get_staticTags() {
      return this.staticTags;
    },
    get_addrOptions() {
      return this.addrOptions;
    },
    get_initPropsOptions() {
      return this.initPropsOptions;
    },
  },
  actions: {
    async act_setStaticTags() {
      try {
        const res: res_user_get_staticTags_data = await api_user_get_staticTags();
        this.staticTags = res.tag_list;
        // TODO 此处优化点
        return Promise.resolve(res.tag_list);
        console.log('act_setTStaticTags', this.staticTags);
      } catch (e) {}
    },
    async act_setAddrOptions() {
      if (storage.get('phoenix_address')) {
        this.addrOptions = storage.get('phoenix_address');
        return;
      }

      try {
        const res = await Promise.all([
          api_get_addr_options({ addr_key: 'country_list' }),
          api_get_addr_options({ addr_key: 'province_list' }),
          api_get_addr_options({ addr_key: 'city_list' }),
        ]);
        this.addrOptions = res.reduce((obj: any, item: any) => {
          const key: string = Object.keys(item)[0];
          obj[key] = item[key].filter((v: string) => v);
          return obj;
        }, {});
        storage.set('phoenix_address', this.addrOptions);
      } catch (e) {}
    },
    // 获取tag列表的第一个options内容
    async act_getFirstStaticTags() {
      if (!this.staticTags.length) await this.act_setStaticTags();
      return { ...this.staticTags[0] };
    },
    act_setInitPropsOptions() {
      const item = { ...this.staticTags[0] };
      return {
        ...this.initPropsOptions,
        uuid: Math.random().toString(),
        field: item?.tag_name,
        tag_name: item?.tag_name,
        tag_des: item?.tag_des,
        tag_type: item?.tag_type,
      };
    },
  },
});
export default useClusterStore;
