<template>
  <section class="container">
    <section class="left-container">
      <section class="rank">
        <div class="title">英雄排行榜</div>
        <al-table :tableData="rankData" :headerSet="rankSet"></al-table>
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
import { questionList, ranking, struggle, yyxQuestion, useRanking } from '@/api/api';
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
          prop: 'number',
          label: '排行',
        },
        {
          prop: 'nickname',
          label: '昵称',
        },
        {
          prop: 'challenge_number',
          label: '通关数',
          width: '100px',
        },
        {
          prop: 'finish_time',
          label: '通关日期',
          width: '150px',
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
        1: '#c13513',
        2: '#13c111',
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
        this.total = res.all_number;
        this.qaData = res.data.map((item) => {
          return {
            difficulty: this.diffMap[item.difficulty],
            colordifficulty: this.colorMap[item.difficulty],
            href: 'http://match.yuanrenxue.com/match/' + item.number,
            finish: item.finish || '未登录',
            title: item.title,
            colorcategory: this.specialMap[item.special],
            number: item.number,
            category: item.category,
          };
        });
      });
    },
    rank() {
      useRanking().then((res) => {
        const data = res.rank.slice(0, 12);
        this.rankData = data.map((item) => {
          return {
            nickname: item.nickname || 'null',
            challenge_number: item.challenge_number + '/13',
            finish_time: item.finish_time.replace('T', ' '),
            number: data.indexOf(item) + 1,
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