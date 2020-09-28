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
      day: '12',
      tableData: [
        {
          area: '你猜',
          uid: '你猜',
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598697122811&di=cd1f756e11e0ba48044f10fe3e3aa3b0&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190621%2F5e0ef16b7f764cf0b31d58d9439eb7ac.png',
          times: '你猜',
        },
      ],
    };
  },
};
</script>