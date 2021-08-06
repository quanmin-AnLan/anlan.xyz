<template>
  <section class="main">
    <div class="container">
        大胖猫
    </div>
    <Home></Home>
  </section>
</template>

<script>
import Home from '../../components/GoHome.vue';
export default {
  components: {
    Home,
  },
  data() {
    return {

    };
  },
};
</script>
<style lang="less" scoped>
.container {
    width: 100%;
    height: 800px;
    text-align: center;
    font-size: 50px;
    font-weight: bold;
    line-height: 800px;
}
</style>