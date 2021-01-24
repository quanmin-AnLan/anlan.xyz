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
      month: '1',
      day: '25',
      tableData: [
        {
          area: '微信小程序1区',
          uid: '5838159',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0125/3.jpg?imagelim',
          times: '第2次',
        },
        {
          area: '微信小程序1区',
          uid: '2424341',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0125/5.jpg?imagelim',
          times: '第2次',
        },
        {
          area: '微信小程序10区',
          uid: '46866141',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0125/4.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序11区',
          uid: '57865126',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0125/1.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序11区',
          uid: '94724169',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0125/6.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序11区',
          uid: '65193147',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0125/7.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序11区',
          uid: '71101173',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0125/8.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间4区',
          uid: '5362086',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0125/2.jpg?imagelim',
          times: '初犯',
        },
      ],
    };
  },
};
</script>