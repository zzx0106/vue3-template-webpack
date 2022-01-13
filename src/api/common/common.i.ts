export interface req_login {
  username: string;
  password: string;
}

export interface res_data<T = any> {
  code: number;
  msg: string;
  data: T;
}

// TODO：返回参数不确定，等接口
export interface res_login {
  data: object;
  token: string;
}
