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
      day: '19',
      tableData: [
        {
          area: '微信小程序4区',
          uid: '942201',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0719/3.jpg?imagelim',
          times: '第2次',
        },
        {
          area: '微信小程序5区',
          uid: '6680852',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0719/7.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序10区',
          uid: '22909131',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0719/4.jpg?imagelim',
          times: '第3次',
        },
        {
          area: '微信小程序11区',
          uid: '14010163',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0719/5.jpg?imagelim',
          times: '第2次',
        },
        {
          area: '微信小程序12区',
          uid: '72709162',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0719/6.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间3区',
          uid: '2871279',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0719/8.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间4区',
          uid: '5210692',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0719/1.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间4区',
          uid: '8147392',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0719/2.jpg?imagelim',
          times: '第2次',
        },
      ],
    };
  },
};
</script>