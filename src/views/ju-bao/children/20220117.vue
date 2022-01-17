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
      day: '17',
      tableData: [
        {
          area: '微信小程序1区',
          uid: '10364101',
          img: 'http://img.anlan.xyz/ledou/jubao/2022/0117/9.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序2区',
          uid: '94967119',
          img: 'http://img.anlan.xyz/ledou/jubao/2022/0117/5.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序2区',
          uid: '66951101',
          img: 'http://img.anlan.xyz/ledou/jubao/2022/0117/6.jpg?imagelim',
          times: '第2次',
        },
        {
          area: '微信小程序2区',
          uid: '5669072',
          img: 'http://img.anlan.xyz/ledou/jubao/2022/0117/7.jpg?imagelim',
          times: '第2次',
        },
        {
          area: '微信小程序10区',
          uid: '71858131',
          img: 'http://img.anlan.xyz/ledou/jubao/2022/0117/4.jpg?imagelim',
          times: '第3次',
        },
        {
          area: '微信小程序12区',
          uid: '81938187',
          img: 'http://img.anlan.xyz/ledou/jubao/2022/0117/1.jpg?imagelim',
          times: '第2次',
        },
        {
          area: '空间2区',
          uid: '2710244',
          img: 'http://img.anlan.xyz/ledou/jubao/2022/0117/3.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间2区',
          uid: '6069451',
          img: 'http://img.anlan.xyz/ledou/jubao/2022/0117/8.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间5区',
          uid: '17226112',
          img: 'http://img.anlan.xyz/ledou/jubao/2022/0117/2.jpg?imagelim',
          times: '初犯',
        },
      ],
    };
  },
};
</script>