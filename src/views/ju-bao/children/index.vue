<template>
  <section class="box">
    <router-view></router-view>
    <el-dialog title="说明" :visible.sync="isShow" width="30%">
      <div>此举报备案系统于2020.8.13-2020.8.17期间搭建完成</div>
      <div>2020.8.13及以前由于是word历史数据，故图片为标清</div>
      <div>2020.8.17-2020.10.26年久失修，图片丢失，隐藏入口</div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="setLocalStorage">关闭且不再提示</el-button>
        <el-button type="primary" @click="dialogClose">关闭</el-button>
      </span>
    </el-dialog>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    dialogClose() {
      this.isShow = false;
    },
    setLocalStorage() {
      this.dialogClose();
      window.localStorage.setItem('isCloseJubao', 'true');
    },
    checkLocalStorage() {
      const isClose = window.localStorage.getItem('isCloseJubao');
      if (isClose) {
        this.isShow = false;
      } else {
        this.isShow = true;
      }
    },
  },
  mounted() {
    this.checkLocalStorage();
  },
};
</script>

<style lang="less" scoped>
.box {
  width: 1200px;
  box-sizing: border-box;
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
      }
    }
  }
}
/deep/ .el-dialog {
  .el-dialog__body {
    padding: 20px;
    div {
      text-align: left;
      font-size: 16px;
      margin: 10px 0;
    }
  }
}
</style>