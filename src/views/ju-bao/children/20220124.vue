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
      month: '1',
      day: '24',
      tableData: [
        {
          area: '微信小程序1区',
          uid: '7620138',
          img: 'http://img.anlan.xyz/ledou/jubao/2022/0124/8.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序1区',
          uid: '732287',
          img: 'http://img.anlan.xyz/ledou/jubao/2022/0124/9.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序1区',
          uid: '27440358',
          img: 'http://img.anlan.xyz/ledou/jubao/2022/0124/10.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序1区',
          uid: '5102443',
          img: 'http://img.anlan.xyz/ledou/jubao/2022/0124/11.jpg?imagelim',
          times: '第4次',
        },
        {
          area: '微信小程序1区',
          uid: '93043369',
          img: 'http://img.anlan.xyz/ledou/jubao/2022/0124/12.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序1区',
          uid: '2198111',
          img: 'http://img.anlan.xyz/ledou/jubao/2022/0124/13.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序1区',
          uid: '9386640',
          img: 'http://img.anlan.xyz/ledou/jubao/2022/0124/14.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序1区',
          uid: '3078412',
          img: 'http://img.anlan.xyz/ledou/jubao/2022/0124/15.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序1区',
          uid: '84393342',
          img: 'http://img.anlan.xyz/ledou/jubao/2022/0124/16.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间4区',
          uid: '3111294',
          img: 'http://img.anlan.xyz/ledou/jubao/2022/0124/1.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间4区',
          uid: '9172382',
          img: 'http://img.anlan.xyz/ledou/jubao/2022/0124/2.jpg?imagelim',
          times: '第2次',
        },
        {
          area: '空间4区',
          uid: '96697115',
          img: 'http://img.anlan.xyz/ledou/jubao/2022/0124/3.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间4区',
          uid: '42553103',
          img: 'http://img.anlan.xyz/ledou/jubao/2022/0124/4.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间5区',
          uid: '32808106',
          img: 'http://img.anlan.xyz/ledou/jubao/2022/0124/5.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间5区',
          uid: '62089104',
          img: 'http://img.anlan.xyz/ledou/jubao/2022/0124/6.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间5区',
          uid: '60612118',
          img: 'http://img.anlan.xyz/ledou/jubao/2022/0124/7.jpg?imagelim',
          times: '初犯',
        },
      ],
    };
  },
};
</script>