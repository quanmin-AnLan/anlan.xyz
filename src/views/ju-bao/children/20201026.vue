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
      day: '26',
      tableData: [
        {
          area: '微信小程序1区',
          uid: '76845246',
          img: 'http://www.anlan.xyz:8080/images/jubao/20201026/008.jpg',
          times: '初犯',
        },
        {
          area: '微信小程序1区',
          uid: '9567670',
          img: 'http://www.anlan.xyz:8080/images/jubao/20201026/011.jpg',
          times: '第2次',
        },
        {
          area: '微信小程序1区',
          uid: '41477345',
          img: 'http://www.anlan.xyz:8080/images/jubao/20201026/013.jpg',
          times: '初犯',
        },
        {
          area: '微信小程序1区',
          uid: '3199746',
          img: 'http://www.anlan.xyz:8080/images/jubao/20201026/017.jpg',
          times: '第4次',
        },
        {
          area: '微信小程序1区',
          uid: '48440326',
          img: 'http://www.anlan.xyz:8080/images/jubao/20201026/018.jpg',
          times: '初犯',
        },
        {
          area: '微信小程序3区',
          uid: '187711',
          img: 'http://www.anlan.xyz:8080/images/jubao/20201026/006.jpg',
          times: '初犯',
        },
        {
          area: '微信小程序7区',
          uid: '48681124',
          img: 'http://www.anlan.xyz:8080/images/jubao/20201026/014.jpg',
          times: '第2次',
        },
        {
          area: '微信小程序8区',
          uid: '68643110',
          img: 'http://www.anlan.xyz:8080/images/jubao/20201026/001.jpg',
          times: '初犯',
        },
        {
          area: '微信小程序8区',
          uid: '70877137',
          img: 'http://www.anlan.xyz:8080/images/jubao/20201026/007.jpg',
          times: '初犯',
        },
        {
          area: '微信小程序8区',
          uid: '43433130',
          img: 'http://www.anlan.xyz:8080/images/jubao/20201026/016.jpg',
          times: '第5次',
        },
        {
          area: '微信小程序11区',
          uid: '31488175',
          img: 'http://www.anlan.xyz:8080/images/jubao/20201026/002.jpg',
          times: '第2次',
        },
        {
          area: '微信小程序11区',
          uid: '54721165',
          img: 'http://www.anlan.xyz:8080/images/jubao/20201026/009.jpg',
          times: '第2次',
        },
        {
          area: '空间2区',
          uid: '8136255',
          img: 'http://www.anlan.xyz:8080/images/jubao/20201026/004.jpg',
          times: '初犯',
        },
        {
          area: '空间3区',
          uid: '1212878',
          img: 'http://www.anlan.xyz:8080/images/jubao/20201026/015.jpg',
          times: '初犯',
        },
        {
          area: '空间4区',
          uid: '5746177',
          img: 'http://www.anlan.xyz:8080/images/jubao/20201026/003.jpg',
          times: '第2次',
        },
        {
          area: '空间4区',
          uid: '2249892',
          img: 'http://www.anlan.xyz:8080/images/jubao/20201026/005.jpg',
          times: '初犯',
        },
        {
          area: '空间4区',
          uid: '6378893',
          img: 'http://www.anlan.xyz:8080/images/jubao/20201026/010.jpg',
          times: '初犯',
        },
        {
          area: '空间4区',
          uid: '4796991',
          img: 'http://www.anlan.xyz:8080/images/jubao/20201026/012.jpg',
          times: '初犯',
        },
      ],
    };
  },
};
</script>