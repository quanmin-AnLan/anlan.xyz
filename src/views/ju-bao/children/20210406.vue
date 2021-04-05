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
      month: '4',
      day: '6',
      tableData: [
        {
          area: '微信小程序2区',
          uid: '1752841',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0406/3.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序11区',
          uid: '65719163',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0406/1.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序11区',
          uid: '24746152',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0406/2.jpg?imagelim',
          times: '初犯',
        },
      ],
    };
  },
};
</script>