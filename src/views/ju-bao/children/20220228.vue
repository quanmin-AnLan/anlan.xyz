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
      month: '2',
      day: '28',
      tableData: [
        {
          area: '空间4区',
          uid: '87879101',
          img: 'http://img.anlan.xyz/ledou/jubao/2022/0228/1.jpg?imagelim',
          times: '第3次',
        },
      ],
    };
  },
};
</script>