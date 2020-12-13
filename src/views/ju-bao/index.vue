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
          area: 'QQ小程序区，空间1、2区，微信小程序1、4、5、8、10、11区',
        },
        {
          href: 'http://www.anlan.xyz/jubao/view/20200921',
          title: '2020年9月21日不文明行为备案',
          area: 'QQ小程序区，空间4区，微信小程序1、3、8、9、10、11区',
        },
        {
          href: 'http://www.anlan.xyz/jubao/view/20200928',
          title: '2020年9月28日不文明行为备案',
          area: '手Q区，空间3区，微信小程序1、4、10、11区',
        },
        {
          href: 'http://www.anlan.xyz/jubao/view/20201006',
          title: '2020年10月6日不文明行为备案',
          area: '手Q区，空间3区，微信小程序1、4、5、8、10、11区',
        },
        {
          href: 'http://www.anlan.xyz/jubao/view/20201012',
          title: '2020年10月12日不文明行为备案',
          area: '空间1、3、4区，微信小程序1、5、8区',
        },
        {
          href: 'http://www.anlan.xyz/jubao/view/20201019',
          title: '2020年10月19日不文明行为备案',
          area: '手Q区，空间3、4区，微信小程序1、10、11区',
        },
        {
          href: 'http://www.anlan.xyz/jubao/view/20201026',
          title: '2020年10月26日不文明行为备案',
          area: '空间2、3、4区，微信小程序1、3、7、8、11区',
        },
        {
          href: 'http://www.anlan.xyz/jubao/view/20201102',
          title: '2020年11月2日不文明行为备案',
          area: '手Q区，空间1、3、4区，微信小程序1、3、6、8、10区',
        },
        {
          href: 'http://www.anlan.xyz/jubao/view/20201109',
          title: '2020年11月9日不文明行为备案',
          area: '手Q区，QQ小程序区，微信小程序1、2、7、10、11区',
        },
        {
          href: 'http://www.anlan.xyz/jubao/view/20201116',
          title: '2020年11月16日不文明行为备案',
          area: '空间1、2、4区，微信小程序1、11区',
        },
        {
          href: 'http://www.anlan.xyz/jubao/view/20201123',
          title: '2020年11月23日不文明行为备案',
          area: '手Q区，空间1、2、4区，微信小程序3、8、9、11区',
        },
        {
          href: 'http://www.anlan.xyz/jubao/view/20201130',
          title: '2020年11月30日不文明行为备案',
          area: '空间3区，微信小程序1、3、9、10区',
        },
        {
          href: 'http://www.anlan.xyz/jubao/view/20201207',
          title: '2020年12月7日不文明行为备案',
          area: '空间1、2、4区，微信小程序3、8、9、11区',
        },
        {
          href: 'http://www.anlan.xyz/jubao/view/20201214',
          title: '2020年12月14日不文明行为备案',
          area: '手Q区，QQ小程序区，空间3、4区，微信小程序1、9、11区',
        },
        {
          href: 'http://www.anlan.xyz/jubao/view/20201221',
          title: '2020年12月21日不文明行为备案',
          area: 'null',
        },
        {
          href: 'http://www.anlan.xyz/jubao/view/20201228',
          title: '2020年12月28日不文明行为备案',
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