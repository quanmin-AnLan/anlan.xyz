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
      month: '9',
      day: '28',
      tableData: [
        {
          area: '微信小程序1区',
          uid: '2424341',
          img: 'http://anlan.xyz:8080/images/jubao/20200928/002.jpg',
          times: '初犯',
        },
        {
          area: '微信小程序10区',
          uid: '20812157',
          img: 'http://anlan.xyz:8080/images/jubao/20200928/001.jpg',
          times: '初犯',
        },
      ],
    };
  },
};
</script>