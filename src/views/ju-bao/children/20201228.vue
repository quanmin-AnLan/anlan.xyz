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
      month: '12',
      day: '28',
      tableData: [
        {
          area: '微信小程序1区',
          uid: '5102443',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1228/4.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序3区',
          uid: '748821',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1228/6.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序3区',
          uid: '3622428',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1228/7.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序3区',
          uid: '58341165',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1228/8.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序4区',
          uid: '522397',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1228/3.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序10区',
          uid: '10908161',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1228/2.jpg?imagelim',
          times: '第2次',
        },
        {
          area: '微信小程序10区',
          uid: '10998139',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1228/5.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序10区',
          uid: '60374139',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1228/9.jpg?imagelim',
          times: '第2次',
        },
        {
          area: '空间4区',
          uid: '6638087',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1228/1.jpg?imagelim',
          times: '初犯',
        },
      ],
    };
  },
};
</script>