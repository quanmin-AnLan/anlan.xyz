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
      month: '12',
      day: '20',
      tableData: [
        {
          area: '微信小程序1区',
          uid: '50351163',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/1220/4.jpg?imagelim',
          times: '第4次',
        },
        {
          area: '微信小程序1区',
          uid: '91295145',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/1220/12.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序1区',
          uid: '5102443',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/1220/13.jpg?imagelim',
          times: '第3次',
        },
        {
          area: '微信小程序2区',
          uid: '4872844',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/1220/2.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '微信小程序10区',
          uid: '71858131',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/1220/3.jpg?imagelim',
          times: '第2次',
        },
        {
          area: '微信小程序12区',
          uid: '71579165',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/1220/14.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间1区',
          uid: '4817855',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/1220/6.jpg?imagelim',
          times: '第2次',
        },
        {
          area: '空间1区',
          uid: '9232459',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/1220/8.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间1区',
          uid: '8293874',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/1220/9.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间1区',
          uid: '9173676',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/1220/11.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间4区',
          uid: '14407102',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/1220/1.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间4区',
          uid: '91089107',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/1220/5.jpg?imagelim',
          times: '第3次',
        },
        {
          area: '空间4区',
          uid: '1605981',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/1220/7.jpg?imagelim',
          times: '初犯',
        },
        {
          area: '空间5区',
          uid: '5799089',
          img: 'http://img.anlan.xyz/ledou/jubao/2021/1220/10.jpg?imagelim',
          times: '初犯',
        },
      ],
    };
  },
};
</script>