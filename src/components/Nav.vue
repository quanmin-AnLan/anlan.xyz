<template>
  <section class="nav-main">
    <div class="nav-container">
      <div class="nav-left">

      </div>
      <div class="nav-right">
        <el-button @click="clean">清除缓存</el-button>
        <el-button @click="boom">别点 !</el-button>
        <el-button @click="user">用户专区</el-button>
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
    <el-dialog title="个人专区登入" :visible.sync="userShow" width="30%">
      <el-input v-model="userid" placeholder="请输入唯一用户指令" clearable></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="userSubmit">确定</el-button>
        <el-button @click="userShow = false">取消</el-button>
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
      userShow: false,
      userid: '',
      username: '',
      secondPassword: '',
      password: '',
      loginName: '',
      loginPassword: '',
      nickName: '登录',
      logonOut: '注册',
      userList: ['lisa', 'weiwei', 'code'],
      index: 1,
      size: 0,
      timer: 6,
      noUser: true,
    };
  },
  methods: {
    boom() {
      for (let i = 1; i > 0; i++) {
        for (let j = 1; j > 0; j++) {
          for (let k = 1; k > 0; k++) {
            this.$message({
              message: '您的浏览器已受到攻击',
              type: 'error',
            });
          }
        }
      }
    },
    clean() {
      if (this.index === 1) {
        this.size = (Math.random() * 1000).toFixed(2);
      } else {
        this.size = (Math.random() * 10).toFixed(2);
        this.timer = 1;
      }
      setTimeout(() => {
        this.index++;
        this.$message({
          message: '已清理' + this.size + 'MB缓存',
          type: 'success',
        });
      }, this.timer * 1000);
    },
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
      this.secondPassword = '';
      if (!isLogin || isLogin === 'false') {
        if (window.localStorage.getItem('username') && window.localStorage.getItem('password')) {
          this.$confirm('您已注册过用户名，继续注册将覆盖原有用户名,是否继续？', '注意！', {
            confirmButtonText: '继续',
            cancelButtonText: '取消',
            type: 'warning',
          }).then(() => {
            this.logonShow = true;
          }).catch(() => {
            this.$message({
              message: '已取消',
              type: 'info',
            });
          });
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
    user() {
      const isUserLogin = Cookies.get('isUserLogin');
      if (!isUserLogin || isUserLogin === 'false') {
        this.userid = '';
        this.userShow = true;
      } else {
        this.$router.push({path: '/user'});
      }
    },
    userSubmit() {
      this.noUser = true;
      const len = this.userList.length;
      let itemNum = 0;
      for (const item of this.userList) {
        if (this.userid === item) {
          Cookies.set('isUserLogin', item, {expires: 3 / 24});
          this.$router.push({path: '/user'});
          this.userShow = false;
          this.noUser = false;
        }
        itemNum = itemNum + 1;
        if (this.noUser === true && itemNum === len) {
          this.$message({
            message: '目前没有此用户页，敬请期待',
            type: 'error',
          });
        }
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