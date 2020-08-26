<template>
  <section class="main">
    <section class="container">
      <section class="left-container">
        <al-table :tableData="update" :headerSet="updateSet"></al-table>
      </section>
      <section class="right-container"></section>
    </section>
    <Home></Home>
    <el-dialog title="说明" :visible.sync="show" width="30%">
      <div style="font-size: 18px;">由于安澜比较懒，所以只展示最近3次更新公告</div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="setLocalStorage">关闭且不再提示</el-button>
        <el-button type="primary" @click="dialogClose">关闭</el-button>
      </span>
    </el-dialog>
  </section>
</template>

<script>
import Home from '../../components/GoHome.vue';
import AlTable from '@/components/AlTable.vue';
export default {
  components: {
    Home,
    AlTable,
  },
  data() {
    return {
      show: false,
      updateSet: [
        {
          prop: 'number',
          label: '最新',
          width: '50px',
        },
        {
          prop: 'url',
          label: '更新公告',
        },
      ],
      update: [
        {
          href: 'http://www.anlan.xyz:8080/update/2020/827.txt',
          title: '【全民大乐斗】8月27日更新公告',
          number: '1',
        },
        {
          href: 'http://www.anlan.xyz:8080/update/2020/820.txt',
          title: '【全民大乐斗】8月20日更新公告',
          number: '2',
        },
        {
          href: 'http://www.anlan.xyz:8080/update/2020/813.txt',
          title: '【全民大乐斗】8月13日更新公告',
          number: '3',
        },
      ],
    };
  },
  methods: {
    dialogClose() {
      this.show = false;
    },
    setLocalStorage() {
      this.dialogClose();
      window.localStorage.setItem('show', 'true');
    },
    checkLocalStorage() {
      const isClose = window.localStorage.getItem('show');
      if (isClose) {
        this.show = false;
      } else {
        this.show = true;
      }
    },
  },
  mounted() {
    this.checkLocalStorage();
  },
};
</script>

<style lang="less" scoped>
@import '../../less/qmdld/index.less';
</style>