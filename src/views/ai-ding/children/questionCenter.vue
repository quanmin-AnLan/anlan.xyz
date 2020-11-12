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
import { questionList, ranking, struggle, yyxQuestion } from '@/api/api';
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
          prop: 'difficulty',
          label: '难度',
          width: '100px',
          sortable: 'sortable',
        },
        {
          prop: 'finish',
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
        0: '#008000',
        1: '#28bf28',
        2: 'blue',
        3: '#f00',
        4: '#980000',
      },
      diffMap: {
        0: '非常简单',
        1: '简单',
        2: '中等',
        3: '困难',
        4: '非常困难',
      },
      specialMap: {
        1: '（第一届比赛题目）'
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
      yyxQuestion({page: this.currentPage}).then((res) => {
        this.qaData = res.data.map((item) => {
          return {
            difficulty: this.diffMap[item.difficulty],
            colordifficulty: this.colorMap[item.difficulty],
            href: 'http://match.yuanrenxue.com/match/' + item.number,
            finish: item.finish || '未登录',
            title: item.title + this.specialMap[item.special],
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