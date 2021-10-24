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
      month: '10',
      day: '25',
      tableData: [
        {
          area: '微信小程序1区',
          uid: '3935639',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/1025/1.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序1区',
          uid: '71178269',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/1025/2.jpg?imagelim',
          times: '第4次',
        },
        {
          area: '微信小程序1区',
          uid: '74006366',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/1025/3.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序1区',
          uid: '85342156',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/1025/6.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序12区',
          uid: '94958153',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/1025/4.jpg?imagelim',
          times: '第2次',
        },
        {
          area: '微信H5区',
          uid: '320624',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/1025/5.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间4区',
          uid: '9610095',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/1025/7.jpg?imagelim',
          times: '第2次',
        },
      ],
    };
  },
};
</script>