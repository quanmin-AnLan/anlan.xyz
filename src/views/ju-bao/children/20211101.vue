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
      day: '1',
      tableData: [
        {
          area: '微信小程序1区',
          uid: '37068351',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/1101/1.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间5区',
          uid: '93411117',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/1101/2.jpg?imagelim',
          times: '初犯',
        },
      ],
    };
  },
};
</script>