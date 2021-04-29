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
      month: '4',
      day: '30',
      tableData: [
        {
          area: '手q区',
          uid: '540581',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0430/1.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间1区',
          uid: '8858142',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0430/6.jpg?imagelim',
          times: '第3次',
        },
        {
          area: '空间3区',
          uid: '3716684',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0430/2.jpg?imagelim',
          times: '第2次',
        },
        {
          area: '空间3区',
          uid: '3621991',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0430/3.jpg?imagelim',
          times: '第2次',
        },
        {
          area: '空间3区',
          uid: '1212878',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0430/4.jpg?imagelim',
          times: '第3次',
        },
        {
          area: '空间3区',
          uid: '2000785',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0430/5.jpg?imagelim',
          times: '初犯',
        },
      ],
    };
  },
};
</script>