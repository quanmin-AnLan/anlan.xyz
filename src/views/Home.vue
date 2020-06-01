<template>
  <div class="home">
    <img alt="Vue logo" src="http://www.anlan.xyz:8080/init/anlan.jpg">
    <HelloWorld msg="QQ：2016751527"/>
    <el-button @click="route('about')">待开发</el-button>
    <el-button @click="route('aiding')">爱锭网（重构中）</el-button>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  methods: {
    route(page) {
      this.$router.push({path: '/' + page});
    },
  },
};
</script>

<style lang="less" scoped>
img {
  width: 300px;
  margin-top: 50px;
}
</style>