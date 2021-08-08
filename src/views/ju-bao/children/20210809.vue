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
      year: '2021',
      month: '8',
      day: '9',
      tableData: [
        {
          area: '微信小程序1区',
          uid: '69134360',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0809/1.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序1区',
          uid: '76845246',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0809/3.jpg?imagelim',
          times: '第5次',
        },
        {
          area: '微信小程序1区',
          uid: '9346450',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0809/4.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序10区',
          uid: '70475145',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0809/2.jpg?imagelim',
          times: '第2次',
        },
        {
          area: '空间4区',
          uid: '7454287',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0809/5.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间4区',
          uid: '31894100',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0809/6.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间4区',
          uid: '94518103',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0809/7.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '手q区',
          uid: '4589428',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0809/8.jpg?imagelim',
          times: '第2次',
        },
      ],
    };
  },
};
</script>