import { RootState } from '@/store-vuex/store';
import { Module } from 'vuex';
export interface CommonState {
  something: string;
}
const common: Module<CommonState, RootState> = {
  namespaced: true,
  state: {
    something: 'something',
  },
  mutations: {
    mut_aaaBBB(state, something) {
      state.something = something;
    },
  },
  actions: {
    act_methodName({ commit, rootState }) {
      rootState.common.something;
      commit('mut_aaaBBB', 'zxcxzc');
    },
  },
};
export default common;
