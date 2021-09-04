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
      month: '9',
      day: '6',
      tableData: [
        {
          area: '微信小程序1区',
          uid: '2424341',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0906/1.jpg?imagelim',
          times: '第3次',
        },
        {
          area: '微信小程序1区',
          uid: '24046128',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0906/2.jpg?imagelim',
          times: '第2次',
        },
        {
          area: '微信小程序1区',
          uid: '17137300',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0906/3.jpg?imagelim',
          times: '第2次',
        },
        {
          area: '微信小程序1区',
          uid: '59292121',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0906/5.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序12区',
          uid: '76600140',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0906/4.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间4区',
          uid: '6866155',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0906/6.jpg?imagelim',
          times: '第2次',
        },
        {
          area: '手q区',
          uid: '334683',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0906/7.jpg?imagelim',
          times: '第2次',
        },
      ],
    };
  },
};
</script>