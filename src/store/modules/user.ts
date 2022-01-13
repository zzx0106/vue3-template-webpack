import { defineStore } from 'pinia';
import storage from '@/utils/storage';

interface UserState {
  token: string;
  user: object;
}

const module = 'phoenix';
const useUserStore = defineStore({
  id: 'user',
  state: (): UserState => ({
    token: storage.get(`${module}_token`) || {},
    user: storage.get(`${module}_user`) || {},
  }),
  getters: {
    get_token() {
      return this.token || storage.get(`${module}_token`);
    },
    get_user() {
      return this.user || storage.get(`${module}_user`);
    },
  },
  actions: {
    // 删除用户信息
    act_clearUserInfo() {
      console.log('act_clearUserInfo');
      storage.delete(`${module}_token`);
      storage.delete(`${module}_user`);
    },
    act_setToken(payload: string) {
      console.log('act_setToken', payload);
      if (!payload) return;
      this.token = payload;
    },
    // TODO: 等接口出来在写具体接口
    act_setUser(payload: object) {
      console.log('act_setUser', payload);
      if (!payload) return;
      this.user = payload;
    },
    act_setUserInfo(payload: UserState) {
      console.log('act_setUserInfo', payload);
      if (!payload) return;
      const { token, user } = payload;
      if (token) this.token = token;
      if (user) this.user = user;
    },
  },
});
export default useUserStore;
