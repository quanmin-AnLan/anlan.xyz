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
      day: '6',
      tableData: [
        {
          area: '微信小程序1区',
          uid: '282249',
          img: 'http://www.anlan.xyz:8080/images/jubao/20201006/010.jpg',
          times: '初犯',
        },
        {
          area: '微信小程序4区',
          uid: '7493615',
          img: 'http://www.anlan.xyz:8080/images/jubao/20201006/009.jpg',
          times: '第3次',
        },
        {
          area: '微信小程序8区',
          uid: '43433130',
          img: 'http://www.anlan.xyz:8080/images/jubao/20201006/001.jpg',
          times: '第2次',
        },
        {
          area: '微信小程序10区',
          uid: '84178156',
          img: 'http://www.anlan.xyz:8080/images/jubao/20201006/002.jpg',
          times: '第2次',
        },
        {
          area: '微信小程序10区',
          uid: '60374139',
          img: 'http://www.anlan.xyz:8080/images/jubao/20201006/004.jpg',
          times: '初犯',
        },
        {
          area: '微信小程序10区',
          uid: '17644157',
          img: 'http://www.anlan.xyz:8080/images/jubao/20201006/003.jpg',
          times: '初犯',
        },
        {
          area: '微信小程序11区',
          uid: '49740176',
          img: 'http://www.anlan.xyz:8080/images/jubao/20201006/006.jpg',
          times: '初犯',
        },
        {
          area: '微信小程序11区',
          uid: '77888147',
          img: 'http://www.anlan.xyz:8080/images/jubao/20201006/005.jpg',
          times: '初犯',
        },
        {
          area: '空间3区',
          uid: '8271481',
          img: 'http://www.anlan.xyz:8080/images/jubao/20201006/007.jpg',
          times: '初犯',
        },
        {
          area: '空间3区',
          uid: '8902869',
          img: 'http://www.anlan.xyz:8080/images/jubao/20201006/008.jpg',
          times: '初犯',
        },
        {
          area: '空间3区',
          uid: '5225073',
          img: 'http://www.anlan.xyz:8080/images/jubao/20201006/012.jpg',
          times: '第2次',
        },
        {
          area: '空间3区',
          uid: '5335391',
          img: 'http://www.anlan.xyz:8080/images/jubao/20201006/013.jpg',
          times: '初犯',
        },
      ],
    };
  },
};
</script>