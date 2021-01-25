<template>
  <section class="main">
    <header>【线下活动】等级武林排位</header>
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
      ],
      tableData: [
        {
          href: 'http://www.anlan.xyz/sort/view/1-59-sky',
          title: '第一届59级天榜排位公示',
        },
        {
          href: 'http://www.anlan.xyz/sort/view/1-39-sky',
          title: '第一届39级天榜排位公示',
        },
        {
          href: 'http://www.anlan.xyz/sort/view/1-strong',
          title: '第一届全等级强榜排位公示',
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
/deep/ .el-table {
  .el-table__header-wrapper {
    .el-table__header {
      font-size: 16px;
      .is-leaf {
        background-color: #506fbc;
      }
      .cell {
        color: #fff;
        text-align: center;
      }
    }
  }
}
</style>