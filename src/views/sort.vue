<template>
  <section class="main-container">
    <section class="sort-container">
      <div v-for="item in sortData" :key="item.sort" class="sort-item">
        <div class="sort-title">{{ item.sort }}</div>
        <div class="sort-area">{{item.area}}</div>
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
          sort: '1号',
          area: '空1',
          name: '有点白',
        },
        {
          sort: '2号',
          area: '空1',
          name: '有点白',
        },
        {
          sort: '3号',
          area: '空1',
          name: '有点白',
        },
        {
          sort: '4号',
          area: '空1',
          name: '有点白',
        },
        {
          sort: '5号',
          area: '空1',
          name: '有点白',
        },
        {
          sort: '6号',
          area: '空1',
          name: '有点白',
        },
        {
          sort: '7号',
          area: '空1',
          name: '有点白',
        },
        {
          sort: '8号',
          area: '空1',
          name: '有点白',
        },
        {
          sort: '9号',
          area: '空1',
          name: '有点白',
        },
        {
          sort: '10号',
          area: '空1',
          name: '有点白',
        },
        {
          sort: '11号',
          area: '空1',
          name: '有点白',
        },
        {
          sort: '12号',
          area: '空1',
          name: '有点白',
        },
        {
          sort: '13号',
          area: '空1',
          name: '有点白',
        },
        {
          sort: '14号',
          area: '空1',
          name: '有点白',
        },
        {
          sort: '15号',
          area: '空1',
          name: '有点白',
        },
        {
          sort: '16号',
          area: '空1',
          name: '有点白',
        },
        {
          sort: '17号',
          area: '空1',
          name: '有点白',
        },
        {
          sort: '18号',
          area: '空1',
          name: '有点白',
        },
        {
          sort: '19号',
          area: '空1',
          name: '有点白',
        },
        {
          sort: '20号',
          area: '空1',
          name: '有点白',
        },
        {
          sort: '21号',
          area: '空1',
          name: '有点白',
        },
        {
          sort: '22号',
          area: '空1',
          name: '有点白',
        },
        {
          sort: '23号',
          area: '空1',
          name: '有点白',
        },
        {
          sort: '24号',
          area: '空1',
          name: '有点白',
        },
        {
          sort: '25号',
          area: '空1',
          name: '有点白',
        },
        {
          sort: '26号',
          area: '空1',
          name: '有点白',
        },
        {
          sort: '27号',
          area: '空1',
          name: '有点白',
        },
        {
          sort: '28号',
          area: '空1',
          name: '有点白',
        },
        {
          sort: '29号',
          area: '空1',
          name: '有点白',
        },
        {
          sort: '30号',
          area: '空1',
          name: '有点白',
        },
        {
          sort: '31号',
          area: '空1',
          name: '有点白',
        },
        {
          sort: '32号',
          area: '空1',
          name: '有点白',
        },
        {
          sort: '33号',
          area: '空1',
          name: '有点白',
        },
        {
          sort: '34号',
          area: '空1',
          name: '有点白',
        },
        {
          sort: '35号',
          area: '空1',
          name: '有点白',
        },
        {
          sort: '36号',
          area: '空1',
          name: '有点白',
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.main-container {
  width: 100%;
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
  width: 16%;
  height: 16%;
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