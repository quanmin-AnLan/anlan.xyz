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
      day: '3',
      tableData: [
        {
          area: '空间3区',
          uid: '81932105',
          img: 'https://i.loli.net/2020/08/14/1G8sqA5rkEw4yDm.png',
          times: '第2次',
        },
        {
          area: '空间4区',
          uid: '4943181',
          img: 'https://i.loli.net/2020/08/14/eqYvoGhM8H6RBka.png',
          times: '初犯',
				},
				{
					area: '微信小程序1区',
					uid: '941665',
					img: 'https://i.loli.net/2020/08/14/45IGh1bvx6JSzsn.png',
					times: '初犯',
				},
				{
					area: '微信小程序1区',
					uid: '6757436',
					img: 'https://i.loli.net/2020/08/14/gPprhFZjvlfcSu8.png',
					times: '初犯',
				},
				{
					area: '微信小程序3区',
					uid: '92291150',
					img: 'https://i.loli.net/2020/08/14/yoN8V1gwDsXl9mZ.png',
					times: '初犯',
				},
				{
					area: '微信小程序3区',
					uid: '98391131',
					img: 'https://i.loli.net/2020/08/14/XsGKi2p4kSt6jCf.png',
					times: '第3次',
				},
				{
					area: '微信小程序5区',
					uid: '6164164',
					img: 'https://i.loli.net/2020/08/14/SzMf3ynNv1JHipw.png',
					times: '初犯',
				},
				{
					area: '微信小程序9区',
					uid: '80746118',
					img: 'https://i.loli.net/2020/08/14/FZ1dxly5q4vgmJp.png',
					times: '第3次',
				},
				{
					area: '微信小程序11区',
					uid: '12408140',
					img: 'https://i.loli.net/2020/08/14/IWG9pTo57OdmYa6.png',
					times: '第2次',
				},
      ],
    };
  },
};
</script>