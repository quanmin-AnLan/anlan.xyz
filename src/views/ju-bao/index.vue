<template>
  <section class="main">
    <header>【全民大乐斗】不文明行为备案</header>
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