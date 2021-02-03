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
      month: '2',
      day: '22',
      tableData: [
        {
          area: '你猜',
          uid: '你猜',
          img: 'http://img.anlan.xyz/null.jpg',
          times: '初犯',
        },
      ],
    };
  },
};
</script>