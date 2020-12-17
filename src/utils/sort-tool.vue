<template>
  <section class="main">
    <header>第{{ times }}届{{ level }}级{{ model }}榜排位</header>
    <div class="text">作者：{{ author }}</div>
    <div class="text">监制：{{ checker }}</div>
    <div class="text">打字员：安澜</div>
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
      listData: [],
      headerSet: [
        {
          prop: 'rank',
          label: '排名',
        },
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
          label: '本届战力图',
        },
      ],
    };
  },
  props: {
    tableData: {
      type: Array,
      default: () => [],
    },
    times: {
      type: String,
      default: '',
    },
    level: {
      type: String,
      default: '',
    },
    model: {
      type: String,
      default: '',
    },
    author: {
      type: String,
      default: '',
    },
    checker: {
      type: String,
      default: '',
    },
  },
  methods: {
    washData(data) {
      this.listData = data.map((item) => {
        return {
          rank: data.indexOf(item) + 1,
          area: item.area,
          uid: item.uid,
          img: item.img,
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
.text {
  font-weight: bold;
  text-align: right;
  margin-bottom: 10px;
  color: #460046;
}
</style>