<template>
  <section class="main">
    <header>第{{ num }}期华山论剑投票抽奖备案</header>
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
          prop: 'qq',
          label: '猜中人QQ号',
        },
        {
          prop: 'isDraw',
          label: '本次是否被抽中',
        },
        {
          prop: 'times',
          label: '连续猜中次数',
        },
      ],
    };
  },
  props: {
    tableData: {
      type: Array,
      default: () => [],
    },
    num: {
      type: String,
      default: '',
    },
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