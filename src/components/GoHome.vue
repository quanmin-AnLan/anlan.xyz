<template>
  <div class="go-home" @click="router">Home</div>
</template>

<script>
export default {
  methods: {
    router() {
      this.$router.push({path: '/'});
    },
  },
};
</script>

<style lang="less" scoped>
@import '../less/components/GoHome.less';
</style>