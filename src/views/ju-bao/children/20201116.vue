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
      day: '16',
      tableData: [
        {
          area: '微信小程序1区',
          uid: '5888616',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1116/4.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序1区',
          uid: '14789347',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1116/7.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序11区',
          uid: '44420147',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1116/2.jpg?imagelim',
          times: '第2次',
        },
        {
          area: '微信小程序11区',
          uid: '19623139',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1116/3.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序11区',
          uid: '77755151',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1116/6.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间1区',
          uid: '479196',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1116/8.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间1区',
          uid: '9714511',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1116/9.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间4区',
          uid: '27940108',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1116/1.jpg?imagelim',
          times: '第2次',
        },
        {
          area: '空间4区',
          uid: '4553882',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1116/5.jpg?imagelim',
          times: '初犯',
        },
      ],
    };
  },
};
</script>