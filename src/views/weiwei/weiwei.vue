<template>
  <section class="main">
    <al-table :headerSet="headerSet" :tableData="tableData"></al-table>
    <Home></Home>
  </section>
</template>

<script>
import AlTable from '@/components/AlTable.vue';
import Home from '../../components/GoHome.vue';
export default {
  components: {
    AlTable,
    Home,
  },
  data() {
    return {
      headerSet: [
        {
          prop: 'question',
          label: '问题',
        },
        {
          prop: 'answer',
          label: '答案',
        },
      ],
      tableData: [
        {
          question: '挂脖耳机蓝牙选哪个',
          answer: 'HONOR xSport PRO',
        },
        {
          question: '如果挂脖耳机蓝牙选了也没连接上怎么办',
          answer: '把蓝牙耳机拆开插手机上连接',
        },
        {
          question: '小盒无线耳机蓝牙选哪个',
          answer: 'X-7',
        },
        {
          question: '百度文库如何复制vip文章',
          answer: '选中要复制的内容，点击翻译，再点击弹出框右下角的百度翻译，在百度翻译界面复制即可',
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
  padding: 30px;
  /deep/ .is-leaf {
    background: #506fbc;
    color: #fff;
  }
}
</style>
