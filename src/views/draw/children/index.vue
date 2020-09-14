<template>
  <section class="box">
    <router-view></router-view>
  </section>
</template>

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
</style>