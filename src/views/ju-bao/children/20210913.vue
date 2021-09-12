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
      month: '9',
      day: '13',
      tableData: [
        {
          area: '微信小程序2区',
          uid: '9640799',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0913/9.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序11区',
          uid: '62957168',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0913/8.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序12区',
          uid: '19701146',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0913/10.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间1区',
          uid: '5335414',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0913/1.jpg?imagelim',
          times: '第2次',
        },
        {
          area: '空间1区',
          uid: '2269331',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0913/2.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间1区',
          uid: '2579442',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0913/5.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间1区',
          uid: '4817855',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0913/6.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间1区',
          uid: '3033465',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0913/7.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间4区',
          uid: '3736886',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0913/3.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '手q区',
          uid: '5835617',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0913/4.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '手q区',
          uid: '7540625',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0913/11.jpg?imagelim',
          times: '第2次',
        },
      ],
    };
  },
};
</script>