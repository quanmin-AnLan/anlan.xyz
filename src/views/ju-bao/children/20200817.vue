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
      month: '8',
      day: '17',
      tableData: [
        {
          area: '微信小程序1区',
          uid: '7816958',
          img: 'http://www.anlan.xyz:8080/images/jubao/20200817/002.jpg',
          times: '初犯',
        },
        {
          area: '微信小程序3区',
          uid: '8584489',
          img: 'http://www.anlan.xyz:8080/images/jubao/20200817/003.jpg',
          times: '第2次',
        },
        {
          area: '微信小程序3区',
          uid: '98391131',
          img: 'http://www.anlan.xyz:8080/images/jubao/20200817/001.jpg',
          times: '第4次',
        },
        {
          area: '微信小程序9区',
          uid: '37990145',
          img: 'http://www.anlan.xyz:8080/images/jubao/20200817/004.jpg',
          times: '第2次',
        },
        {
          area: '微信小程序11区',
          uid: '78331151',
          img: 'http://www.anlan.xyz:8080/images/jubao/20200817/005.jpg',
          times: '初犯',
        },
        {
          area: 'QQ小程序区',
          uid: '7436259',
          img: 'http://www.anlan.xyz:8080/images/jubao/20200817/006.jpg',
          times: '初犯',
        },
        {
          area: 'QQ小程序区',
          uid: '6961176',
          img: 'http://www.anlan.xyz:8080/images/jubao/20200817/007.jpg',
          times: '初犯',
        },
        {
          area: 'QQ小程序区',
          uid: '7342972',
          img: 'http://www.anlan.xyz:8080/images/jubao/20200817/008.jpg',
          times: '初犯',
        },
        {
          area: 'QQ小程序区',
          uid: '4362060',
          img: 'http://www.anlan.xyz:8080/images/jubao/20200817/009.jpg',
          times: '初犯',
        },
      ],
    };
  },
};
</script>