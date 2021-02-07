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
      day: '8',
      tableData: [
        {
          area: '微信小程序1区',
          uid: '9611781',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0208/1.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序10区',
          uid: '81642138',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0208/2.jpg?imagelim',
          times: '初犯',
        },
      ],
    };
  },
};
</script>