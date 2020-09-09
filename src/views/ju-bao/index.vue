<template>
  <section class="main">
    <header>【全民大乐斗】不文明行为备案</header>
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
        {
          prop: 'area',
          label: '涉及区服',
          align: 'left',
        },
      ],
      tableData: [
        {
          href: 'http://www.anlan.xyz/jubao/view/20200730',
          title: '2020年7月30日不文明行为备案',
          area: '手Q区，空间2、3区，微信小程序3、9、11区',
        },
        {
          href: 'http://www.anlan.xyz/jubao/view/20200803',
          title: '2020年8月3日不文明行为备案',
          area: '空间3、4区，微信小程序1、3、5、9、11区',
        },
        {
          href: 'http://www.anlan.xyz/jubao/view/20200810',
          title: '2020年8月10日不文明行为备案',
          area: '空间2区，手Q区，QQ小程序区，微信小程序1、3、10、11区，微信H5区',
        },
        {
          href: 'http://www.anlan.xyz/jubao/view/20200813',
          title: '2020年8月13日不文明行为备案',
          area: '空间2区，手Q区，QQ小程序区，微信小程序3区，微信H5区',
        },
        {
          href: 'http://www.anlan.xyz/jubao/view/20200817',
          title: '2020年8月17日不文明行为备案',
          area: 'QQ小程序区，微信小程序1、3、9、11区',
        },
        {
          href: 'http://www.anlan.xyz/jubao/view/20200824',
          title: '2020年8月24日不文明行为备案',
          area: '空间2、3区，QQ小程序区，微信小程序1、7区',
        },
        {
          href: 'http://www.anlan.xyz/jubao/view/20200831',
          title: '2020年8月31日不文明行为备案',
          area: '空间1、2、3区，QQ小程序区，微信小程序1、2、6、10、11区',
        },
        {
          href: 'http://www.anlan.xyz/jubao/view/20200907',
          title: '2020年9月7日不文明行为备案',
          area: 'QQ小程序区，空间1、3区，微信小程序1、10、11区，微信H5区',
        },
        {
          href: 'http://www.anlan.xyz/jubao/view/20200914',
          title: '2020年9月14日不文明行为备案',
          area: 'QQ小程序区，空间1区，微信小程序1、8、11区',
        },
        {
          href: 'http://www.anlan.xyz/jubao/view/20200921',
          title: '2020年9月21日不文明行为备案',
          area: 'null',
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