<template>
  <section class="main">
    <Nav></Nav>
    <section class="main-container">
      <router-view />
    </section>
    <el-dialog title="说明" :visible.sync="isShow" width="30%">
      <div>本页为vue重构爱锭网（www.python-spider.com）</div>
      <div>由于版权原因，题目需要登录至爱锭网才可查看</div>
      <div>点击登录/注册直接跳转爱锭网正式登录/注册页</div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="setLocalStorage">关闭且不再提示</el-button>
        <el-button type="primary" @click="dialogClose">关闭</el-button>
      </span>
    </el-dialog>
    <Home></Home>
  </section>
</template>

<script>
import Home from '@/components/GoHome.vue';
import Nav from './components/Nav.vue';
export default {
  components: {
    Nav,
    Home,
  },
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    dialogClose() {
      this.isShow = false;
    },
    setLocalStorage() {
      this.dialogClose();
      window.localStorage.setItem('isClose', 'true');
    },
    checkLocalStorage() {
      const isClose = window.localStorage.getItem('isClose');
      if (isClose) {
        this.isShow = false;
      } else {
        this.isShow = true;
      }
    },
  },
  mounted() {
    this.checkLocalStorage();
  },
};
</script>

<style lang="less" scoped>
@import '../../less/ai-ding/index.less';
</style>