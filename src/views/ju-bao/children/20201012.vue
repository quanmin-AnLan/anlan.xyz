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
      month: '10',
      day: '12',
      tableData: [
        {
          area: '微信小程序1区',
          uid: '282249',
          img: 'http://www.anlan.xyz:8080/images/jubao/20201012/001.jpg',
          times: '第2次',
        },
        {
          area: '微信小程序1区',
          uid: '5157473',
          img: 'http://www.anlan.xyz:8080/images/jubao/20201012/002.jpg',
          times: '初犯',
        },
        {
          area: '微信小程序5区',
          uid: '6474146',
          img: 'http://www.anlan.xyz:8080/images/jubao/20201012/004.jpg',
          times: '初犯',
        },
        {
          area: '微信小程序8区',
          uid: '56013118',
          img: 'http://www.anlan.xyz:8080/images/jubao/20201012/003.jpg',
          times: '初犯',
        },
        {
          area: '微信小程序8区',
          uid: '43433130',
          img: 'http://www.anlan.xyz:8080/images/jubao/20201012/007.jpg',
          times: '第3次',
        },
        {
          area: '空间1区',
          uid: '5946573',
          img: 'http://www.anlan.xyz:8080/images/jubao/20201012/006.jpg',
          times: '初犯',
        },
        {
          area: '空间3区',
          uid: '5335391',
          img: 'http://www.anlan.xyz:8080/images/jubao/20201012/008.jpg',
          times: '第2次',
        },
        {
          area: '空间4区',
          uid: '9684772',
          img: 'http://www.anlan.xyz:8080/images/jubao/20201012/005.jpg',
          times: '初犯',
        },
      ],
    };
  },
};
</script>