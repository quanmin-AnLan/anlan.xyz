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
      day: '20',
      tableData: [
        {
          area: '微信小程序1区',
          uid: '9567670',
          img: 'http://anlan.xyz:8080/images/jubao/20200820/001.jpg',
          times: '初犯',
        },
        {
          area: '微信小程序1区',
          uid: '6320644',
          img: 'http://anlan.xyz:8080/images/jubao/20200820/002.jpg',
          times: '初犯',
        },
      ],
    };
  },
};
</script>