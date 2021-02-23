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
      day: '1',
      tableData: [
        {
          area: '微信小程序1区',
          uid: '50351163',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0301/1.jpg?imagelim',
          times: '初犯',
        },
      ],
    };
  },
};
</script>