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
      day: '31',
      tableData: [
        {
          area: '微信小程序1区',
          uid: '4262795',
          img: 'http://anlan.xyz:8080/images/jubao/20200831/001.jpg',
          times: '初犯',
        },
        {
          area: '微信小程序1区',
          uid: '97998353',
          img: 'http://anlan.xyz:8080/images/jubao/20200831/002.jpg',
          times: '初犯',
        },
        {
          area: '微信小程序1区',
          uid: '6320644',
          img: 'http://anlan.xyz:8080/images/jubao/20200831/007.jpg',
          times: '第2次',
        },
        {
          area: '微信小程序2区',
          uid: '809132',
          img: 'http://anlan.xyz:8080/images/jubao/20200831/008.jpg',
          times: '初犯',
        },
        {
          area: '微信小程序6区',
          uid: '62940111',
          img: 'http://anlan.xyz:8080/images/jubao/20200831/009.jpg',
          times: '初犯',
        },
        {
          area: '微信小程序6区',
          uid: '4754081',
          img: 'http://anlan.xyz:8080/images/jubao/20200831/010.jpg',
          times: '初犯',
        },
        {
          area: '微信小程序10区',
          uid: '30150159',
          img: 'http://anlan.xyz:8080/images/jubao/20200831/003.jpg',
          times: '初犯',
        },
        {
          area: '微信小程序10区',
          uid: '43717149',
          img: 'http://anlan.xyz:8080/images/jubao/20200831/004.jpg',
          times: '初犯',
        },
        {
          area: '微信小程序11区',
          uid: '12822138',
          img: 'http://anlan.xyz:8080/images/jubao/20200831/011.jpg',
          times: '第2次',
        },
        {
          area: 'QQ小程序区',
          uid: '6351274',
          img: 'http://anlan.xyz:8080/images/jubao/20200831/005.jpg',
          times: '初犯',
        },
        {
          area: 'QQ小程序区',
          uid: '5341361',
          img: 'http://anlan.xyz:8080/images/jubao/20200831/006.jpg',
          times: '初犯',
        },
      ],
    };
  },
};
</script>