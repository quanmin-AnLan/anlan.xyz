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
      day: '19',
      tableData: [
        {
          area: '微信小程序1区',
          uid: '5157473',
          img: 'http://www.anlan.xyz:8080/images/jubao/20201019/008.jpg',
          times: '初犯',
        },
        {
          area: '微信小程序1区',
          uid: '20332115',
          img: 'http://www.anlan.xyz:8080/images/jubao/20201019/010.jpg',
          times: '第2次',
        },
        {
          area: '微信小程序10区',
          uid: '12304136',
          img: 'http://www.anlan.xyz:8080/images/jubao/20201019/006.jpg',
          times: '初犯',
        },
        {
          area: '微信小程序11区',
          uid: '31488175',
          img: 'http://www.anlan.xyz:8080/images/jubao/20201019/001.jpg',
          times: '初犯',
        },
        {
          area: '微信小程序11区',
          uid: '35753149',
          img: 'http://www.anlan.xyz:8080/images/jubao/20201019/004.jpg',
          times: '初犯',
        },
        {
          area: '空间3区',
          uid: '8626977',
          img: 'http://www.anlan.xyz:8080/images/jubao/20201019/002.jpg',
          times: '初犯',
        },
        {
          area: '空间3区',
          uid: '5519278',
          img: 'http://www.anlan.xyz:8080/images/jubao/20201019/005.jpg',
          times: '初犯',
        },
        {
          area: '空间3区',
          uid: '6955989',
          img: 'http://www.anlan.xyz:8080/images/jubao/20201019/009.jpg',
          times: '初犯',
        },
        {
          area: '空间4区',
          uid: '5746177',
          img: 'http://www.anlan.xyz:8080/images/jubao/20201019/003.jpg',
          times: '初犯',
        },
        {
          area: '空间4区',
          uid: '5942672',
          img: 'http://www.anlan.xyz:8080/images/jubao/20201019/007.jpg',
          times: '初犯',
        },
        {
          area: '手Q区',
          uid: '414787',
          img: 'http://www.anlan.xyz:8080/images/jubao/20201019/011.jpg',
          times: '初犯',
        },
        {
          area: '手Q区',
          uid: '711275',
          img: 'http://www.anlan.xyz:8080/images/jubao/20201019/012.jpg',
          times: '第2次',
        },
      ],
    };
  },
};
</script>