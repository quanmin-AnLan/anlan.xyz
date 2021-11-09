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
      month: '10',
      day: '11',
      tableData: [
        {
          area: '微信H5区',
          uid: '327492',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/1011/1.jpg?imagelim',
          times: '初犯',
        },
      ],
    };
  },
};
</script>