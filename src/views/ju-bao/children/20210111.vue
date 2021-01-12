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
      day: '11',
      tableData: [
        {
          area: '微信小程序1区',
          uid: '41137308',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0111/6.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序1区',
          uid: '3672654',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0111/11.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序3区',
          uid: '58341165',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0111/9.jpg?imagelim',
          times: '第3次',
        },
        {
          area: '微信小程序3区',
          uid: '3622428',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0111/10.jpg?imagelim',
          times: '第3次',
        },
        {
          area: '微信小程序4区',
          uid: '4806815',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0111/7.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序7区',
          uid: '35205133',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0111/8.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序10区',
          uid: '90865154',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0111/2.jpg?imagelim',
          times: '第2次',
        },
        {
          area: '微信小程序10区',
          uid: '46596144',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0111/4.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序10区',
          uid: '45198140',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0111/12.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间3区',
          uid: '9195992',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0111/5.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间4区',
          uid: '9406685',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0111/3.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '手Q区',
          uid: '703971',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0111/1.jpg?imagelim',
          times: '初犯',
        },
      ],
    };
  },
};
</script>