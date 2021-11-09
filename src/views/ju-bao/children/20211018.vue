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
      month: '10',
      day: '18',
      tableData: [
        {
          area: '微信小程序1区',
          uid: '71178269',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/1018/2.jpg?imagelim',
          times: '第3次',
        },
        {
          area: '微信小程序2区',
          uid: '66469112',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/1018/1.jpg?imagelim',
          times: '第2次',
        },
      ],
    };
  },
};
</script>