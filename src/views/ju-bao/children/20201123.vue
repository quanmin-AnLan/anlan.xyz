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
      day: '23',
      tableData: [
        {
          area: '微信小程序11区',
          uid: '31488175',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1123/1.jpg?imagelim',
          times: '第3次',
        },
      ],
    };
  },
};
</script>