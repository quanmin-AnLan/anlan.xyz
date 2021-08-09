<template>
  <section class="main">
    <diablo></diablo>
    <Home></Home>
    <el-button class="into" @click="into">查看工资</el-button>
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
    into() {
        this.$router.push({path: '/lisa/money'});
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
</style>