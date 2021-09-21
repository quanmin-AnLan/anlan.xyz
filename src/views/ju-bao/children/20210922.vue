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
      day: '22',
      tableData: [
        {
          area: '微信小程序10区',
          uid: '46190133',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0922/6.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序11区',
          uid: '35812145',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0922/5.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间1区',
          uid: '2579442',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0922/2.jpg?imagelim',
          times: '第2次',
        },
        {
          area: '空间1区',
          uid: '6851419',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0922/3.jpg?imagelim',
          times: '第3次',
        },
        {
          area: '空间4区',
          uid: '7537485',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0922/1.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '手q区',
          uid: '6986814',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0922/4.jpg?imagelim',
          times: '第2次',
        },
      ],
    };
  },
};
</script>