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
      day: '29',
      tableData: [
        {
          area: '微信小程序3区',
          uid: '417061',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0329/12.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序11区',
          uid: '58037164',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0329/2.jpg?imagelim',
          times: '第2次',
        },
        {
          area: '微信小程序11区',
          uid: '35485164',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0329/4.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序11区',
          uid: '19093161',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0329/7.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间1区',
          uid: '4102414',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0329/5.jpg?imagelim',
          times: '第3次',
        },
        {
          area: '空间3区',
          uid: '3557987',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0329/10.jpg?imagelim',
          times: '第3次',
        },
        {
          area: '空间4区',
          uid: '1913693',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0329/6.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间4区',
          uid: '7982991',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0329/8.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间4区',
          uid: '8565997',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0329/9.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间4区',
          uid: '8809580',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0329/11.jpg?imagelim',
          times: '第3次',
        },
        {
          area: '手q区',
          uid: '588188',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0329/1.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '手q区',
          uid: '846962',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0329/3.jpg?imagelim',
          times: '第2次',
        },
      ],
    };
  },
};
</script>