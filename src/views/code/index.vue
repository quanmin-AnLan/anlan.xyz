<template>
  <section class="main">
    <el-button @click="getPassword">点击获取</el-button>
    <Home></Home>
  </section>
</template>

<script>
import Home from '../../components/GoHome.vue';
export default {
  components: {
    Home,
  },
  methods: {
    getPassword() {
      this.$message({
        message: 'Anlan0222.',
        type: 'success',
      });
    },
  },
};
</script>