<template>
  <section class="main">
    <diablo></diablo>
    <Home></Home>
  </section>
</template>

<script>
import Diablo from './components/diablo-compute.vue';
import Home from '../../components/GoHome.vue';
export default {
  components: {
    Diablo,
    Home,
  },
  data() {
    return {

    };
  },
};
</script>