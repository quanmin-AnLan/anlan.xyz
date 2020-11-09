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
      month: '11',
      day: '16',
      tableData: [
        {
          area: '空间4区',
          uid: '27940108',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1116/1.jpg?imagelim',
          times: '第2次',
        },
      ],
    };
  },
};
</script>