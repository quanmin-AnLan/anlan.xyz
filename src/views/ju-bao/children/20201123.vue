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
      month: '11',
      day: '23',
      tableData: [
        {
          area: '微信小程序3区',
          uid: '187711',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1123/9.jpg?imagelim',
          times: '第3次',
        },
        {
          area: '微信小程序8区',
          uid: '14064123',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1123/8.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序9区',
          uid: '42105135',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1123/6.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序11区',
          uid: '31488175',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1123/1.jpg?imagelim',
          times: '第3次',
        },
        {
          area: '微信小程序11区',
          uid: '97125130',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1123/5.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间1区',
          uid: '4102414',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1123/2.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间2区',
          uid: '5517170',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1123/10.jpg?imagelim',
          times: '第3次',
        },
        {
          area: '空间4区',
          uid: '27940108',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1123/7.jpg?imagelim',
          times: '第3次',
        },
        {
          area: '手Q区',
          uid: '135376',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1123/3.jpg?imagelim',
          times: '组队违规，直封3天',
        },
        {
          area: '手Q区',
          uid: '6202127',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1123/4.jpg?imagelim',
          times: '第2次',
        },
      ],
    };
  },
};
</script>