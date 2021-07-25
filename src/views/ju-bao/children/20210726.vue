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
      month: '7',
      day: '26',
      tableData: [
        {
          area: '微信小程序1区',
          uid: '74222196',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0726/3.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序4区',
          uid: '7348511',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0726/4.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间4区',
          uid: '52905100',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0726/1.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间4区',
          uid: '51798100',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0726/2.jpg?imagelim',
          times: '第2次',
        },
      ],
    };
  },
};
</script>