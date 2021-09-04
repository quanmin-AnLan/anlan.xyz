<template>
  <section class="main-container">
    <div class="head">
      <div class="title">输入一共有几条：</div>
      <el-input v-model="number" @input="born(number)"></el-input>
    </div>
    <div class="content">
      <span class="title" v-if="number !== 0">填入：</span>
      <div class="content-box">
        <div v-for="(item, index) in arr" :key="index">
          <el-input v-model="arr[index]"></el-input>
        </div>
      </div>
    </div>
    <el-button @click="compute(arr)" v-if="number !== 0">开始计算</el-button>
    <div class="head" v-if="number !== 0">
      <div class="title">结果：</div>
      <el-input v-model="result"></el-input>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      number: 0,
      arr: [],
      result: 0,
    };
  },
  methods: {
    compute(arr) {
      let base = 1;
      let one = 1;
      for (let i = 0; i < arr.length; i++) {
        one = 1 - arr[i] / 100;
        base = base * one;
        if (i === arr.length - 1) {
          this.result = (1 - base) * 100;
        }
      }
    },
    born(num) {
      const lastArr = this.arr;
      this.arr = [];
      for (let i = 0; i < num; i++) {
        this.arr.push(lastArr[i] ? lastArr[i] : 0);
      }
    },
  },
  mounted() {
    this.compute(this.arr);
  },
};
</script>
<style lang="less" scoped>
.main-container {
  width: 600px
}
.head {
  width: 100%;
  display: flex;
  height: 40px;
  line-height: 40px;
  margin: 30px 0;
  .title {
    width: 150px;
    text-align: right;
    color: yellow;
  }
}
.content {
  display: flex;
  line-height: 40px;
  margin-bottom: 30px;
  .title {
    width: 150px;
    text-align: right;
    color: blue;
  }
  .content-box {
    max-width: 450px;
    display: flex;
    flex-wrap: wrap;
  }
}
.el-input {
  width: 80px;
}
</style>