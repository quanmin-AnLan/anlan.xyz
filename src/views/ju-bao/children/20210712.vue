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
      day: '12',
      tableData: [
        {
          area: '微信小程序1区',
          uid: '71178269',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0712/5.jpg?imagelim',
          times: '第2次',
        },
        {
          area: '微信小程序1区',
          uid: '13018336',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0712/8.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序4区',
          uid: '942201',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0712/9.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序10区',
          uid: '70475145',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0712/6.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序11区',
          uid: '14010163',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0712/7.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信H5区',
          uid: '250932',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0712/4.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间3区',
          uid: '2277672',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0712/2.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间4区',
          uid: '1827081',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0712/3.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '手q区',
          uid: '1585230',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0712/1.jpg?imagelim',
          times: '第2次',
        },
      ],
    };
  },
};
</script>