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
      month: '12',
      day: '21',
      tableData: [
        {
          area: '微信小程序1区',
          uid: '6974712',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1221/8.jpg?imagelim',
          times: '第3次',
        },
        {
          area: '微信小程序11区',
          uid: '28146164',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1221/5.jpg?imagelim',
          times: '第2次',
        },
        {
          area: '微信小程序11区',
          uid: '24755145',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1221/7.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间1区',
          uid: '5335414',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1221/2.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间3区',
          uid: '9245189',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1221/3.jpg?imagelim',
          times: '第2次',
        },
        {
          area: '空间4区',
          uid: '9519281',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1221/1.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间4区',
          uid: '4842582',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1221/4.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间4区',
          uid: '8485482',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1221/6.jpg?imagelim',
          times: '初犯',
        },
      ],
    };
  },
};
</script>