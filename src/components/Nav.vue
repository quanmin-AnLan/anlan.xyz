<template>
  <section class="nav-main">
    <div class="nav-container">
      <div class="nav-left">

      </div>
      <div class="nav-right">
        <el-button @click="login">{{nickName}}</el-button>
        <el-button @click="logon">注册</el-button>
      </div>
    </div>
    <el-dialog title="登录" :visible.sync="loginShow" width="30%">
      <el-input v-model="loginName" placeholder="请输入用户名" clearable></el-input>
      <el-input v-model="loginPassword" placeholder="请输入密码" clearable show-password></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="loginSubmit">确定</el-button>
        <el-button @click="loginShow = false">取消</el-button>
      </span>
    </el-dialog>
    <el-dialog title="注册" :visible.sync="logonShow" width="30%">
      <el-input v-model="username" placeholder="请输入用户名" clearable></el-input>
      <el-input v-model="password" placeholder="请输入密码" clearable show-password></el-input>
      <el-input v-model="secondPassword" placeholder="请再次输入密码" clearable show-password></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="logonSubmit">确定</el-button>
        <el-button @click="logonShow = false">取消</el-button>
      </span>
    </el-dialog>
  </section>
</template>

<script lang="ts">
import Cookies from 'js-cookie';
export default {
  data() {
    return {
      loginShow: false,
      logonShow: false,
      username: '',
      secondPassword: '',
      password: '',
      loginName: '',
      loginPassword: '',
      nickName: '登录',
      isLogin: false,
    };
  },
  methods: {
    login() {
      const that: any = this;
      that.loginName = '';
      that.loginPassword = '';
      if (!that.isLogin) {
        that.loginShow = true;
      }
    },
    logon() {
      const that: any = this;
      that.username = '';
      that.password = '';
      if (window.localStorage.getItem('username') && window.localStorage.getItem('password')) {
        that.$alert('您已注册过用户名，继续注册将覆盖原有用户名', '注意！', {
          confirmButtonText: '确定',
        });
        that.logonShow = true;
      } else {
        that.logonShow = true;
      }
    },
    loginSubmit() {
      const that: any = this;
      if (window.localStorage.getItem('username') && window.localStorage.getItem('password')) {
        const name = window.localStorage.getItem('username');
        const key = window.localStorage.getItem('password');
        if (name !== that.loginName || key !== that.loginPassword) {
          that.$message({
            message: name !== that.loginName ? '用户名不正确' : '密码不正确',
            type: 'error',
          });
        } else {
          that.$message({
            message: '登录成功！',
            type: 'success',
          });
          that.nickName = '@' + name;
          that.loginShow = false;
          that.isLogin = true;
        }
      } else {
        that.$message({
          message: '您还未注册，请先注册',
          type: 'error',
        });
        that.loginShow = false;
        that.logonShow = true;
      }
    },
    logonSubmit() {
      const that: any = this;
      if ((!that.password || !that.secondPassword || !that.username) || that.password !== that.secondPassword) {
        that.$message({
          message: that.password !== that.secondPassword ? '两次密码输入不一致' : '内容不能为空',
          type: 'error',
        });
      } else {
        window.localStorage.setItem('username', that.username);
        window.localStorage.setItem('password', that.password);
        that.logonShow = false;
        that.$message({
          message: '注册成功',
          type: 'success',
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import '../less/components/Nav.less';
</style>