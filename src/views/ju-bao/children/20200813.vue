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
          area: '微信小程序3区',
          uid: '8584489',
          img: 'https://i.loli.net/2020/08/17/bFqDCPKjwHexhIa.png',
          times: '初犯',
        },
        {
          area: '微信H5区',
          uid: '746801',
          img: 'https://i.loli.net/2020/08/17/uIOAXaLF3RwxDVM.png',
          times: '初犯',
				},
				{
					area: '空间2区',
					uid: '8087853',
					img: 'https://i.loli.net/2020/08/17/PEjn7IX6wreuZ5D.png',
					times: '初犯',
				},
				{
					area: '空间2区',
					uid: '4871767',
					img: 'https://i.loli.net/2020/08/17/CN6fv2XpxOrqHbw.png',
					times: '第2次',
				},
				{
					area: '空间2区',
					uid: '5522561',
					img: 'https://i.loli.net/2020/08/17/NwvErGcpT5oh2Q7.png',
					times: '第2次',
				},
				{
					area: 'QQ小程序区',
					uid: '4792678',
					img: 'https://i.loli.net/2020/08/17/g7u9Gc5PwpeHjvK.png',
					times: '第2次',
				},
				{
					area: '手Q区',
					uid: '418118',
					img: 'https://i.loli.net/2020/08/17/rUzOyQuA8oEKViS.png',
					times: '第2次',
				},
      ],
    };
  },
};
</script>