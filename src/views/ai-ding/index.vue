<template>
  <section class="main">
    <Nav></Nav>
    <section class="container">
      <section class="left-container">
        <section class="rank">
          <div class="title">闯关英雄榜</div>
          <Table :tableData="rankData" :headerSet="rankSet"></Table>
        </section>
        <section class="list">
          
        </section>
      </section>
      <section class="right-container">
        <Table :tableData="qaData" :headerSet="qaSet"></Table>
        <el-pagination v-show="qaData.length>0" 
          hide-on-single-page 
          class="pagination"
          :background="true" 
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange" 
          :current-page="currentPage"
          :page-sizes="[5, 10, 50, 100]"
          :page-size="pageSize" 
          layout="slot, prev, pager, next, jumper"
          :total="total">
          <span class="el-pagination__total">共{{Math.ceil(total/10)}}页</span>
        </el-pagination>
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
          width: '100px',
        },
        {
          prop: 'diff',
          label: '难度',
          width: '100px',
        },
        {
          prop: 'success',
          label: '通关',
          width: '100px',
        },
      ],
      total: 0,
      pageSize: 10,
      currentPage: 1,
      rankData: [],
      rankSet: [
        {
          prop: 'nick',
          label: '英雄昵称',
        },
        {
          prop: 'number',
          label: '通关数',
          width: '100px',
        },
        {
          prop: 'last_finish_time',
          label: '通关日期',
          width: '100px',
        },
        {
          prop: 'sort',
          label: '排行',
          width: '100px',
        },
      ],
    };
  },
  methods: {
    question() {
      questionList({page: this.currentPage, count: this.pageSize}).then((res) => {
        this.total = res.allcount;
        this.qaData = res.infos.map((item) => {
          return {
            datatime: item.datatime.replace('T', ' '),
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
            last_finish_time: item.last_finish_time.replace('T', ' '),
            nick: item.nick || 'null',
            number: item.number,
            sort: res.data.indexOf(item),
          };
        });
      });
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.question();
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.question();
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