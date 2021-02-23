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
      month: '2',
      day: '22',
      tableData: [
        {
          area: '微信小程序1区',
          uid: '5818680',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0222/1.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序1区',
          uid: '2165222',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0222/4.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序2区',
          uid: '66951101',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0222/5.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序11区',
          uid: '28062167',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0222/2.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序11区',
          uid: '79326152',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0222/3.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序11区',
          uid: '11455166',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0222/6.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间3区',
          uid: '3716684',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0222/7.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信H5区',
          uid: '444516',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0222/8.jpg?imagelim',
          times: '初犯',
        },
      ],
    };
  },
};
</script>