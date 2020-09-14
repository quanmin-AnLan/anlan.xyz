<template>
  <section class="main">
    <header>【全民大乐斗】华山论剑投票抽奖备案</header>
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
          label: '中奖详情页',
        },
        {
          prop: 'draw',
          label: '竞猜项目',
        },
        {
          prop: 'result',
          label: '比赛结果',
        },
        {
          prop: 'team',
          label: '所在帮派',
        },
        {
          prop: 'item',
          label: '中奖选项',
        },
      ],
      tableData: [
        {
          href: 'http://www.anlan.xyz/draw/view/1',
          title: '第1期华山论剑投票竞猜',
          draw: '冠军',
          result: '乔巴教授',
          team: '子 · 夜',
          item: '微信小程序一区 昵称：乔巴教授 战力：1738830',
        },
        {
          href: 'http://www.anlan.xyz/draw/view/2',
          title: '第2期华山论剑投票竞猜',
          draw: '冠军',
          result: '白也',
          team: '大雪龙骑',
          item: '其他大佬',
        },
        {
          href: 'http://www.anlan.xyz/draw/view/3',
          title: '第3期华山论剑投票竞猜',
          draw: '冠军',
          result: '秋容',
          team: '大雪龙骑',
          item: '其他大佬',
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