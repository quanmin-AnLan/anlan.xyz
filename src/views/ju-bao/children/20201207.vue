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
      month: '12',
      day: '7',
      tableData: [
        {
          area: '微信小程序8区',
          uid: '43433130',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1207/2.jpg?imagelim',
          times: '第6次',
        },
        {
          area: '微信小程序11区',
          uid: '29735175',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1207/1.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间2区',
          uid: '7958064',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1207/3.jpg?imagelim',
          times: '初犯',
        },
      ],
    };
  },
};
</script>