<template>
  <div id="app">
    <Nav></Nav>
    <router-view />
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue';
export default {
  name: 'app',
  components: {
    Nav,
  },
  mounted() {
    document.querySelector('#app').style.minHeight = window.innerHeight + 'px';
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
  display: flex;
  margin: 0 auto;
  height: 100%;
  justify-content: center;
}
body {
  margin: 50px 0 0 !important;
}
</style>
