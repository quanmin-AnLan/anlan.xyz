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
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1102/6.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序1区',
          uid: '6934552',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1102/4.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序1区',
          uid: '6254330',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1102/7.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序1区',
          uid: '3102885',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1102/10.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序1区',
          uid: '57811159',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1102/11.jpg?imagelim',
          times: '第2次',
        },
        {
          area: '微信小程序1区',
          uid: '6974712',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1102/13.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序1区',
          uid: '5157473',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1102/14.jpg?imagelim',
          times: '第3次',
        },
        {
          area: '微信小程序3区',
          uid: '187711',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1102/12.jpg?imagelim',
          times: '第2次',
        },
        {
          area: '微信小程序6区',
          uid: '1157872',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1102/16.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序8区',
          uid: '70877137',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1102/8.jpg?imagelim',
          times: '第2次',
        },
        {
          area: '微信小程序10区',
          uid: '93576116',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1102/9.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序10区',
          uid: '90865154',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1102/1.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序10区',
          uid: '61803176',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1102/2.jpg?imagelim',
          times: '第2次',
        },
        {
          area: '手Q区',
          uid: '7123517',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1102/17.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间1区',
          uid: '1452861',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1102/15.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间3区',
          uid: '3557987',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1102/5.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间4区',
          uid: '3868186',
          img: 'http://img.anlan.xyz/ledou/jubao/2020/1102/3.jpg?imagelim',
          times: '初犯',
        },
      ],
    };
  },
};
</script>