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
import { questionList, ranking } from '../../api/api';
import qs from 'qs';
export default {
  components: {
    Nav,
    Table,
  },
  data() {
    return {
      qaData: [],
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
  methods: {
    question() {
      questionList({page: 1, count: 10}).then((res) => {
        this.qaData = res.infos.map((item) => {
          return {
            datatime: item.datatime,
            diff: item.diff,
            href: item.href,
            success: item.success || '未登录',
            title: item.title,
          };
        });
      });
    },
    rank() {
      ranking().then((res) => {
        this.rankData = res.data.map((item) => {
          return {
            last_finish_time: item.last_finish_time,
            nick: item.nick || 'null',
            number: item.number,
          };
        });
      });
    },
  },
  mounted() {
    this.question();
    this.rank();
  },
};
</script>

<style lang="less" scoped>
@import '../../less/ai-ding/index.less';
</style>