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
      month: '11',
      day: '8',
      tableData: [
        {
          area: '微信小程序1区',
          uid: '50351163',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/1108/1.jpg?imagelim',
          times: '第3次',
        },
        {
          area: '空间4区',
          uid: '80645110',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/1108/2.jpg?imagelim',
          times: '初犯',
        },
      ],
    };
  },
};
</script>