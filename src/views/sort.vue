<template>
  <section class="sort-container">
    <div v-for="item in sortData" :key="item.sort" class="sort-item">
      <div class="sort-title">{{ item.sort }}</div>
      <div class="sort-name">{{ item.name }}</div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      sortData: [
        {
          sort: '1号',
          name: '有点白',
        },
        {
          sort: '2号',
          name: '有点白',
        },
        {
          sort: '3号',
          name: '有点白',
        },
        {
          sort: '4号',
          name: '有点白',
        },
        {
          sort: '5号',
          name: '有点白',
        },
        {
          sort: '6号',
          name: '有点白',
        },
        {
          sort: '7号',
          name: '有点白',
        },
        {
          sort: '8号',
          name: '有点白',
        },
        {
          sort: '9号',
          name: '有点白',
        },
        {
          sort: '10号',
          name: '有点白',
        },
        {
          sort: '11号',
          name: '有点白',
        },
        {
          sort: '12号',
          name: '有点白',
        },
        {
          sort: '13号',
          name: '有点白',
        },
        {
          sort: '14号',
          name: '有点白',
        },
        {
          sort: '15号',
          name: '有点白',
        },
        {
          sort: '16号',
          name: '有点白',
        },
        {
          sort: '17号',
          name: '有点白',
        },
        {
          sort: '18号',
          name: '有点白',
        },
        {
          sort: '19号',
          name: '有点白',
        },
        {
          sort: '20号',
          name: '有点白',
        },
        {
          sort: '21号',
          name: '有点白',
        },
        {
          sort: '22号',
          name: '有点白',
        },
        {
          sort: '23号',
          name: '有点白',
        },
        {
          sort: '24号',
          name: '有点白',
        },
        {
          sort: '25号',
          name: '有点白',
        },
        {
          sort: '26号',
          name: '有点白',
        },
        {
          sort: '27号',
          name: '有点白',
        },
        {
          sort: '28号',
          name: '有点白',
        },
        {
          sort: '29号',
          name: '有点白',
        },
        {
          sort: '30号',
          name: '有点白',
        },
        {
          sort: '31号',
          name: '有点白',
        },
        {
          sort: '32号',
          name: '有点白',
        },
        {
          sort: '33号',
          name: '有点白',
        },
        {
          sort: '34号',
          name: '有点白',
        },
        {
          sort: '35号',
          name: '有点白',
        },
        {
          sort: '36号',
          name: '有点白',
        },
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.sort-container {
  display: flex;
  width: 600px;
  flex-wrap: wrap;
  height: 600px;
  margin-top: 50px;
}
.sort-item {
  width: 100px;
  height: 100px;
}
.sort-title, .sort-name {
  height: 50px;
  line-height: 50px;
  text-align: center;
}
.sort-title {
  font-family: "Times New Roman"
}
.sort-name {
  font-size: 18px;
  font-family: "KaiTi"
}
</style>