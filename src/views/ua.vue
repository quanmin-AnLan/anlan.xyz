<template>
  <section>
    ua测试
  </section>
</template>

<script>
export default {
  name: 'test',
  mounted() {
    alert('你的唯一标识是：' + window.navigator.userAgent)
  }
}
</script>

<style lang="less">

</style>
