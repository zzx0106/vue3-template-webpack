import { get, post, url } from '@/utils/http';
import { req_login, res_login } from './common.i';

/** 获取极验 */
export const api_geetest = () => {
  return get<{ a: 1231 }>(`${url}`);
};

/**
 * 登录
 * @param params
 * @returns
 */
export const api_login = (params: req_login) => {
  return post<res_login>('/login', { params });
};
