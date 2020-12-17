<template>
  <section class="main-container">
    <section class="sort-container">
      <div v-for="(item, index) in sortData" :key="index" class="sort-item">
        <div class="sort-title">{{ index + 1 }}号</div>
        <div class="sort-area">{{item.area}}区</div>
        <div class="sort-name">{{ item.name }}</div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      sortData: [
        {
          area: '空间1',
          name: '有点白',
        },
        {
          area: '空间1',
          name: '有点黑',
        },
        {
          area: '空间1',
          name: '有点甜',
        },
        {
          area: '空间1',
          name: '有点虎',
        },
        {
          area: '空间1',
          name: '杨广庆',
        },
        {
          area: '空间2',
          name: '有点苏',
        },
        {
          area: '空间2',
          name: '小金刚',
        },
        {
          area: '空间2',
          name: '天枢星',
        },
        {
          area: '空间2',
          name: '天天',
        },
        {
          area: '空间2',
          name: '空杯',
        },
        {
          area: '空间3',
          name: '七七',
        },
        {
          area: '空间3',
          name: '白齐',
        },
        {
          area: '空间4',
          name: '宁亡',
        },
        {
          area: '空间4',
          name: '-Q',
        },
        {
          area: '微信1',
          name: '有点卡',
        },
        {
          area: '微信3',
          name: '有点慢',
        },
        {
          area: '微信6',
          name: '有点帅',
        },
        {
          area: '微信7',
          name: '有点皮',
        },
        {
          area: '微信7',
          name: '有点水',
        },
        {
          area: '微信8',
          name: 'Marry',
        },
        {
          area: '微信9',
          name: '戒酒的李白',
        },
        {
          area: '微信9',
          name: '霜冷九州斩',
        },
        {
          area: '微信9',
          name: '执念',
        },
        {
          area: '微信10',
          name: '有点纯',
        },
        {
          area: '微信10',
          name: '有点坑',
        },
        {
          area: '微信10',
          name: '东方',
        },
        {
          area: '微信10',
          name: '梦天帝',
        },
        {
          area: 'QQ小程序',
          name: '有点肉',
        },
        {
          area: 'QQ小程序',
          name: '有点紫',
        },
        {
          area: 'QQ小程序',
          name: 'Sasuke',
        },
        {
          area: 'QQ小程序',
          name: '我不后悔',
        },
        {
          area: '手Q',
          name: '李时珍',
        },
        {
          area: '手Q',
          name: '夏目',
        },
        {
          area: '手Q',
          name: '勿念花',
        },
        {
          area: '手Q',
          name: '祈禾',
        },
        {
          area: '手Q',
          name: '五行缺钱',
        },
      ],
    };
  },
  mounted() {
    document.querySelector('.nav-main').style.display = 'none';
  },
};
</script>

<style lang="less" scoped>
.main-container {
  width: 100%;
  margin-top: -50px;
  background: linear-gradient(-45deg,#abcdef,#F9E79F, #ffc0cb,#afeeee);
  background-size: 400% 400%;
  animation: Gradient 8s ease infinite;
  @keyframes Gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
}
.sort-container {
  margin: 0 auto;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  height: 100%;
  justify-content: space-between;
}
.sort-item {
  width: 25%;
  height: 11.11%;
  border: 1px solid #b30d34;
  box-sizing: border-box;
}
.sort-title, .sort-name, .sort-area {
  display: flex;
  height: 33%;
  align-items: center;
  justify-content: center;
}
.sort-title, .sort-area {
  font-family: "Times New Roman"
}
.sort-name {
  font-family: "KaiTi"
}
</style>