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
      day: '24',
      tableData: [
        {
          area: '微信小程序1区',
          uid: '9567670',
          img: 'http://www.anlan.xyz:8080/images/jubao/20200824/001.jpg',
          times: '初犯',
        },
        {
          area: '微信小程序1区',
          uid: '6320644',
          img: 'http://www.anlan.xyz:8080/images/jubao/20200824/002.jpg',
          times: '初犯',
        },
        {
          area: '微信小程序1区',
          uid: '4017315',
          img: 'http://www.anlan.xyz:8080/images/jubao/20200824/003.jpg',
          times: '第3次',
        },
        {
          area: '微信小程序1区',
          uid: '1350784',
          img: 'http://www.anlan.xyz:8080/images/jubao/20200824/004.jpg',
          times: '初犯',
        },
        {
          area: '微信小程序1区',
          uid: '7816958',
          img: 'http://www.anlan.xyz:8080/images/jubao/20200824/005.jpg',
          times: '第2次',
        },
        {
          area: '微信小程序1区',
          uid: '3199746',
          img: 'http://www.anlan.xyz:8080/images/jubao/20200824/006.jpg',
          times: '初犯',
        },
        {
          area: '微信小程序1区',
          uid: '20332115',
          img: 'http://www.anlan.xyz:8080/images/jubao/20200824/009.jpg',
          times: '初犯',
        },
        {
          area: '微信小程序1区',
          uid: '4893655',
          img: 'http://www.anlan.xyz:8080/images/jubao/20200824/010.jpg',
          times: '初犯',
        },
        {
          area: '微信小程序7区',
          uid: '48681124',
          img: 'http://www.anlan.xyz:8080/images/jubao/20200824/011.jpg',
          times: '初犯',
        },
        {
          area: 'QQ小程序区',
          uid: '7436259',
          img: 'http://www.anlan.xyz:8080/images/jubao/20200824/007.jpg',
          times: '第2次',
        },
        {
          area: '空间2区',
          uid: '9561774',
          img: 'http://www.anlan.xyz:8080/images/jubao/20200824/012.jpg',
          times: '初犯',
        },
        {
          area: '空间3区',
          uid: '3054687',
          img: 'http://www.anlan.xyz:8080/images/jubao/20200824/008.jpg',
          times: '初犯',
        },
      ],
    };
  },
};
</script>