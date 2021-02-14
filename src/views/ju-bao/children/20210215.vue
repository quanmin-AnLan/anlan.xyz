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
      month: '2',
      day: '15',
      tableData: [
        {
          area: '微信小程序1区',
          uid: '69950217',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0215/1.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间4区',
          uid: '2875687',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0215/2.jpg?imagelim',
          times: '初犯',
        },
      ],
    };
  },
};
</script>