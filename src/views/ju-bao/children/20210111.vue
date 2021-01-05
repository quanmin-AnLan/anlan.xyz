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
      month: '1',
      day: '11',
      tableData: [
        {
          area: '微信小程序10区',
          uid: '90865154',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0111/2.jpg?imagelim',
          times: '第2次',
        },
        {
          area: '微信小程序10区',
          uid: '46596144',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0111/4.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间4区',
          uid: '9406685',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0111/3.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '手Q区',
          uid: '703971',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0111/1.jpg?imagelim',
          times: '初犯',
        },
      ],
    };
  },
};
</script>