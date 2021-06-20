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
      day: '21',
      tableData: [
        {
          area: '微信小程序2区',
          uid: '35248116',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0621/6.jpg?imagelim',
          times: '第2次',
        },
        {
          area: '微信小程序2区',
          uid: '9612093',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0621/7.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序2区',
          uid: '29583134',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0621/8.jpg?imagelim',
          times: '第2次',
        },
        {
          area: '微信小程序5区',
          uid: '8340159',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0621/5.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间4区',
          uid: '51798100',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0621/2.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间4区',
          uid: '9859698',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0621/3.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间4区',
          uid: '35280110',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0621/4.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '手q区',
          uid: '703971',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0621/1.jpg?imagelim',
          times: '第3次',
        },
      ],
    };
  },
};
</script>