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
          area: '微信小程序1区',
          uid: '468149',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1109/6.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序2区',
          uid: '840341',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1109/8.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序7区',
          uid: '80680113',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1109/3.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序10区',
          uid: '10908161',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1109/7.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序11区',
          uid: '44420147',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1109/2.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '手Q区',
          uid: '6202127',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1109/4.jpg?imagelim',
          times: '初犯',
        },
        {
          area: 'QQ小程序区',
          uid: '3093061',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1109/5.jpg?imagelim',
          times: '第2次',
        },
      ],
    };
  },
};
</script>