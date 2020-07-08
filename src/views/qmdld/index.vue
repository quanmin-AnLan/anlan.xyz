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
        {
          prop: 'timer',
          label: '上传时间',
          width: '100px',
        },
      ],
      update: [
        {
          href: 'http://www.anlan.xyz:8080/update/2020/709.txt',
          title: '【全民大乐斗】7月9日更新公告',
          number: '1',
          timer: '2020/07/08 17:09:08',
        },
        {
          href: 'http://www.anlan.xyz:8080/update/2020/v11k4.txt',
          title: '【全民大乐斗】新区开放公告',
          number: '1.1',
          timer: '2020/07/08 17:09:08',
        },
        {
          href: 'http://www.anlan.xyz:8080/update/2020/702.txt',
          title: '【全民大乐斗】7月2日更新公告',
          number: '2',
          timer: '2020/07/01 12:25:44',
        },
        {
          href: 'http://www.anlan.xyz:8080/update/2020/624.txt',
          title: '【全民大乐斗】6月24日更新公告',
          number: '3',
          timer: '2020/06/23 11:54:27',
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