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
      year: '2022',
      month: '2',
      day: '7',
      tableData: [
        {
          area: '微信小程序1区',
          uid: '9838142',
          img: 'http://img.anlan.xyz/ledou/jubao/2022/0207/3.jpg?imagelim',
          times: '第2次',
        },
        {
          area: '微信小程序1区',
          uid: '71178269',
          img: 'http://img.anlan.xyz/ledou/jubao/2022/0207/4.jpg?imagelim',
          times: '第5次',
        },
        {
          area: '微信小程序1区',
          uid: '5888616',
          img: 'http://img.anlan.xyz/ledou/jubao/2022/0207/5.jpg?imagelim',
          times: '第2次',
        },
        {
          area: '微信小程序2区',
          uid: '5669072',
          img: 'http://img.anlan.xyz/ledou/jubao/2022/0207/2.jpg?imagelim',
          times: '第3次',
        },
        {
          area: '微信小程序10区',
          uid: '71858131',
          img: 'http://img.anlan.xyz/ledou/jubao/2022/0207/1.jpg?imagelim',
          times: '第4次',
        },
        {
          area: '空间4区',
          uid: '87879101',
          img: 'http://img.anlan.xyz/ledou/jubao/2022/0207/6.jpg?imagelim',
          times: '第2次',
        },
        {
          area: '空间4区',
          uid: '91089107',
          img: 'http://img.anlan.xyz/ledou/jubao/2022/0207/7.jpg?imagelim',
          times: '第4次',
        },
      ],
    };
  },
};
</script>