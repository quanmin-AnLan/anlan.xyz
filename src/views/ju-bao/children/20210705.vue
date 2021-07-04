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
      month: '7',
      day: '5',
      tableData: [
        {
          area: '微信小程序1区',
          uid: '71178269',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0705/6.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序1区',
          uid: '76845246',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0705/9.jpg?imagelim',
          times: '第4次',
        },
        {
          area: '微信小程序10区',
          uid: '72481134',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0705/4.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序11区',
          uid: '92225153',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0705/5.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序11区',
          uid: '80739145',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0705/10.jpg?imagelim',
          times: '第2次',
        },
        {
          area: '微信小程序12区',
          uid: '23198171',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0705/7.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序12区',
          uid: '62914140',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0705/8.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间3区',
          uid: '2000785',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0705/11.jpg?imagelim',
          times: '第2次',
        },
        {
          area: '空间3区',
          uid: '1994380',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0705/12.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间4区',
          uid: '4410793',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0705/2.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间4区',
          uid: '87879101',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0705/3.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '手q区',
          uid: '903387',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0705/1.jpg?imagelim',
          times: '第2次',
        },
      ],
    };
  },
};
</script>