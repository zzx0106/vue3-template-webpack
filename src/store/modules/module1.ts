// 参考文件，待删除

import { defineStore } from 'pinia';

const useModule1Store = defineStore({
  id: 'module1',
  state: () => ({
    moduleSomething: 'moduleSomething',
  }),
  actions: {
    act_methodName() {
      console.log('rootState.module1.moduleSomething');
    },
  },
});
export default useModule1Store;
