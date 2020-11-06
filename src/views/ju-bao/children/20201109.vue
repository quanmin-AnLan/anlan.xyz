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
      day: '9',
      tableData: [
        {
          area: '微信小程序1区',
          uid: '1691519',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1109/1.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序7区',
          uid: '80680113',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1109/3.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序11区',
          uid: '44420147',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1109/2.jpg?imagelim',
          times: '初犯',
        },
      ],
    };
  },
};
</script>