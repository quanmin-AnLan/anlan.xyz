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
      day: '7',
      tableData: [
        {
          area: '微信小程序1区',
          uid: '752855',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0607/9.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序1区',
          uid: '1505361',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0607/10.jpg?imagelim',
          times: '第2次',
        },
        {
          area: '微信小程序4区',
          uid: '9389518',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0607/6.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序10区',
          uid: '13029148',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0607/4.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序10区',
          uid: '58988175',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0607/5.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序10区',
          uid: '20431160',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0607/7.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序11区',
          uid: '80739145',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0607/8.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间2区',
          uid: '8170549',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0607/1.jpg?imagelim',
          times: '第2次',
        },
        {
          area: '空间4区',
          uid: '6908891',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0607/2.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间4区',
          uid: '91089107',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0607/3.jpg?imagelim',
          times: '初犯',
        },
      ],
    };
  },
};
</script>