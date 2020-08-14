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
      month: '8',
      day: '13',
      tableData: [
        {
          area: '微信小程序10010区',
          uid: '4620584',
          img: 'http://p0.itc.cn/images03/20200813/576bf74f109c4a8181d1dda40145d9d0.jpeg',
          times: '初犯',
        },
        {
          area: '微信小程序10086区',
          uid: '88888888',
          img: 'http://p1.itc.cn/images01/20200812/e25ff914add445abacad9aea064dca8b.jpeg',
          times: '多次',
				},
				{
					area: '',
					uid: '',
					img: '',
					times: '',
				},
				{
					area: '',
					uid: '',
					img: '',
					times: '',
				},
				{
					area: '',
					uid: '',
					img: '',
					times: '',
				},
				{
					area: '',
					uid: '',
					img: '',
					times: '',
				},
				{
					area: '',
					uid: '',
					img: '',
					times: '',
				},
				{
					area: '',
					uid: '',
					img: '',
					times: '',
				},
      ],
    };
  },
};
</script>