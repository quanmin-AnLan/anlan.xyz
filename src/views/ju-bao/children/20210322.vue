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
      day: '22',
      tableData: [
        {
          area: '微信小程序1区',
          uid: '1209134',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0322/3.jpg?imagelim',
          times: '第2次',
        },
        {
          area: '微信小程序10区',
          uid: '18307126',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0322/2.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序10区',
          uid: '80495117',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0322/4.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序10区',
          uid: '57875172',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0322/6.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序10区',
          uid: '64594137',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0322/9.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序10区',
          uid: '14740153',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0322/11.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序11区',
          uid: '27911148',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0322/8.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序11区',
          uid: '58037164',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0322/10.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间3区',
          uid: '9131281',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0322/5.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '手q区',
          uid: '846962',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0322/1.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '手q区',
          uid: '1585230',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0322/7.jpg?imagelim',
          times: '第2次',
        },
      ],
    };
  },
};
</script>