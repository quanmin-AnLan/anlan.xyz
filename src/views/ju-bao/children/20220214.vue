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
      year: '2022',
      month: '2',
      day: '14',
      tableData: [
        {
          area: '微信小程序2区',
          uid: '459862',
          img: 'http://img.anlan.xyz/ledou/jubao/2022/0214/1.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序2区',
          uid: '9612093',
          img: 'http://img.anlan.xyz/ledou/jubao/2022/0214/2.jpg?imagelim',
          times: '第2次',
        },
        {
          area: '空间1区',
          uid: '3765059',
          img: 'http://img.anlan.xyz/ledou/jubao/2022/0214/3.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间1区',
          uid: '9440847',
          img: 'http://img.anlan.xyz/ledou/jubao/2022/0214/4.jpg?imagelim',
          times: '初犯',
        },
      ],
    };
  },
};
</script>