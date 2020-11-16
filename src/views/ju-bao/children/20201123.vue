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
          area: '微信小程序11区',
          uid: '31488175',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1123/1.jpg?imagelim',
          times: '第3次',
        },
        {
          area: '空间1区',
          uid: '4102414',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1123/2.jpg?imagelim',
          times: '初犯',
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