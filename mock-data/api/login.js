module.exports = () => ({
  code: 0,
  msg: 'Success',
  data: {
    token: '90a4bec1718c2e63beb9b9eb13062fdc2a0fa6ee',
    data: {
      user: {
        userId: '659',
        name: '超级管理员改名',
        mobilePhone: '18818992351',
        orgId: 1010201,
        orgName: '改个机构名1',
        status: 1,
        role: {
          roleId: 1,
          name: '超级管理员',
          desc: '',
          scene: '',
          default: true,
          permission: {
            super: true,
            list: [
              {
                menuId: 1000,
                op: 0,
              },
              {
                menuId: 3000,
                op: 2,
              },
              {
                menuId: 10000,
                op: 2,
              },
            ],
          },
        },
        departmentId: 0,
        createTime: '',
      },
      permission: {
        super: true,
        list: [
          {
            menuId: 1000,
            op: 2,
          },
          {
            menuId: 3000,
            op: 2,
          },
          {
            menuId: 10000,
            op: 2,
          },
        ],
      },
    },
  },
});
