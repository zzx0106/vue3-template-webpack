import { defineStore } from 'pinia';
interface CommonState {
  something: string;
  something2: string;
}
const useCommonStore = defineStore({
  id: 'common123',
  state: (): CommonState => ({
    something: 'something',
    something2: 'something2',
  }),
  getters: {
    get_something() {},
  },
  actions: {
    act_methodName() {
      this.something = 'xxxxxxxxx';
      console.log('act_methodName啧啧啧', this.something);
    },
  },
});
export default useCommonStore;
