<template>
  <section class="container">
    <section class="left-container">
      <section class="rank">
        <div class="title">英雄排行榜</div>
        <al-table :tableData="rankData" :headerSet="rankSet"></al-table>
      </section>
      <section class="list">
        <div class="title">奋战中的勇士</div>
        <div v-for="item in listData" :key="item.sort" class="list-box">
          <div class="list-item">勇士【{{item.nick}}】于{{item.last_finish_time}}通过了第{{item.number}}关！</div>
        </div>
      </section>
    </section>
    <section class="middle-container">
      <al-table :tableData="qaData" :headerSet="qaSet"></al-table>
      <al-pagination
        :total="total"
        :sizes="sizes"
        :currentPage.sync="currentPage"
        :pageSize.sync="pageSize"
        v-on:update:pageSize="question"
        v-on:update:currentPage="question">
      </al-pagination>
    </section>
    <section class="right-container">
      <section class="rank">
        <div class="title">数据总览</div>
        <al-table :tableData="rankData" :headerSet="rankSet"></al-table>
      </section>
      <section class="list">
        <div class="title">题目总览</div>
        <div v-for="item in listData" :key="item.sort" class="list-box">
          <div class="list-item">勇士【{{item.nick}}】于{{item.last_finish_time}}通过了第{{item.number}}关！</div>
        </div>
      </section>
    </section>
  </section>
</template>

<script>
import AlTable from '@/components/AlTable.vue';
import AlPagination from '@/components/AlPagination.vue';
import { questionList, ranking, struggle } from '@/api/api';
export default {
  components: {
    AlTable,
    AlPagination,
  },
  data() {
    return {
      qaData: [],
      qaSet: [
        {
          prop: 'number',
          label: '#',
          width: '80px',
          sortable: 'sortable',
        },
        {
          prop: 'category',
          label: '类型',
          width: '120px',
          sortable: 'sortable',
        },
        {
          prop: 'url',
          label: '题目',
          align: 'left',
        },
        {
          prop: 'datatime',
          label: '发布时间',
          width: '150px',
          sortable: 'sortable',
        },
        {
          prop: 'diff',
          label: '难度',
          width: '100px',
          sortable: 'sortable',
        },
        {
          prop: 'pass_number',
          label: '通关人数',
          width: '80px',
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
      sizes: [5, 10],
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
          width: '150px',
        },
        {
          prop: 'sort',
          label: '排行',
          width: '100px',
        },
      ],
      listData: [],
      colorMap: {
        困难: '#ec4c47',
        中等: '#ed7366',
        简单: '#009975',
      },
      sortMap: {
        0: 'http://www.python-spider.com/static/crawl/assets/logo/top1.png',
        1: 'http://www.python-spider.com/static/crawl/assets/logo/top2.png',
        2: 'http://www.python-spider.com/static/crawl/assets/logo/top3.png',
      },
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
            colordiff: this.colorMap[item.diff],
            href: item.href,
            pass_number: item.pass_number,
            success: item.success || '未登录',
            title: item.title,
            number: item.number,
            category: item.category,
          };
        });
      });
    },
    rank() {
      ranking().then((res) => {
        this.rankData = res.data.map((item) => {
          return {
            nick: item.nick || 'null',
            number: item.number,
            last_finish_time: item.last_finish_time.replace('T', ' '),
            sort: this.sortMap[res.data.indexOf(item)] || '',
          };
        });
      });
    },
    list() {
      struggle().then((res) => {
        this.listData = res.data.map((item) => {
          return {
            nick: item.nick || 'null',
            number: item.challenge_number,
            last_finish_time: item.last_finish_time.replace('T', ' '),
            sort: res.data.indexOf(item),
          };
        });
      });
    },
  },
  mounted() {
    this.question();
    this.rank();
    this.list();
  },
};
</script>

<style lang="less" scoped>
@import '../../../less/ai-ding/children/questionCenter.less';
</style>