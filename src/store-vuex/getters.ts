/**
 * 全局泛型
 */

import { GetterTree } from 'vuex';
import { RootState } from './store';

// 全局的getter，所以泛型里面传相同的根state
const getters: GetterTree<RootState, RootState> = {
  get_moduleSomething: (state) => state.module1.moduleSomething,
  get_something: (state) => state.common.something,
};
export default getters;
