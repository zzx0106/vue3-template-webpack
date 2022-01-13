import { res_data } from '@/api/common/common.i';
import Axios, { AxiosResponse } from 'axios';
// import { Message, MessageBox } from 'element-ui';
// import { router } from '../routers/index';
let state401 = false; // 判断是否属于401状态，如果触发过一次，就不需要连续触发，等待下一次接口请求成功后，才可以触发

let orgin = '';
console.log('env', process.env?.NODE_ENV);
const baseEnv = process.env?.VITE_APP_BASE_ENV || process.env?.NODE_ENV;
if (baseEnv === 'production') {
  orgin = ''; // 生产环境地址
} else if (baseEnv === 'development') {
  orgin = process.env.VUE_APP_IS_MOCK === 'true' ? '/api' : 'xxx'; // 测试环境地址
} else if (baseEnv === 'test') {
  orgin = ''; // 测试环境地址
}
export const url = {
  api: `${orgin}`,
};

const axios = Axios.create({
  baseURL: url.api,
  timeout: 120000,
  headers: {
    Accept: 'application/json, text/javascript, */*',
    'Content-Type': 'application/json; charset=UTF-8',
  },
});
// 带cookie请求
// axios.defaults.withCredentials = true;
axios.interceptors.request.use(
  (config) => {
    console.log(`%c 发送 ${config.url} `, 'background:#2472C8;color:#fff', config.data, config);
    return config;
  },
  (error) => {
    console.error(error.message);
    return Promise.reject(error);
  }
);

type axios_res_data = AxiosResponse<res_data>;
axios.interceptors.response.use(
  (res: axios_res_data): Promise<axios_res_data> => {
    console.log(`%c 接收 ${res.config.url?.split('/').pop()}`, 'background:#1E1E1E;color:#bada55', JSON.parse(JSON.stringify(res.data)));
    if (res?.status === 200) {
      if (res?.data?.code === 0) {
        return Promise.resolve(res.data.data);
      }
    }
    // MessageBox(`${status.msg || '请求失败'}`);
    console.log('failed');
    return Promise.reject(res.data);
  },
  (error) => {
    console.log('-----> error', error, error.response);
    const res = error.response;
    if (res?.status === 401) {
      // MessageBox({
      //   message: '登录状态过期，请重新登录',
      //   callback() {
      //     router.replace('/login');
      //     setTimeout(() => {
      //       // 强制刷新，可还能顺便更新代码
      //       window.location.reload();
      //     }, 2000);
      //   },
      // });
    }
    return Promise.reject(error);
  }
);
/**
 * get方法，对应get请求
 * @param url [请求的url地址]
 * @param params [请求时携带的参数]
 * @returns
 */
export function get<T>(url: string, params: { [key: string]: any } = {}) {
  return axios.get<T>(`${url}`, { params: params });
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */

export function post<T>(url: string, params: { [key: string]: any }) {
  return axios.post<T>(`${url}`, params);
}
