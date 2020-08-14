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
          area: '手Q区',
          uid: '711275',
          img: 'https://i.loli.net/2020/08/14/Rgs6I9reTOJ3Zjm.png',
          times: '初犯',
        },
        {
          area: '空间2区',
          uid: '8767368',
          img: 'https://i.loli.net/2020/08/14/eRmcdBEsah5jCNx.png',
          times: '第2次',
        },
        {
          area: '空间3区',
          uid: '81932105',
          img: 'https://i.loli.net/2020/08/14/5b4aGyEROBKikus.png',
          times: '初犯',
        },
        {
          area: '微信小程序3区',
          uid: '98391131',
          img: 'https://i.loli.net/2020/08/14/q1az6DoASTcUdJr.png',
          times: '第2次',
        },
        {
          area: '微信小程序9区',
          uid: '37990145',
          img: 'https://i.loli.net/2020/08/14/OFQBHfD41jNIVLM.png',
          times: '初犯',
        },
        {
          area: '微信小程序9区',
          uid: '80746118',
          img: 'https://i.loli.net/2020/08/14/v3nwbCoKqRdk9ag.png',
          times: '第2次',
        },
        {
          area: '微信小程序11区',
          uid: '12408140',
          img: 'https://i.loli.net/2020/08/14/wPqC2j1mQvDrIN7.png',
          times: '初犯',
        },
      ],
    };
  },
};
</script>