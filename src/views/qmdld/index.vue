<template>
  <section class="main">
    <section class="container">
      <section class="left-container">
        <al-table :tableData="update" :headerSet="updateSet"></al-table>
      </section>
      <section class="right-container">
        <el-button @click="$router.push('/jubao')">稽查中心</el-button>
        <el-button @click="$router.push('/linli')">琳璃专栏</el-button>
        <!-- <el-button @click="$router.push('/draw')">抽奖中心</el-button> -->
        <!-- <el-button @click="random(arr.slice(0, 129), 20)">投票抽奖</el-button> -->
      </section>
    </section>
    <Home></Home>
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
      ],
      update: [
        {
          href: 'http://txt.anlan.xyz/ledou/update/2021/1014.txt',
          title: '【全民大乐斗】10月14日更新公告',
          number: '1',
        },
        {
          href: 'http://txt.anlan.xyz/ledou/update/2021/1007.txt',
          title: '【全民大乐斗】10月7日更新公告',
          number: '2',
        },
        {
          href: 'http://txt.anlan.xyz/ledou/update/2021/930.txt',
          title: '【全民大乐斗】9月30日更新公告',
          number: '3',
        },
      ],
      arr: [],
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
    // random(arr, num) {
    //   const len = arr.length;
    //   for (let i = len - 1; i >= 0; i--) {
    //     const randomIndex = Math.floor(Math.random() * (i + 1));
    //     const itemIndex = arr[randomIndex];
    //     arr[randomIndex] = arr[i];
    //     arr[i] = itemIndex;
    //   }
    //   const arrList = [];
    //   for (let i = 0; i < num; i++) {
    //     arrList.push(arr[i]);
    //   }
    //   for (let i = 1; i < arrList.length; i++) {
    //     for (let j = 0; j < arrList.length - 1; j++) {
    //       const temp = 0;
    //       if (arrList[j] > arrList[j + 1]) {
    //         temp = arrList[j];
    //         arrList[j] = arrList[j + 1];
    //         arrList[j + 1] = temp;
    //       }
    //     }
    //   }
    //   console.log(arrList);
    // },
    // arrPush(arr) {
    //   for (let i = 0; i < 1000; i++) {
    //     arr.push(i + 1);
    //   }
    //   return arr;
    // },
  },
  mounted() {
    this.checkLocalStorage();
    // this.arrPush(this.arr);
  },
};
</script>

<style lang="less" scoped>
@import '../../less/qmdld/index.less';
</style>