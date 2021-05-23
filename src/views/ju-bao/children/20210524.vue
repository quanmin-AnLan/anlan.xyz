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
      month: '5',
      day: '24',
      tableData: [
        {
          area: '微信小程序1区',
          uid: '24046128',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0524/10.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序11区',
          uid: '33422132',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0524/9.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序12区',
          uid: '40745168',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0524/6.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序12区',
          uid: '53363175',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0524/7.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序12区',
          uid: '43269148',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0524/8.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间4区',
          uid: '8147392',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0524/1.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间4区',
          uid: '3583590',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0524/3.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间4区',
          uid: '8887087',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0524/4.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '手q区',
          uid: '5999320',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0524/2.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '手q区',
          uid: '945985',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0524/5.jpg?imagelim',
          times: '初犯',
        },
      ],
    };
  },
};
</script>