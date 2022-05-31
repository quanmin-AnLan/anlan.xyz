<template>
  <section class="error">
    <div class="top">404 Not Found</div>
    <div class="fixed">
      <div><img src="http://img.anlan.xyz/404.jpg?imagelim" alt="error"></div>
      <div>您输入的网址已被安澜吃掉，请更换正确的网址</div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    document.querySelector('.nav-main').style.display = 'none';
  },
};
</script>

<style lang="less" scoped>
@import '../less/404.less';
</style>