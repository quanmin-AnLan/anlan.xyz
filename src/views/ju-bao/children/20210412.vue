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
      month: '4',
      day: '12',
      tableData: [
        {
          area: '空间1区',
          uid: '6253052',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0412/3.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间1区',
          uid: '8833159',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0412/4.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间3区',
          uid: '1212878',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0412/5.jpg?imagelim',
          times: '第2次',
        },
        {
          area: '微信小程序3区',
          uid: '94342110',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0412/6.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信10区',
          uid: '22909131',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0412/7.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信11区',
          uid: '84569137',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0412/2.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信H5区',
          uid: '728531',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0412/1.jpg?imagelim',
          times: '初犯',
        },
      ],
    };
  },
};
</script>