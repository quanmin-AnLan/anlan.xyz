<template>
  <section>
    <al-dr :tableData="tableData" :num="num"></al-dr>
  </section>
</template>

<script>
import AlDr from '@/utils/draw-tool.vue';
export default {
  components: {
    AlDr,
  },
  data() {
    return {
      num: '2',
      tableData: [
        {
          qq: '111111111',
          isDraw: '否',
          times: '1',
        },
      ],
    };
  },
};
</script>