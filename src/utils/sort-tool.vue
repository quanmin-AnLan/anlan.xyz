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
          width: '53px',
        },
        {
          prop: 'area',
          label: '区服',
          width: '67px',
        },
        {
          prop: 'name',
          label: '名字',
          width: '93px',
        },
        {
          prop: 'img',
          label: '本届战力图',
        },
      ],
      modelMap: {
        天: '1',
        地: '2',
        强: '3',
      },
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
          name: item.name,
          img: 'http://img.anlan.xyz/ledou/rank/' + this.times + '/'
            + this.modelMap[this.model] + '-' + (this.level === '全等' ? 0 : this.level) + '-' + (data.indexOf(item) + 1)
            + '.jpg?imagelim',
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