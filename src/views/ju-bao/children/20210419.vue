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
      day: '19',
      tableData: [
        {
          area: '微信小程序1区',
          uid: '76845246',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0419/2.jpg?imagelim',
          times: '第3次',
        },
        {
          area: '微信小程序2区',
          uid: '29583134',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0419/1.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序2区',
          uid: '35248116',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0419/3.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序2区',
          uid: '854178',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0419/4.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序12区',
          uid: '10192135',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0419/7.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间1区',
          uid: '6851419',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0419/5.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间1区',
          uid: '8858142',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0419/6.jpg?imagelim',
          times: '初犯',
        },
      ],
    };
  },
};
</script>