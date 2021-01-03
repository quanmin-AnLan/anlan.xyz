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
      month: '1',
      day: '4',
      tableData: [
        {
          area: '微信小程序3区',
          uid: '58341165',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0104/3.jpg?imagelim',
          times: '第2次',
        },
        {
          area: '微信小程序3区',
          uid: '3622428',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0104/4.jpg?imagelim',
          times: '第2次',
        },
        {
          area: '微信小程序7区',
          uid: '30350128',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0104/5.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序10区',
          uid: '20812157',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0104/1.jpg?imagelim',
          times: '第3次',
        },
        {
          area: '微信小程序10区',
          uid: '10908161',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0104/2.jpg?imagelim',
          times: '第3次',
        },
        {
          area: '微信小程序10区',
          uid: '47507156',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0104/6.jpg?imagelim',
          times: '初犯',
        },
      ],
    };
  },
};
</script>