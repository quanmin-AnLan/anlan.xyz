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
      day: '16',
      tableData: [
        {
          area: '微信小程序1区',
          uid: '69134360',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0816/3.jpg?imagelim',
          times: '第2次',
        },
        {
          area: '空间4区',
          uid: '94518103',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0816/1.jpg?imagelim',
          times: '第2次',
        },
        {
          area: '空间4区',
          uid: '98686110',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0816/2.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '手q区',
          uid: '2693615',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0816/4.jpg?imagelim',
          times: '第2次',
        },
        {
          area: '手q区',
          uid: '2802720',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0816/5.jpg?imagelim',
          times: '初犯',
        },
      ],
    };
  },
};
</script>