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
      month: '8',
      day: '23',
      tableData: [
        {
          area: '手q区',
          uid: '6986814',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0823/1.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '手q区',
          uid: '846962',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0823/2.jpg?imagelim',
          times: '第3次',
        },
        {
          area: '手q区',
          uid: '334683',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0823/3.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间4区',
          uid: '33577115',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0823/4.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间4区',
          uid: '4378298',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0823/5.jpg?imagelim',
          times: '初犯',
        },
      ],
    };
  },
};
</script>