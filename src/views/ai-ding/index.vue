<template>
  <section class="main">
    <Nav></Nav>
    <section class="container">
      <section class="left-container">
        <section class="rank">
          <Table :tableData="rankData" :headerSet="rankSet"></Table>
        </section>
        <section class="list">
          
        </section>
      </section>
      <section class="right-container">
        <Table :tableData="qaData" :headerSet="qaSet"></Table>
      </section>
    </section>
  </section>
</template>

<script>
import Nav from './components/Nav.vue';
import Table from './components/Table.vue';
export default {
  components: {
    Nav,
    Table,
  },
  data() {
    return {
      qaData: [
        {
          datatime: '2020-03-30T13:25:00',
          diff: '简单',
          href: 'http://www.python-spider.com/challenge/1',
          success: true,
          title: '【1.headers参数加密】无混淆的加密模式',
        },
      ],
      qaSet: [
        {
          prop: 'question',
          label: '题目',
          align: 'left',
        },
        {
          prop: 'datatime',
          label: '发布时间',
        },
        {
          prop: 'diff',
          label: '难度',
        },
        {
          prop: 'success',
          label: '通关',
        },
      ],
      rankData: [
        {
          last_finish_time: '2020-05-25T20:50:37',
          nick: '包子xia',
          number: 12,
        },
      ],
      rankSet: [
        {
          prop: 'nick',
          label: '英雄昵称',
        },
        {
          prop: 'number',
          label: '通关数',
        },
        {
          prop: 'last_finish_time',
          label: '通关日期',
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
@import '../../less/ai-ding/index.less';
</style>