<template>
  <div class="home">
    <el-image class="logo" :src="anlanUrl" :preview-src-list="anlanUrls" fit="fill"></el-image>
    <HelloWorld msg="QQ：2016751527"/>
    <el-button @click="route('qmdld')">全民大乐斗专区</el-button>
    <el-button @click="route('aiding')">爱锭网（安澜重构）</el-button>
    <el-tooltip placement="top">
      <div slot="content">
        <p>扫描右侧二维码加好友</p>
        <p>填写观棋不宇推荐即可</p>
      </div>
      <el-button @click="aiding">爱锭网（跳转）</el-button>
    </el-tooltip>
    <section class="ad">
      <el-image style="width: 100%;" :src="imgurl" :preview-src-list="imgurls" fit="fill"></el-image>
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
  data() {
    return {
      imgurl: require('../assets/aiding.jpg'),
      imgurls: [
        require('../assets/aiding.jpg'),
      ],
      anlanUrl: require('../assets/anlan.jpg'),
      anlanUrls: [
        require('../assets/anlan.jpg'),
      ],
    };
  },
  methods: {
    route(page) {
      this.$router.push({path: '/' + page});
    },
    aiding() {
      window.location.href = 'http://www.python-spider.com/challenge';
    },
  },
};
</script>

<style lang="less" scoped>
@import '../less/home.less';
</style>