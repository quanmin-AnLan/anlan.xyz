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
      month: '8',
      day: '31',
      tableData: [
        {
          area: 'aaaaa',
          uid: 'bbbbb',
          img: '',
          times: 'ccccc',
        },
      ],
    };
  },
};
</script>