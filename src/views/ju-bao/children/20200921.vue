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
      month: '9',
      day: '21',
      tableData: [
        {
          area: '微信小程序1区',
          uid: '5838159',
          img: 'http://anlan.xyz:8080/images/jubao/20200921/001.jpg',
          times: '初犯',
        },
        {
          area: '微信小程序1区',
          uid: '3847916',
          img: 'http://anlan.xyz:8080/images/jubao/20200921/006.jpg',
          times: '初犯',
        },
        {
          area: '微信小程序3区',
          uid: '3574125',
          img: 'http://anlan.xyz:8080/images/jubao/20200921/007.jpg',
          times: '初犯',
        },
        {
          area: '微信小程序8区',
          uid: '11818113',
          img: 'http://anlan.xyz:8080/images/jubao/20200921/003.jpg',
          times: '初犯',
        },
        {
          area: '微信小程序9区',
          uid: '12063124',
          img: 'http://anlan.xyz:8080/images/jubao/20200921/011.jpg',
          times: '初犯',
        },
        {
          area: '微信小程序10区',
          uid: '43717149',
          img: 'http://anlan.xyz:8080/images/jubao/20200921/002.jpg',
          times: '第2次',
        },
        {
          area: '微信小程序10区',
          uid: '80385131',
          img: 'http://anlan.xyz:8080/images/jubao/20200921/010.jpg',
          times: '初犯',
        },
        {
          area: '微信小程序11区',
          uid: '50077167',
          img: 'http://anlan.xyz:8080/images/jubao/20200921/004.jpg',
          times: '初犯',
        },
        {
          area: '微信小程序11区',
          uid: '33987142',
          img: 'http://anlan.xyz:8080/images/jubao/20200921/005.jpg',
          times: '第2次',
        },
        {
          area: '空间4区',
          uid: '27940108',
          img: 'http://anlan.xyz:8080/images/jubao/20200921/008.jpg',
          times: '初犯',
        },
        {
          area: '空间4区',
          uid: '9191098',
          img: 'http://anlan.xyz:8080/images/jubao/20200921/009.jpg',
          times: '初犯',
        },
      ],
    };
  },
};
</script>