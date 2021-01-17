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
      month: '1',
      day: '18',
      tableData: [
        {
          area: '微信小程序1区',
          uid: '8331428',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0118/1.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序1区',
          uid: '8468719',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0118/7.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间4区',
          uid: '8809580',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0118/2.jpg?imagelim',
          times: '第2次',
        },
        {
          area: '空间4区',
          uid: '4246573',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0118/3.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间4区',
          uid: '8485482',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0118/8.jpg?imagelim',
          times: '第2次',
        },
        {
          area: '手Q区',
          uid: '7540625',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0118/4.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信H5区',
          uid: '281992',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0118/5.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信H5区',
          uid: '827324',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0118/6.jpg?imagelim',
          times: '初犯',
        },
      ],
    };
  },
};
</script>