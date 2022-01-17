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
      year: '2022',
      month: '1',
      day: '10',
      tableData: [
        {
          area: '空间5区',
          uid: '18098110',
          img: 'http://img.anlan.xyz/ledou/jubao/2022/0110/1.jpg?imagelim',
          times: '初犯',
        },
      ],
    };
  },
};
</script>