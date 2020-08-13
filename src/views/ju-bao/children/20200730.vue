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
      month: '7',
      day: '30',
      tableData: [
        {
          area: '微信小程序10086区',
          uid: '46205844',
          img: 'http://p0.itc.cn/c_fill,w_155,h_103,g_faces,q_70/images03/20200813/576bf74f109c4a8181d1dda40145d9d0.jpeg',
          times: '初犯',
        },
      ],
    };
  },
};
</script>