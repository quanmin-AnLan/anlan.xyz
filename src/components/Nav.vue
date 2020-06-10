<template>
  <section class="nav-main">
    <div class="nav-container">
      <div class="nav-left">

      </div>
      <div class="nav-right">
        <el-button @click="login">{{nickName}}</el-button>
        <el-button @click="logon">{{logonOut}}</el-button>
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

<script>
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
      logonOut: '注册',
    };
  },
  methods: {
    login() {
      const isLogin = Cookies.get('isLogin');
      this.loginName = '';
      this.loginPassword = '';
      if (!isLogin || isLogin === 'false') {
        this.loginShow = true;
      }
    },
    logon() {
      const isLogin = Cookies.get('isLogin');
      this.username = '';
      this.password = '';
      if (!isLogin || isLogin === 'false') {
        if (window.localStorage.getItem('username') && window.localStorage.getItem('password')) {
          this.$alert('您已注册过用户名，继续注册将覆盖原有用户名', '注意！', {
            confirmButtonText: '确定',
          });
          this.logonShow = true;
        } else {
          this.logonShow = true;
        }
      } else {
        Cookies.set('isLogin', 'false', {domain: '.anlan.xyz'});
        this.$message({
          message: '已登出',
          type: 'success',
        });
        this.nickName = '登录';
        this.logonOut = '注册';
      }
    },
    loginSubmit() {
      if (window.localStorage.getItem('username') && window.localStorage.getItem('password')) {
        const name = window.localStorage.getItem('username');
        const key = window.localStorage.getItem('password');
        if (name !== this.loginName || key !== this.loginPassword) {
          this.$message({
            message: name !== this.loginName ? '用户名不正确' : '密码不正确',
            type: 'error',
          });
        } else {
          this.$message({
            message: '登录成功！',
            type: 'success',
          });
          this.loginShow = false;
          this.nickName = '@' + name;
          this.logonOut = '登出';
          Cookies.set('isLogin', 'true', {expires: 3 / 24, domain: '.anlan.xyz'});
        }
      } else {
        this.$message({
          message: '您还未注册，请先注册',
          type: 'error',
        });
        this.loginShow = false;
        this.logonShow = true;
      }
    },
    logonSubmit() {
      if ((!this.password || !this.secondPassword || !this.username) || this.password !== this.secondPassword) {
        this.$message({
          message: this.password !== this.secondPassword ? '两次密码输入不一致' : '内容不能为空',
          type: 'error',
        });
      } else {
        window.localStorage.setItem('username', this.username);
        window.localStorage.setItem('password', this.password);
        this.logonShow = false;
        this.$message({
          message: '注册成功',
          type: 'success',
        });
      }
    },
    checkLogin() {
      const isLogin = Cookies.get('isLogin');
      if (isLogin && isLogin === 'true') {
        this.nickName = '@' + window.localStorage.getItem('username');
        this.logonOut = '登出';
      }
    },
  },
  mounted() {
    this.checkLogin();
  },
};
</script>

<style lang="less" scoped>
@import '../less/components/Nav.less';
</style>