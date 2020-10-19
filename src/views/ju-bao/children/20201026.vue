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
      year: '2020',
      month: '10',
      day: '26',
      tableData: [
        {
          area: '微信小程序8区',
          uid: '68643110',
          img: 'http://www.anlan.xyz:8080/images/jubao/20201026/001.jpg',
          times: '初犯',
        },
      ],
    };
  },
};
</script>