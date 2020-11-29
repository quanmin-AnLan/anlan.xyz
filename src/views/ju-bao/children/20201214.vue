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
          area: '你猜',
          uid: '你猜',
          img: 'http://img.anlan.xyz/null.jpg?imagelim',
          times: '你猜',
        },
      ],
    };
  },
};
</script>