import { get, post } from '@/utils/http';
import { req_user_cluster_list, res_user_cluster_list, res_user_get_staticTags_data, res_user_get_addr_options } from './cluster.i';

/**
 * 获取用户分群列表页数据
 * @param params
 * @returns
 */
export const api_user_cluster_list = (params: req_user_cluster_list) => {
  return get<res_user_cluster_list>('/user_group/rule', { ...params });
};

/**
 * 用户分群列表，是否开启定时刷新
 * @param status 状态，true - 开启, false - 关闭
 * @returns
 */
export const api_user_cluster_switchStatus = (status: boolean) => {
  return post<{}>('/user_group/switchStatus', { status });
};

/**
 * 获取用户属性第一个选择框筛选内容
 * @returns
 */
export const api_user_get_staticTags = () => {
  return get<res_user_get_staticTags_data>('/user_group/staticTags');
};

/**
 * 获取国家、省、城市列表信息
 * @param params
 * @returns
 */
export const api_get_addr_options = (params: { addr_key: string }) => {
  return get<res_user_get_addr_options>('/user_group/get_addr_options', params);
};
