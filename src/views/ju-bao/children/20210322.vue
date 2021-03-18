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
      month: '3',
      day: '22',
      tableData: [
        {
          area: '微信小程序1区',
          uid: '1209134',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0322/3.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序10区',
          uid: '18307126',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0322/2.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序10区',
          uid: '80495117',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0322/4.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '手q区',
          uid: '846962',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0322/1.jpg?imagelim',
          times: '初犯',
        },
      ],
    };
  },
};
</script>