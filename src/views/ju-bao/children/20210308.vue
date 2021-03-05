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
      day: '8',
      tableData: [
        {
          area: '微信小程序1区',
          uid: '50351163',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0308/3.jpg?imagelim',
          times: '第2次',
        },
        {
          area: '微信小程序1区',
          uid: '62515363',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0308/2.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序1区',
          uid: '86313131',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0308/6.jpg?imagelim',
          times: '第3次',
        },
        {
          area: '微信小程序11区',
          uid: '78045158',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0308/5.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间1区',
          uid: '4102414',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0308/4.jpg?imagelim',
          times: '第2次',
        },
        {
          area: '空间4区',
          uid: '9442079',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0308/1.jpg?imagelim',
          times: '初犯',
        },
      ],
    };
  },
};
</script>