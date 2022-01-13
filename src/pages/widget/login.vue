<template>
  <div class="login-bg">
    <div class="login-box">
      <div class="login-title">Phoenix数据智能平台</div>

      <el-form ref="loginRef" :model="loginForm" :rules="loginRules" label-width="0px" class="login-form">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" placeholder="请输入用户名" prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" type="password" placeholder="请输入密码" prefix-icon="el-icon-lock"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="login-btn" @click="handleSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script lang="ts">
import { baseComponent } from '@/utils/baseComponent';
import router from '@/routers';
import { Ref, ref, unref } from '@vue/reactivity';
import { req_login } from '@/api/common/common.i';
import { api_login } from '@/api/common/common';
import useUserStore from '@/store/modules/user';
import storage from '@/utils/storage';

export default baseComponent({
  name: 'login',
  components: {},
  setup(props, ctx, base) {
    const store = useUserStore();
    const loginRef: Ref<any> = ref();
    const loginForm = ref<req_login>({
      username: '',
      password: '',
    });

    // 表单校验规则
    const loginRules = {
      username: [{ required: true, message: '账号不能为空', trigger: 'blur' }],
      password: [{ required: true, message: '密码不能为空', trigger: 'blur' }],
    };

    const handleSubmit = async () => {
      const form = unref(loginRef);
      if (!form) return;
      try {
        const valid = await form.validate();
        if (!valid) return;
        login();
      } catch (e) {
        console.warn(e);
      }
    };

    const login = async () => {
      try {
        const res = await api_login(loginForm.value);
        console.log('login', res);
        // 存储用户信息
        storage.set('phoenix_token', res?.token);
        storage.set('phoenix_user', res?.data);
        store.act_setUserInfo({
          token: res?.token,
          user: res?.data,
        });
        base?.Toast({
          type: 'success',
          message: '登录成功',
        });
      } catch (e) {
        base?.Toast({
          type: 'error',
          message: e.msg,
        });
        console.warn('login:', e);
      }
    };
    return {
      loginRef,
      loginForm,
      loginRules,
      handleSubmit,
    };
  },
});
</script>
<style lang="scss" scoped>
.login-bg {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url('~@/assets/images/login-bg.png');
  background-size: cover;
}
.login-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 54px;
  width: 468px;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);
}
.login-title {
  height: 50px;
  line-height: 50px;
  font-size: 26px;
  font-weight: bold;
  color: #1e1e1e;
  font-family: PingFangSC-Semibold, PingFang SC;
  text-align: center;
}
.login-form {
  margin-top: 30px;
  width: 340px;
}
.login-btn {
  width: 100%;
}
</style>
