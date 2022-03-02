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
      day: '21',
      tableData: [
        {
          area: '空间3区',
          uid: '5784486',
          img: 'http://img.anlan.xyz/ledou/jubao/2022/0221/1.jpg?imagelim',
          times: '初犯',
        },
      ],
    };
  },
};
</script>