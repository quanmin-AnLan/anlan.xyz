<template>
  <section class="main-page">
    <header>琳璃出品 必属精品</header>
    <div class="linli-box">
      <div class="linli-item" v-for="item in linliData" :key="item.id">
        <a :href="item.href" target="_blank">{{item.title}}</a>
      </div>
    </div>
    <Home></Home>
    <el-dialog title="说明" :visible.sync="isShow" width="30%">
      <div>本页图片作者均为琳璃，安澜只是搬运工</div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="setLocalStorage">关闭且不再提示</el-button>
        <el-button type="primary" @click="dialogClose">关闭</el-button>
      </span>
    </el-dialog>
  </section>
</template>

<script>
  import Home from '../../components/GoHome.vue';
  export default {
    components: {
      Home,
    },
    data() {
      return {
        linliData: [
          {
            id: 1,
            title: '强化',
            href: 'http://img.anlan.xyz/ledou/linli/qianghua.png?imageslim',
          },
          {
            id: 2,
            title: '精炼',
            href: 'http://img.anlan.xyz/ledou/linli/jinglian.png?imageslim',
          },
          {
            id: 3,
            title: '密卷',
            href: 'http://img.anlan.xyz/ledou/linli/mijuan.png?imageslim',
          },
          {
            id: 4,
            title: '召唤兽',
            href: 'http://img.anlan.xyz/ledou/linli/zhaohuanshou.png?imageslim',
          },
          {
            id: 5,
            title: '经脉',
            href: 'http://img.anlan.xyz/ledou/linli/jingmai.jpg?imageslim',
          },
          {
            id: 6,
            title: '帮派',
            href: 'http://img.anlan.xyz/ledou/linli/bangpai.png?imageslim',
          },
          {
            id: 7,
            title: '修炼管',
            href: 'http://img.anlan.xyz/ledou/linli/xiu.png?imageslim',
          },
          {
            id: 8,
            title: '遗迹',
            href: 'http://img.anlan.xyz/ledou/linli/yiji.png?imageslim',
          },
          {
            id: 9,
            title: '押镖',
            href: 'http://img.anlan.xyz/ledou/linli/yabiao.png?imageslim',
          },
          {
            id: 10,
            title: '华山论剑',
            href: 'http://img.anlan.xyz/ledou/linli/huashan.png?imageslim',
          },
          {
            id: 11,
            title: '结界',
            href: 'http://img.anlan.xyz/ledou/linli/fuwen.png?imageslim',
          },
          {
            id: 12,
            title: '法阵',
            href: 'http://img.anlan.xyz/ledou/linli/fazhen.png?imageslim',
          },
          {
            id: 13,
            title: '剑魂',
            href: 'http://img.anlan.xyz/ledou/linli/jianhun.png?imageslim',
          },
          {
            id: 14,
            title: '游历',
            href: 'http://img.anlan.xyz/ledou/linli/youli.jpg?imageslim',
          },
          {
            id: 15,
            title: '随从',
            href: 'http://img.anlan.xyz/ledou/linli/suicong.jpg?imageslim',
          },
        ],
        isShow: false,
      };
    },
    methods: {
      dialogClose() {
        this.isShow = false;
      },
      setLocalStorage() {
        this.dialogClose();
        window.localStorage.setItem('isCloseLinli', 'true');
      },
      checkLocalStorage() {
        const isClose = window.localStorage.getItem('isCloseLinli');
        if (isClose) {
          this.isShow = false;
        } else {
          this.isShow = true;
        }
      },
    },
    mounted() {
      this.checkLocalStorage();
    },
  };
</script>

<style lang="less" scoped>
.main-page {
  width: 100%;
}
header {
  height: 80px;
  line-height: 80px;
  font-size: 30px;
}
.linli-box {
  margin-top: 50px;
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  .linli-item {
    height: 100px;
    line-height: 100px;
    width: 240px;
    background: rgba(255, 255, 255, 0.5);
    a {
      display: block;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      border: 1px solid #abcdef;
    }
  }
}
/deep/ .el-dialog {
  .el-dialog__body {
    padding: 20px;
    div {
      text-align: left;
      font-size: 16px;
      margin: 10px 0;
    }
  }
}
</style>