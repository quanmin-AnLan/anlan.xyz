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
      day: '31',
      tableData: [
        {
          area: '微信小程序2区',
          uid: '922981',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0531/3.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序10区',
          uid: '22909131',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0531/4.jpg?imagelim',
          times: '第2次',
        },
        {
          area: '空间2区',
          uid: '8170549',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0531/2.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '手q区',
          uid: '703971',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0531/1.jpg?imagelim',
          times: '第2次',
        },
      ],
    };
  },
};
</script>