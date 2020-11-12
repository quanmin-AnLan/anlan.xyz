<template>
  <div class="nav">
    <div class="nav-left">
      <div class="logo">猿人学 Python V0.9</div>
      <div class="tab" v-for="item in tabs" :key="item.props" @click="router(item.props)">{{item.value}}</div>
      <div class="search-box">
        <div class="search-input">
          <el-input placeholder="搜索题目" v-model="searchvalue"></el-input>
        </div>
        <div class="search-button">
          <el-button @click="search">搜索</el-button>
        </div>
      </div>
    </div>
    <div class="nav-right">
      <div class="login" @click="login"><span>登录</span></div>
      <div class="logon" @click="logon"><span>注册</span></div>
    </div>
  </div>
</template>
<script>
import { tabsConfig } from '../config/tabs';
export default {
  data() {
    return {
      searchvalue: '',
      tabs: tabsConfig,
    };
  },
  methods: {
    login() {
      window.location.href = 'http://www.python-spider.com/challenge/login';
    },
    logon() {
      window.location.href = 'http://www.python-spider.com/challenge/register';
    },
    search() {
      this.$message({
        message: '因原网页无搜索功能，故搜索功能暂未开发',
        type: 'warning',
      });
    },
    router(url) {
      this.$router.push({ path: "/aiding/" + url });
    },
  },
};
</script>
<style lang="less" scoped>
@import "../../../less/ai-ding/nav.less";
</style>