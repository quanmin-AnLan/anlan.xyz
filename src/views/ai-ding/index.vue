<template>
  <section class="main">
    <Nav></Nav>
    <section class="container">
      <section class="left-container">
        <section class="rank">
          <div class="title">闯关英雄榜</div>
          <al-table :tableData="rankData" :headerSet="rankSet"></al-table>
        </section>
        <section class="list">
          <div class="title">奋战中的勇士</div>
          <div v-for="item in listData" :key="item.sort" class="list-box">
            <div class="list-item">勇士【{{item.nick}}】斩获了第{{item.number}}关BOSS的首级</div>
          </div>
        </section>
      </section>
      <section class="right-container">
        <al-table :tableData="qaData" :headerSet="qaSet"></al-table>
        <el-pagination v-show="qaData.length>0" 
          hide-on-single-page 
          class="pagination"
          :background="true" 
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange" 
          :current-page="currentPage"
          :page-sizes="[5, 10]"
          :page-size="pageSize" 
          layout="slot, sizes, prev, pager, next, jumper"
          :total="total">
          <span class="el-pagination__total">共{{Math.ceil(total/pageSize)}}页</span>
        </el-pagination>
      </section>
    </section>
    <el-dialog title="说明" :visible.sync="isShow" width="30%">
      <div>本页为vue重构爱锭网（www.python-spider.com）</div>
      <div>由于版权原因，题目需要登录至爱锭网才可查看</div>
      <div>点击登录/注册直接跳转爱锭网正式登录/注册页</div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="setLocalStorage">关闭且不再提示</el-button>
        <el-button type="primary" @click="dialogClose">关闭</el-button>
      </span>
    </el-dialog>
    <Home></Home>
  </section>
</template>

<script>
import Home from '@/components/GoHome.vue';
import Nav from './components/Nav.vue';
import AlTable from '@/components/AlTable.vue';
import { questionList, ranking, struggle } from '@/api/api';
export default {
  components: {
    Nav,
    AlTable,
    Home,
  },
  data() {
    return {
      isShow: false,
      qaData: [],
      qaSet: [
        {
          prop: 'url',
          label: '题目',
          align: 'left',
        },
        {
          prop: 'datatime',
          label: '发布时间',
          width: '100px',
          sortable: 'sortable',
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
    dialogClose() {
      this.isShow = false;
    },
    setLocalStorage() {
      this.dialogClose();
      window.localStorage.setItem('isClose', 'true');
    },
    checkLocalStorage() {
      const isClose = window.localStorage.getItem('isClose');
      if (isClose) {
        this.isShow = false;
      } else {
        this.isShow = true;
      }
    },
  },
  mounted() {
    this.question();
    this.rank();
    this.list();
    this.checkLocalStorage();
  },
};
</script>

<style lang="less" scoped>
@import '../../less/ai-ding/index.less';
</style>