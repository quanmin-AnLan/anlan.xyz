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
      month: '9',
      day: '27',
      tableData: [
        {
          area: '微信小程序1区',
          uid: '5102443',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0927/1.jpg?imagelim',
          times: '第2次',
        },
        {
          area: '微信小程序1区',
          uid: '94405381',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0927/2.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间1区',
          uid: '5335723',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0927/3.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间1区',
          uid: '8858142',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0927/4.jpg?imagelim',
          times: '第4次',
        },
        {
          area: '空间1区',
          uid: '5335414',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0927/5.jpg?imagelim',
          times: '第3次',
        },
      ],
    };
  },
};
</script>