<template>
  <section class="main-page">
    <div class="lisa-box">
      <div class="lisa-item" v-for="item in lisaData" :key="item.id">
        <a :href="item.href" target="_blank">{{item.title}}</a>
      </div>
    </div>
    <Home></Home>
  </section>
</template>

<script>
  import Home from '../../../components/GoHome.vue';
  export default {
    components: {
      Home,
    },
    data() {
      return {
        lisaData: [
          {
            id: 1,
            title: '6月工资',
            href: 'http://img.anlan.xyz/lsdw/drf/gongzi/6.jpg?imagelim',
          },
          {
            id: 2,
            title: '7月工资',
            href: 'http://img.anlan.xyz/lsdw/drf/gongzi/7.jpg?imagelim',
          },
        ],
      };
    },
  };
</script>

<style lang="less" scoped>
.main-page {
  width: 100%;
}
.lisa-box {
  width: 1200px;
  margin: 30px auto 0;
  display: flex;
  flex-wrap: wrap;
  .lisa-item {
    height: 100px;
    line-height: 100px;
    width: 240px;
    background: rgba(255, 255, 255, 0.3);
    &:hover {
      background: rgba(255, 255, 255, 0.6);
    }
    a {
      display: block;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      border: 1px solid #abcdef;
    }
  }
}
</style>