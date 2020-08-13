<template>
  <section class="main">
    <header>不文明行为备案</header>
    <al-table :headerSet="headerSet" :tableData="tableData"></al-table>
  </section>
</template>

<script>
import AlTable from '@/components/AlTable.vue';
export default {
  components: {
    AlTable,
  },
  data() {
    return {
      headerSet: [
        {
          prop: 'url',
          label: '标题',
        },
        {
          prop: 'area',
          label: '涉及区服',
        },
      ],
      tableData: [
        {
          href: 'http://www.anlan.xyz/jubao/view/20200730',
          title: '2020年7月30日不文明行为备案',
          area: '这是一条假数据',
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.main {
  width: 100%;
  box-sizing: border-box;
  padding: 0 30px;
  header {
    height: 80px;
    line-height: 80px;
    font-size: 30px;
  }
}
</style>