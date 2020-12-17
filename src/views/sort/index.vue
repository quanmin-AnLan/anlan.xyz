<template>
  <section class="main">
    <header>【线下活动】等级武林区排位活动</header>
    <al-table :headerSet="headerSet" :tableData="tableData"></al-table>
    <Home></Home>
  </section>
</template>

<script>
import AlTable from '@/components/AlTable.vue';
import Home from '@/components/GoHome.vue';
export default {
  components: {
    AlTable,
    Home,
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
          href: 'http://www.anlan.xyz/jubao/view/20200730',
          title: '第一届59级天榜排位公示',
        },
        {
          href: 'http://www.anlan.xyz/jubao/view/20200803',
          title: '第一届59级地榜排位公示',
        },
        {
          href: 'http://www.anlan.xyz/jubao/view/20200810',
          title: '第一届39级天榜排位公示',
        },
        {
          href: 'http://www.anlan.xyz/jubao/view/20200813',
          title: '第一届39级地榜排位公示',
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