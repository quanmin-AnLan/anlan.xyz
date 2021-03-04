<template>
  <section>
    <al-st :tableData="tableData" :times="times" :level="level" :model="model" :author="author" :checker="checker"></al-st>
  </section>
</template>

<script>
import AlSt from '@/utils/sort-tool.vue';
export default {
  components: {
    AlSt,
  },
  data() {
    return {
      times: '2',
      level: '39',
      model: '天',
      author: '微信1区有点白',
      checker: 'qq小程序灭绝',
      tableData: [
        {
          area: '你猜啊',
          name: '不告诉你',
        },
      ],
    };
  },
};
</script>