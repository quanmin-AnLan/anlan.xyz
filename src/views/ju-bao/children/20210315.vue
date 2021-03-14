<template>
  <section>
    <al-jb :tableData="tableData" :year="year" :month="month" :day="day"></al-jb>
  </section>
</template>

<script>
import AlJb from '@/utils/jubao-tool.vue';
export default {
  components: {
    AlJb,
  },
  data() {
    return {
      year: '2021',
      month: '3',
      day: '15',
      tableData: [
        {
          area: '空间3区',
          uid: '8048277',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0315/1.jpg?imagelim',
          times: '初犯',
        },
      ],
    };
  },
};
</script>