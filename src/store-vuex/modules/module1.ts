// 参考文件，待删除

import { RootState } from '@/store-vuex/store';
import { Module } from 'vuex';
export interface Module1State {
  moduleSomething: string;
}
const module1: Module<Module1State, RootState> = {
  namespaced: true,
  state: {
    moduleSomething: 'moduleSomething',
  },
  mutations: {
    mut_aaaBBB(state, collapse) {},
  },
  actions: {
    act_methodName({ commit, rootState }) {
      console.log('rootState.module1.moduleSomething', rootState.module1.moduleSomething);
    },
  },
  getters: {},
};
export default module1;
