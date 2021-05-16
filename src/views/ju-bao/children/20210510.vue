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
      month: '5',
      day: '10',
      tableData: [
        {
          area: '微信小程序1区',
          uid: '9062723',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0510/3.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序11区',
          uid: '33599157',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0510/2.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间1区',
          uid: '7786425',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0510/4.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间4区',
          uid: '4766590',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0510/1.jpg?imagelim',
          times: '初犯',
        },
      ],
    };
  },
};
</script>