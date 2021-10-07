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
      month: '10',
      day: '8',
      tableData: [
        {
          area: '微信小程序2区',
          uid: '66469112',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/1008/3.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序6区',
          uid: '7841484',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/1008/1.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序11区',
          uid: '35812145',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/1008/4.jpg?imagelim',
          times: '第2次',
        },
        {
          area: '微信小程序12区',
          uid: '62914140',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/1008/2.jpg?imagelim',
          times: '第2次',
        },
        {
          area: 'qq小程序区',
          uid: '45675108',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/1008/8.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间4区',
          uid: '94778107',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/1008/5.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间4区',
          uid: '9610095',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/1008/7.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间5区',
          uid: '35611113',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/1008/6.jpg?imagelim',
          times: '初犯',
        },
      ],
    };
  },
};
</script>