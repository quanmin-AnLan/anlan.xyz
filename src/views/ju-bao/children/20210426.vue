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
      day: '26',
      tableData: [
        {
          area: '微信小程序1区',
          uid: '34980246',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0426/5.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序3区',
          uid: '187711',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0426/6.jpg?imagelim',
          times: '第5次',
        },
        {
          area: '微信小程序10区',
          uid: '20812157',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0426/4.jpg?imagelim',
          times: '第4次',
        },
        {
          area: '空间1区',
          uid: '6851419',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0426/1.jpg?imagelim',
          times: '第2次',
        },
        {
          area: '空间1区',
          uid: '8858142',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0426/2.jpg?imagelim',
          times: '第2次',
        },
        {
          area: '空间1区',
          uid: '3835543',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0426/3.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间3区',
          uid: '3621991',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0426/7.jpg?imagelim',
          times: '初犯',
        },
      ],
    };
  },
};
</script>