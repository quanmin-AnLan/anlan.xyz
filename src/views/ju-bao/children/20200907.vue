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
      day: '7',
      tableData: [
        {
          area: '微信小程序1区',
          uid: '1593411',
          img: 'http://anlan.xyz:8080/images/jubao/20200907/004.jpg',
          times: '初犯',
        },
        {
          area: '微信小程序1区',
          uid: '1209134',
          img: 'http://anlan.xyz:8080/images/jubao/20200907/005.jpg',
          times: '第2次',
        },
        {
          area: '微信小程序10区',
          uid: '30150159',
          img: 'http://anlan.xyz:8080/images/jubao/20200907/001.jpg',
          times: '第2次',
        },
        {
          area: '微信H5区',
          uid: '235342',
          img: 'http://anlan.xyz:8080/images/jubao/20200907/002.jpg',
          times: '初犯',
        },
        {
          area: '空间3区',
          uid: '3385691',
          img: 'http://anlan.xyz:8080/images/jubao/20200907/003.jpg',
          times: '初犯',
        },
      ],
    };
  },
};
</script>