<template>
  <section class="main">
    <diablo></diablo>
    <Home></Home>
    <el-button class="into" @click="into('/lisa/money')">查看工资</el-button>
    <el-button class="into-two" @click="into('/lisa/randomD3')">暗黑3随机</el-button>
  </section>
</template>

<script>
import Diablo from './components/diablo-compute.vue';
import Home from '../../components/GoHome.vue';
export default {
  components: {
    Diablo,
    Home,
  },
  methods: {
    into(url) {
        this.$router.push({path: url});
    },
  },
};
</script>

<style lang="less" scoped>
.into {
  width: 120px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  position: fixed;
  top: 80px;
  right: 30px;
  padding: 0;
}
.into {
  width: 140px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  position: fixed;
  top: 140px;
  right: 30px;
  padding: 0;
}
</style>