<template>
  <div class="page-login">
    <div class="login-header">
      <a
        class="logo"
        href="/" />
    </div>
    <div class="login-panel">
      <div class="banner">
        <img
          alt="美团网"
          height="370"
          src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg"
          width="480">
      </div>
      <div class="form">
        <h4
          v-if="error"
          class="tips"><i />{{ error }}</h4>
        <p><span>账号登录</span></p>
        <el-input
          v-model="username"
          prefix-icon="profile" />
        <el-input
          v-model="password"
          prefix-icon="password"
          type="password" />
        <div class="foot">
          <el-checkbox v-model="checked">7天内自动登录</el-checkbox>
          <b>忘记密码？</b>
        </div>
        <el-button
          class="btn-login"
          size="mini"
          type="success"
          @click="login">登录
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
import CryptoJS from "crypto-js";

export default {
  layout: "blank",
  data: () => {
    return {
      checked: "",
      username: "hardingcheng@163.com",
      password: "hardingcheng@163.com",
      error: ""
    };
  },
  methods: {
    async login() {
      const { status, data } = await this.$axios.post("/users/signin", {
        // 处理编码
        username: window.encodeURIComponent(this.username),
        password: CryptoJS.MD5(this.password).toString()
      });
      if (status === 200) {
        if (data && data.code === 1) {
          window.location.href = "/";
        } else {
          this.error = data.msg;
        }
      } else {
        this.error = `服务器出错`;
      }
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/login/index.scss";
</style>
