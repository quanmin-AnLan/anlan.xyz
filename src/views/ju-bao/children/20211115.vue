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
      day: '15',
      tableData: [
        {
          area: '微信小程序10区',
          uid: '71858131',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/1115/1.jpg?imagelim',
          times: '初犯',
        },
      ],
    };
  },
};
</script>