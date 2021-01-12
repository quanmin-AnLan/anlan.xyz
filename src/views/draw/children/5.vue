<template>
  <section>
    <al-dr :tableData="tableData" :num="num"></al-dr>
  </section>
</template>

<script>
import AlDr from '@/utils/draw-tool.vue';
export default {
  components: {
    AlDr,
  },
  data() {
    return {
      num: '5',
      threeData: [],
      fiveData: [],
      tableData: [
        {
          qq: '???',
          isDraw: '0',
          times: '1',
        },
      ],
    };
  },
  methods: {
    total(data) {
      for (const each of data) {
        if (each.times === '3') {
          this.threeData.push(each.qq);
        }
        if (each.items === '5') {
          this.fiveData.push(each.qq);
        }
      }
      const three = this.threeData.join(',') || '无';
      const five = this.fiveData.join(',') || '无';
      // console.log('连续猜中3次：', three);
      // console.log('连续猜中5次：', five);
    },
  },
  mounted() {
    this.total(this.tableData);
  },
};
</script>