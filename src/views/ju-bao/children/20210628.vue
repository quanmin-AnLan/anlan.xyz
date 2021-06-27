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
      month: '6',
      day: '28',
      tableData: [
        {
          area: '微信小程序1区',
          uid: '504708',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0628/11.jpg?imagelim',
          times: '第2次',
        },
        {
          area: '微信小程序2区',
          uid: '2334818',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0628/8.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序2区',
          uid: '81496116',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0628/9.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序10区',
          uid: '20431160',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0628/12.jpg?imagelim',
          times: '第2次',
        },
        {
          area: '微信小程序11区',
          uid: '97896162',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0628/10.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间1区',
          uid: '7947358',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0628/4.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间1区',
          uid: '7786425',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0628/5.jpg?imagelim',
          times: '第2次',
        },
        {
          area: '空间3区',
          uid: '8119276',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0628/2.jpg?imagelim',
          times: '第2次',
        },
        {
          area: '空间4区',
          uid: '9724194',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0628/3.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '手q区',
          uid: '439969',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0628/1.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '手q区',
          uid: '1742815',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0628/6.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '手q区',
          uid: '903387',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/0628/7.jpg?imagelim',
          times: '初犯',
        },
      ],
    };
  },
};
</script>