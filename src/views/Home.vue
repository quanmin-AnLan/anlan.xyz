<template>
  <div class="home">
    <img class="logo" src="http://www.anlan.xyz:8080/init/anlan.jpg">
    <HelloWorld msg="QQ：2016751527"/>
    <el-button @click="route('about')">全民大乐斗（待开发）</el-button>
    <el-button @click="route('aiding')">爱锭网（重构中）</el-button>
    <el-tooltip placement="top">
      <div slot="content">
        <p>扫右侧二维码加好友</p>
        <p>填写观棋不宇推荐即可</p>
      </div>
      <el-button @click="aiding">爱锭网（跳转）</el-button>
    </el-tooltip>
    <section class="ad">
      <img src="http://www.anlan.xyz:8080/images/aiding.jpg">
    </section>
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
    aiding() {
      window.location.href = 'http://www.python-spider.com';
    },
  },
};
</script>

<style lang="less" scoped>
.logo {
  width: 300px;
  margin-top: 50px;
}
.ad {
  width: 233px;
  height: 660px;
  overflow-y: auto;
  position: fixed;
  top: 50%;
  right: 30px;
  margin-top: -330px;
  &::-webkit-scrollbar {
    background: transparent;
  }
  img {
    width: 216px;
    height: 1320px;
  }
}
</style>