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
      month: '2',
      day: '1',
      tableData: [
        {
          area: '微信小程序3区',
          uid: '6697839',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0201/1.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序3区',
          uid: '58341165',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0201/5.jpg?imagelim',
          times: '第4次',
        },
        {
          area: '微信小程序9区',
          uid: '86313131',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0201/2.jpg?imagelim',
          times: '第2次',
        },
        {
          area: '微信小程序10区',
          uid: '60785148',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0201/3.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序10区',
          uid: '10908161',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0201/8.jpg?imagelim',
          times: '第4次',
        },
        {
          area: '微信小程序10区',
          uid: '45198140',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0201/9.jpg?imagelim',
          times: '第2次',
        },
        {
          area: '微信小程序11区',
          uid: '85389166',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0201/6.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序11区',
          uid: '75417130',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0201/7.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序11区',
          uid: '54721165',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0201/10.jpg?imagelim',
          times: '第2次',
        },
        {
          area: '空间4区',
          uid: '1103084',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0201/4.jpg?imagelim',
          times: '第2次',
        },
      ],
    };
  },
};
</script>