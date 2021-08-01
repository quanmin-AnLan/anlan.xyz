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
      day: '2',
      tableData: [
        {
          area: '微信小程序1区',
          uid: '420578',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0802/4.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序4区',
          uid: '4139115',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0802/3.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序10区',
          uid: '20812157',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0802/5.jpg?imagelim',
          times: '第5次',
        },
        {
          area: '微信小程序10区',
          uid: '54905138',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0802/6.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序12区',
          uid: '26465147',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0802/7.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间4区',
          uid: '7721180',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0802/2.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '手q区',
          uid: '4589428',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0802/1.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '手q区',
          uid: '2693615',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0802/8.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '手q区',
          uid: '942015',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0802/9.jpg?imagelim',
          times: '初犯',
        },
      ],
    };
  },
};
</script>