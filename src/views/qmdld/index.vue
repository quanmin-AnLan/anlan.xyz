<template>
  <section class="main">
    <section class="container">
      <section class="left-container">
        <al-table :tableData="update" :headerSet="updateSet"></al-table>
      </section>
      <section class="right-container"></section>
    </section>
    <Home></Home>
  </section>
</template>

<script>
import Home from '../../components/GoHome.vue';
import AlTable from '@/components/AlTable.vue';
export default {
  components: {
    Home,
    AlTable,
  },
  data() {
    return {
      updateSet: [
        {
          prop: 'number',
          label: '最新',
          width: '50px',
        },
        {
          prop: 'url',
          label: '更新公告',
        },
      ],
      update: [
        {
          href: 'http://www.anlan.xyz:8080/update/2020/618.txt',
          title: '【全民大乐斗】6月18日更新公告',
          number: '1',
        },
        {
          href: 'http://www.anlan.xyz:8080/update/2020/611.txt',
          title: '【全民大乐斗】6月11日更新公告',
          number: '2',
        },
        {
          href: 'http://www.anlan.xyz:8080/update/2020/603.txt',
          title: '【全民大乐斗】6月3日更新公告',
          number: '3',
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
@import '../../less/qmdld/index.less';
</style>