<template>
  <section class="main">
    <header>第{{ num }}期华山论剑投票抽奖备案</header>
    <al-table :headerSet="headerSet" :tableData="listData"></al-table>
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
          prop: 'timeNum',
          label: '投票序号',
        },
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
      listData: [],
      isDrawMap: {
        0: '否',
        1: '是',
      },
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
  methods: {
    washData(data) {
      this.listData = data.map((item) => {
        return {
          qq: item.qq,
          isDraw: this.isDrawMap[item.isDraw],
          times: item.times,
          timeNum: data.indexOf(item) + 1,
        };
      });
    },
  },
  mounted() {
    this.washData(this.tableData);
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