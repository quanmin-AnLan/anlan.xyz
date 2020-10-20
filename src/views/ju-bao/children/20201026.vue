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
          area: '微信小程序3区',
          uid: '187711',
          img: 'http://www.anlan.xyz:8080/images/jubao/20201026/006.jpg',
          times: '初犯',
        },
        {
          area: '微信小程序8区',
          uid: '68643110',
          img: 'http://www.anlan.xyz:8080/images/jubao/20201026/001.jpg',
          times: '初犯',
        },
        {
          area: '微信小程序11区',
          uid: '31488175',
          img: 'http://www.anlan.xyz:8080/images/jubao/20201026/002.jpg',
          times: '第2次',
        },
        {
          area: '空间2区',
          uid: '5746177',
          img: 'http://www.anlan.xyz:8080/images/jubao/20201026/004.jpg',
          times: '第2次',
        },
        {
          area: '空间4区',
          uid: '5746177',
          img: 'http://www.anlan.xyz:8080/images/jubao/20201026/003.jpg',
          times: '第2次',
        },
        {
          area: '空间4区',
          uid: '2249892',
          img: 'http://www.anlan.xyz:8080/images/jubao/20201026/005.jpg',
          times: '初犯',
        },
      ],
    };
  },
};
</script>