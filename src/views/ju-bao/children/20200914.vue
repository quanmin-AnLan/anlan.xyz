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
      day: '14',
      tableData: [
        {
          area: '空间1区',
          uid: '5300868',
          img: 'http://anlan.xyz:8080/images/jubao/20200914/002.jpg',
          times: '初犯',
        },
        {
          area: '空间2区',
          uid: '3306565',
          img: 'http://anlan.xyz:8080/images/jubao/20200914/011.jpg',
          times: '初犯',
        },
        {
          area: 'QQ小程序区',
          uid: '3093061',
          img: 'http://anlan.xyz:8080/images/jubao/20200914/003.jpg',
          times: '初犯',
        },
        {
          area: '微信小程序1区',
          uid: '3199746',
          img: 'http://anlan.xyz:8080/images/jubao/20200914/004.jpg',
          times: '第2次',
        },
        {
          area: '微信小程序1区',
          uid: '4768351',
          img: 'http://anlan.xyz:8080/images/jubao/20200914/006.jpg',
          times: '初犯',
        },
        {
          area: '微信小程序4区',
          uid: '7493615',
          img: 'http://anlan.xyz:8080/images/jubao/20200914/009.jpg',
          times: '初犯',
        },
        {
          area: '微信小程序8区',
          uid: '73293134',
          img: 'http://anlan.xyz:8080/images/jubao/20200914/010.jpg',
          times: '初犯',
        },
        {
          area: '微信小程序8区',
          uid: '92754114',
          img: 'http://anlan.xyz:8080/images/jubao/20200914/005.jpg',
          times: '初犯',
        },
        {
          area: '微信小程序10区',
          uid: '28073117',
          img: 'http://anlan.xyz:8080/images/jubao/20200914/007.jpg',
          times: '初犯',
        },
        {
          area: '微信小程序10区',
          uid: '82987153',
          img: 'http://anlan.xyz:8080/images/jubao/20200914/008.jpg',
          times: '初犯',
        },
        {
          area: '微信小程序11区',
          uid: '31387132',
          img: 'http://anlan.xyz:8080/images/jubao/20200914/001.jpg',
          times: '初犯',
        },
      ],
    };
  },
};
</script>