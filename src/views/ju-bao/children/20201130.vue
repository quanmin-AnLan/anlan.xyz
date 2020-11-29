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
      day: '30',
      tableData: [
        {
          area: '微信小程序1区',
          uid: '29555127',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1130/2.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序3区',
          uid: '2265493',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1130/6.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序9区',
          uid: '86313131',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1130/5.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序10区',
          uid: '27915136',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1130/4.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间3区',
          uid: '2974475',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1130/1.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间3区',
          uid: '3476678',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1130/3.jpg?imagelim',
          times: '初犯',
        },
      ],
    };
  },
};
</script>