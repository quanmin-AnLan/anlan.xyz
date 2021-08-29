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
      month: '8',
      day: '30',
      tableData: [
        {
          area: '微信小程序1区',
          uid: '17137300',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0830/1.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序1区',
          uid: '2993022',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0830/2.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序2区',
          uid: '2675786',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0830/3.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间4区',
          uid: '5503787',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0830/4.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间4区',
          uid: '4378298',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0830/6.jpg?imagelim',
          times: '第2次',
        },
        {
          area: '空间4区',
          uid: '6866155',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0830/7.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间4区',
          uid: '3440098',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0830/8.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '手q区',
          uid: '7726225',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0830/5.jpg?imagelim',
          times: '初犯',
        },
      ],
    };
  },
};
</script>