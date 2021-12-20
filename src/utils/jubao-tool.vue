<template>
  <section class="main">
    <header>{{ year }}年{{ month }}月{{ day }}日不文明行为备案</header>
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
          prop: 'area',
          label: '区服',
        },
        {
          prop: 'uid',
          label: 'uid',
        },
        {
          prop: 'img',
          label: '核实图片记录',
        },
        {
          prop: 'times',
          label: '是否初犯',
        },
      ],
      listData: [],
    };
  },
  props: {
    tableData: {
      type: Array,
      default: () => [],
    },
    year: {
      type: String,
      default: '',
    },
    month: {
      type: String,
      default: '',
    },
    day: {
      type: String,
      default: '',
    },
  },
  methods: {
    washData(data) {
      this.listData = data.map((item) => {
        return {
          area: item.area,
          uid: item.uid,
          img: item.img,
          times: item.times,
          colortimes: item.times === '初犯' ? '' : '#f00',
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
    color: #fff;
  }
}
</style>