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
      day: '28',
      tableData: [
        {
          area: '微信小程序1区',
          uid: '2424341',
          img: 'http://www.anlan.xyz:8080/images/jubao/20200928/002.jpg',
          times: '初犯',
        },
        {
          area: '微信小程序1区',
          uid: '3612926',
          img: 'http://www.anlan.xyz:8080/images/jubao/20200928/008.jpg',
          times: '初犯',
        },
        {
          area: '微信小程序1区',
          uid: '5942822',
          img: 'http://www.anlan.xyz:8080/images/jubao/20200928/013.jpg',
          times: '初犯',
        },
        {
          area: '微信小程序1区',
          uid: '3199746',
          img: 'http://www.anlan.xyz:8080/images/jubao/20200928/011.jpg',
          times: '第3次',
        },
        {
          area: '微信小程序4区',
          uid: '7493615',
          img: 'http://www.anlan.xyz:8080/images/jubao/20200928/003.jpg',
          times: '第2次',
        },
        {
          area: '微信小程序10区',
          uid: '20812157',
          img: 'http://www.anlan.xyz:8080/images/jubao/20200928/001.jpg',
          times: '初犯',
        },
        {
          area: '微信小程序10区',
          uid: '61803176',
          img: 'http://www.anlan.xyz:8080/images/jubao/20200928/007.jpg',
          times: '初犯',
        },
        {
          area: '微信小程序10区',
          uid: '88662156',
          img: 'http://www.anlan.xyz:8080/images/jubao/20200928/010.jpg',
          times: '初犯',
        },
        {
          area: '微信小程序11区',
          uid: '42150127',
          img: 'http://www.anlan.xyz:8080/images/jubao/20200928/004.jpg',
          times: '初犯',
        },
        {
          area: '微信小程序11区',
          uid: '89446165',
          img: 'http://www.anlan.xyz:8080/images/jubao/20200928/009.jpg',
          times: '初犯',
        },
        {
          area: '微信小程序11区',
          uid: '55278157',
          img: 'http://www.anlan.xyz:8080/images/jubao/20200928/005.jpg',
          times: '第2次',
        },
        {
          area: '空间3区',
          uid: '41525102',
          img: 'http://www.anlan.xyz:8080/images/jubao/20200928/006.jpg',
          times: '初犯',
        },
        {
          area: '空间3区',
          uid: '5225073',
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598697122811&di=cd1f756e11e0ba48044f10fe3e3aa3b0&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190621%2F5e0ef16b7f764cf0b31d58d9439eb7ac.png',
          times: '封7天',
        },
        {
          area: '手q区',
          uid: '7354637',
          img: 'http://www.anlan.xyz:8080/images/jubao/20200928/014.jpg',
          times: '初犯',
        },
      ],
    };
  },
};
</script>