<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <el-button @click="route('about')">About</el-button>
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
