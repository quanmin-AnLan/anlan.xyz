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
      num: '5',
      tableData: [
        {
          qq: '???',
          isDraw: '0',
          times: '1',
        },
      ],
    };
  },
};
</script>