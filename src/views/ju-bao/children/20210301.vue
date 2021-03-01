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
      day: '1',
      tableData: [
        {
          area: '微信小程序1区',
          uid: '50351163',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0301/1.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序1区',
          uid: '95348105',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0301/4.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序1区',
          uid: '76845246',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0301/5.jpg?imagelim',
          times: '第2次',
        },
        {
          area: '微信小程序1区',
          uid: '3127985',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0301/8.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序1区',
          uid: '504708',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0301/11.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序10区',
          uid: '27604165',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0301/3.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序10区',
          uid: '82936150',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0301/10.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间3区',
          uid: '8119276',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0301/7.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间4区',
          uid: '5500975',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0301/2.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间4区',
          uid: '9406685',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0301/9.jpg?imagelim',
          times: '第2次',
        },
        {
          area: '空间4区',
          uid: '2875687',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0301/6.jpg?imagelim',
          times: '第2次',
        },
      ],
    };
  },
};
</script>