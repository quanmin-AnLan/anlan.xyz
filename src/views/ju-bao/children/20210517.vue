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
      month: '5',
      day: '17',
      tableData: [
        {
          area: '空间1区',
          uid: '386081',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0517/1.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间1区',
          uid: '5381176',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0517/2.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间4区',
          uid: '6043999',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0517/3.jpg?imagelim',
          times: '初犯',
        },
      ],
    };
  },
};
</script>