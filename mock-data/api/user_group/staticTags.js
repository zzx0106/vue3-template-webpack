module.exports = () => ({
  code: 0,
  msg: 'Success',
  data: {
    tag_list: [
      {
        id: '1',
        tag_name: 'city',
        tag_des: '用户微信的城市信息',
        tag_type: 'char',
      },
      {
        id: '2',
        tag_name: 'country',
        tag_des: '用户微信的国家信息',
        tag_type: 'char',
      },
      {
        id: '3',
        tag_name: 'create_time',
        tag_des: '用户账号的创建时间',
        tag_type: 'datetime',
      },
      {
        id: '4',
        tag_name: 'first_pay_time',
        tag_des: '用户在的第一次支付时间',
        tag_type: 'datetime',
      },
      {
        id: '5',
        tag_name: 'last_pay_time',
        tag_des: '用户的最后一次支付的时间',
        tag_type: 'datetime',
      },
      {
        id: '6',
        tag_name: 'pay_amount',
        tag_des: '用户历史支付的总金额',
        tag_type: 'number',
      },
      {
        id: '7',
        tag_name: 'pay_count',
        tag_des: '用户历史的支付次数',
        tag_type: 'number',
      },
      {
        id: '8',
        tag_name: 'province',
        tag_des: '用户微信的省份信息',
        tag_type: 'char',
      },
      {
        id: '9',
        tag_name: 'refund_count',
        tag_des: '用户的历史退款次数',
        tag_type: 'number',
      },
      {
        id: '10',
        tag_name: 'role',
        tag_des: '用户角色',
        tag_type: 'char',
        options: {
          student: '学员',
          lecturer: '讲师',
          platformee: '平台帐号',
        },
      },
      {
        id: '11',
        tag_name: 'wx_sex',
        tag_des: '用户在微信录入的性别',
        tag_type: 'char',
        options: {
          0: '未知',
          1: '男',
          2: '女',
        },
      },
      {
        id: '12',
        tag_name: 'sex',
        tag_des: '性别',
        tag_type: 'char',
        options: {
          0: '未知',
          1: '男',
          2: '女',
        },
      },
      {
        id: '13',
        tag_name: 'role',
        tag_des: '用户角色',
        tag_type: 'char',
        options: {
          student: '学员',
          lecturer: '讲师',
          platformee: '平台帐号',
        },
      },
    ],
  },
});
