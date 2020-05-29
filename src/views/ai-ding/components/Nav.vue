<template>
  <div class="nav">
    <div class="nav-left">
      <div class="logo">猿人学 Python V0.85</div>
      <div class="tab" v-for="item in tabs" :key="item.props">{{item.value}}</div>
      <div class="search-box">
        <div class="search-input">
          <el-input placeholder="搜索题目" v-model="searchvalue"></el-input>
        </div>
        <div class="search-button">
          <el-button>搜索</el-button>
        </div>
      </div>
    </div>
    <div class="nav-right">
      <div class="login"><span>登录</span></div>
      <div class="logon"><span>注册</span></div>
    </div>
  </div>
</template>
<script lang="ts">
import tabsConfig from '../config/tabs';
export default {
  data() {
    return {
      searchvalue: '',
      tabs: tabsConfig,
    };
  },
};
</script>
<style lang="less" scoped>
@import "../../../less/ai-ding/nav.less";
</style>