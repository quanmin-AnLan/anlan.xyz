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
      month: '6',
      day: '14',
      tableData: [
        {
          area: '微信小程序1区',
          uid: '6003323',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0615/6.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序1区',
          uid: '1853123',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0615/7.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间4区',
          uid: '7705793',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0615/1.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间4区',
          uid: '1223079',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0615/2.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间4区',
          uid: '43440102',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0615/3.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间4区',
          uid: '91089107',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0615/4.jpg?imagelim',
          times: '第2次',
        },
        {
          area: '空间4区',
          uid: '8629084',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0615/5.jpg?imagelim',
          times: '初犯',
        },
      ],
    };
  },
};
</script>