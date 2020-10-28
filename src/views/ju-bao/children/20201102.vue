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
      day: '2',
      tableData: [
        {
          area: '微信小程序1区',
          uid: '1505361',
          img: 'http://www.anlan.xyz:8080/images/jubao/20201102/006.jpg',
          times: '初犯',
        },
        {
          area: '微信小程序1区',
          uid: '6934552',
          img: 'http://www.anlan.xyz:8080/images/jubao/20201102/004.jpg',
          times: '初犯',
        },
        {
          area: '微信小程序1区',
          uid: '6254330',
          img: 'http://www.anlan.xyz:8080/images/jubao/20201102/007.jpg',
          times: '初犯',
        },
        {
          area: '微信小程序1区',
          uid: '3102885',
          img: 'http://www.anlan.xyz:8080/images/jubao/20201102/010.jpg',
          times: '初犯',
        },
        {
          area: '微信小程序8区',
          uid: '70877137',
          img: 'http://www.anlan.xyz:8080/images/jubao/20201102/008.jpg',
          times: '第2次',
        },
        {
          area: '微信小程序10区',
          uid: '93576116',
          img: 'http://www.anlan.xyz:8080/images/jubao/20201102/009.jpg',
          times: '初犯',
        },
        {
          area: '微信小程序10区',
          uid: '90865154',
          img: 'http://www.anlan.xyz:8080/images/jubao/20201102/001.jpg',
          times: '初犯',
        },
        {
          area: '微信小程序10区',
          uid: '61803176',
          img: 'http://www.anlan.xyz:8080/images/jubao/20201102/002.jpg',
          times: '第2次',
        },
        {
          area: '空间3区',
          uid: '3557987',
          img: 'http://www.anlan.xyz:8080/images/jubao/20201102/005.jpg',
          times: '初犯',
        },
        {
          area: '空间4区',
          uid: '3868186',
          img: 'http://www.anlan.xyz:8080/images/jubao/20201102/003.jpg',
          times: '初犯',
        },
      ],
    };
  },
};
</script>