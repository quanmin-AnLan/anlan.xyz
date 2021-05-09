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
      day: '6',
      tableData: [
        {
          area: '微信小程序1区',
          uid: '80203144',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0506/3.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序10区',
          uid: '86279143',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0506/2.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间1区',
          uid: '372191',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0506/1.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '手q区',
          uid: '812132',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0506/4.jpg?imagelim',
          times: '初犯',
        },
      ],
    };
  },
};
</script>