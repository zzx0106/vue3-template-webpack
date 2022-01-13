/*
 * @Date: 2020-12-30 16:00:23
 * @LastEditTime: 2021-01-06 17:29:01
 * @Description:
 */

// import { userRule } from "@client/view/userGroups/components/rule.i";

/** 行为标签 */
export declare module Idaily_fields {
  export interface FieldList {
    id: number;
    field_name: string;
    field_des: string;
    field_type: string;
    options?: any;
  }

  export interface Data {
    field_list: FieldList[];
  }

  export interface RootObject {
    code: number;
    msg: string;
    data: Data;
  }
}

/** 用户标签 */
export declare module Iaddress {
  export interface Data {
    country_list?: string[];
    province_list?: string[];
    city_list?: string[];
  }

  export interface RootObject {
    code: number;
    msg: string;
    data: Data;
  }
}

export declare module Iget_ruleList {
  export interface Options {
    expire_member: string;
    month_member: string;
    contract_member: string;
  }
  export interface Rule {
    relation: string;
    rules: Rule[];
    type: string;
    name: string;
    field: string;
    function: string;
    params: any[];
    time_params: string[];
    _name: string;
    _type: string;
    tag_name: string;
    tag_des: string;
    tag_type: string;
    options: Options;
    filters: any[];
    field_name: string;
    field_des: string;
    field_type: string;
  }

  export interface OgQuery {
    relation: string;
    type: string;
    rules: Rule[];
  }

  export interface ResList {
    id: number;
    group_name: string;
    rule_des: string;
    run_status: string;
    api_status: boolean;
    og_query: OgQuery;
    group_count: number;
    refresh_time: string;
  }

  export interface Data {
    res_list: ResList[];
    count: number;
  }

  export interface RootObject {
    code: number;
    msg: string;
    data: Data;
  }
}

export declare module Isearch_RuleDetail {
  export interface Options {}

  export interface Rule {
    field: string;
    function: string;
    params: any[];
    type: string;
    _name: string;
    _type: string;
    tag_name: string;
    tag_des: string;
    tag_type: string;
    filters: any[];
    time_params: string[];
    field_name: string;
    field_des: string;
    field_type: string;
    options: Options;
    relation: string;
    name: string;
  }

  export interface OgQuery {
    relation: string;
    rules: Rule[];
    type: string;
  }

  export interface Data {
    id: number;
    group_name: string;
    rule_des: string;
    run_status: string;
    api_status: boolean;
    // og_query: userRule.RootObject;
    group_count: number;
    refresh_time: string;
  }

  export interface RootObject {
    code: number;
    msg: string;
    data: Data;
  }
}

export type Isearch_Rule<T> = T;

// 移动后

export interface res_Data<T> {
  code: number;
  msg: string;
  data: T;
}

export interface Options {
  expire_member: string;
  month_member: string;
  contract_member: string;
}

export interface Rule {
  field: string;
  function: string;
  params: any[];
  type?: string;
  _name?: string;
  _type?: string;
  tag_name: string;
  tag_des: string;
  tag_type: string;
  filters?: any[];
  time_params?: string[];
  field_name?: string;
  field_des?: string;
  field_type?: string;
  options?: Options;
  relation?: string;
  name?: string;
}

export interface OgQuery {
  relation: string;
  type: string;
  rules: OgQuery[] | Rule[];
}

export interface req_user_cluster_list {
  group_id?: number;
  refresh?: boolean;
  page_max?: number;
  page?: number;
  search_key?: string;
  run_status?: string;
}

export interface res_user_cluster_list {
  res_list: {
    id: number;
    group_name: string;
    rule_des: string;
    run_status: string;
    api_status: boolean;
    og_query: OgQuery;
    group_count: number;
    refresh_time: string;
  }[];
  count: number;
}

export interface res_user_get_staticTags_data {
  tag_list: res_user_get_staticTags[];
}
export interface res_user_get_staticTags {
  id: string;
  tag_name: string;
  tag_des: string;
  tag_type: 'datetime' | 'number' | 'char';
  options?: any;
}

export interface IClusterSelect2Opt {
  name: string;
  mark: string;
}
export interface IClusterSelect2 {
  datetime: Array<IClusterSelect2Opt>;
  number: Array<IClusterSelect2Opt>;
  char: IClusterSelect2Opt[];
}
export interface res_user_get_addr_options {
  country_list?: string[];
  province_list?: string[];
  city_list?: string[];
}
