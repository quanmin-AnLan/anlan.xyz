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
      day: '14',
      tableData: [
        {
          area: '空间3区',
          uid: '6329984',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1214/2.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间3区',
          uid: '3557987',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1214/3.jpg?imagelim',
          times: '第2次',
        },
        {
          area: '空间4区',
          uid: '4014885',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1214/1.jpg?imagelim',
          times: '第2次',
        },
        {
          area: 'QQ小程序区',
          uid: '7022181',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1214/4.jpg?imagelim',
          times: '初犯',
        },
      ],
    };
  },
};
</script>