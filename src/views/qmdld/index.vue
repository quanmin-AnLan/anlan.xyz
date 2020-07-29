<template>
  <section class="main">
    <section class="container">
      <section class="left-container">
        <al-table :tableData="update" :headerSet="updateSet"></al-table>
      </section>
      <section class="right-container"></section>
    </section>
    <Home></Home>
    <el-button @click="push">点击模拟有点白武林结果</el-button>
    <el-dialog title="说明" :visible.sync="show" width="30%">
      <div style="font-size: 18px;">由于安澜比较懒，所以只展示最近3次更新公告</div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="setLocalStorage">关闭且不再提示</el-button>
        <el-button type="primary" @click="dialogClose">关闭</el-button>
      </span>
    </el-dialog>
  </section>
</template>

<script>
import Home from '../../components/GoHome.vue';
import AlTable from '@/components/AlTable.vue';
export default {
  components: {
    Home,
    AlTable,
  },
  data() {
    return {
      show: false,
      updateSet: [
        {
          prop: 'number',
          label: '最新',
          width: '50px',
        },
        {
          prop: 'url',
          label: '更新公告',
        },
        {
          prop: 'timer',
          label: '上传时间',
          width: '100px',
        },
      ],
      update: [
        {
          href: 'http://www.anlan.xyz:8080/update/2020/730.txt',
          title: '【全民大乐斗】7月30日更新公告',
          number: '1',
          timer: '2020/07/29 14:09:08',
        },
        {
          href: 'http://www.anlan.xyz:8080/update/2020/723.txt',
          title: '【全民大乐斗】7月23日更新公告',
          number: '2',
          timer: '2020/07/22 15:57:44',
        },
        {
          href: 'http://www.anlan.xyz:8080/update/2020/716.txt',
          title: '【全民大乐斗】7月16日更新公告',
          number: '3',
          timer: '2020/07/15 12:02:27',
        },
      ],
      times: 0,
      yin: 0,
    };
  },
  methods: {
    dialogClose() {
      this.show = false;
    },
    setLocalStorage() {
      this.dialogClose();
      window.localStorage.setItem('show', 'true');
    },
    checkLocalStorage() {
      const isClose = window.localStorage.getItem('show');
      if (isClose) {
        this.show = false;
      } else {
        this.show = true;
      }
    },
    random() {
      const a = Math.random() * 4;
      let b;
      if (a < 1) {
        b = '青龙';
      } else if (a > 1 && a < 2) {
        b = '白虎';
      } else if (a > 2 && a < 3) {
        b = '朱雀';
      } else if (a > 3) {
        b = '玄武';
      }
      return b;
    },
    push() {
      this.times = this.times + 1;
      const q = '有点白：';
      const w = '有点猪：';
      const e = '有点菜：';
      const r = '执手余生：';
      const a = this.random();
      const b = this.random();
      const c = this.random();
      const d = this.random();
      console.log('第' + this.times + '届');
      console.log(q + a + '，' + w + b + '，' + e + c + '，' + r + d);
      if (a === b) {
        console.log('有点白被有点猪打败了');
      } else {
        const pk1 = Math.random();
        const pk2 = Math.random();
        if (a === c) {
          if (pk1 < 0.5) {
            console.log('有点白战胜了有点菜');
            if (a === d) {
              if (pk2 < 0.8) {
                console.log('有点白战胜了执手余生');
                this.yin = this.yin + 1;
              } else {
                console.log('有点白被执手余生打败了');
              }
            } else {
              this.yin = this.yin + 1;
            }
          } else {
            console.log('有点白被有点菜打败了');
          }
        } else {
          if (a === d) {
            if (pk2 < 0.8) {
              console.log('有点白战胜了执手余生');
              if (a === c) {
                if (pk1 < 0.5) {
                  console.log('有点白战胜了有点菜');
                  this.yin = this.yin + 1;
                } else {
                  console.log('有点白被有点菜打败了');
                }
              } else {
                this.yin = this.yin + 1;
              }
            } else {
              console.log('有点白被执手余生打败了');
            }
          } else {
            console.log('有点白轮空了');
            this.yin = this.yin + 1;
          }
        }
      }
      console.log('有点白共获得了' + this.yin + '个印');
    },
  },
  mounted() {
    this.checkLocalStorage();
  },
};
</script>

<style lang="less" scoped>
@import '../../less/qmdld/index.less';
</style>