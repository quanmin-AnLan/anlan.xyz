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
        {
          prop: 'timer',
          label: '上传时间',
          width: '100px',
        },
      ],
      update: [
        {
          href: 'http://www.anlan.xyz:8080/update/2020/702.txt',
          title: '【全民大乐斗】7月2日更新公告',
          number: '1',
          timer: '2020/07/01 12:25:44',
        },
        {
          href: 'http://www.anlan.xyz:8080/update/2020/624.txt',
          title: '【全民大乐斗】6月24日更新公告',
          number: '2',
          timer: '2020/06/23 11:54:27',
        },
        {
          href: 'http://www.anlan.xyz:8080/update/2020/618.txt',
          title: '【全民大乐斗】6月18日更新公告',
          number: '3',
          timer: '2020/06/23 11:15:55',
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
@import '../../less/qmdld/index.less';
</style>