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
      year: '2022',
      month: '1',
      day: '4',
      tableData: [
        {
          area: '空间4区',
          uid: '9172382',
          img: 'http://img.anlan.xyz/ledou/jubao/2022/0104/1.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序1区',
          uid: '9838142',
          img: 'http://img.anlan.xyz/ledou/jubao/2022/0104/2.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序2区',
          uid: '5669072',
          img: 'http://img.anlan.xyz/ledou/jubao/2022/0104/3.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序12区',
          uid: '64082190',
          img: 'http://img.anlan.xyz/ledou/jubao/2022/0104/4.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序12区',
          uid: '81938187',
          img: 'http://img.anlan.xyz/ledou/jubao/2022/0104/5.jpg?imagelim',
          times: '初犯',
        },
      ],
    };
  },
};
</script>