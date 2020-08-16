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
      day: '10',
      tableData: [
        {
          area: '微信小程序1区',
          uid: '3816214',
          img: 'https://i.loli.net/2020/08/16/FAe12lLJOaNju9w.png',
          times: '初犯',
        },
        {
          area: '微信小程序1区',
          uid: '1420096',
          img: 'https://i.loli.net/2020/08/16/Uv8qEYcLdWwXMPh.png',
          times: '初犯',
				},
				{
					area: '微信小程序1区',
					uid: '5680626',
					img: 'https://i.loli.net/2020/08/16/JEXrgmknQzfViMy.png',
					times: '初犯',
				},
				{
					area: '微信小程序1区',
					uid: '57811159',
					img: 'https://i.loli.net/2020/08/16/VHXZxskI2JbdlUN.png',
					times: '初犯',
				},
				{
					area: '微信小程序1区',
					uid: '69265136',
					img: 'https://i.loli.net/2020/08/16/bsPWvDH8clAFu9z.png',
					times: '第2次',
				},
				{
					area: '微信小程序1区',
					uid: '4017315',
					img: 'https://i.loli.net/2020/08/16/CJhWamvHju4s2Vg.png',
					times: '第2次',
				},
				{
					area: '微信小程序3区',
					uid: '92291150',
					img: 'https://i.loli.net/2020/08/17/9aONQxoqlJbg21r.png',
					times: '第2次',
				},
				{
					area: '微信小程序10区',
					uid: '59407144',
					img: 'https://i.loli.net/2020/08/17/r2Z6gemnLSy7o5P.png',
					times: '初犯',
				},
				{
					area: '微信小程序11区',
					uid: '24599150',
					img: 'https://i.loli.net/2020/08/17/WJrpmcObdiuHle6.png',
					times: '初犯',
				},
				{
					area: '微信小程序11区',
					uid: '12822138',
					img: 'https://i.loli.net/2020/08/17/IgD4ubtHWzn6Qw7.png',
					times: '初犯',
				},
				{
					area: '空间2区',
					uid: '8767368',
					img: 'https://i.loli.net/2020/08/17/tFClN1fw2gxJLpq.png',
					times: '第3次',
				},
				{
					area: '空间2区',
					uid: '5522561',
					img: 'https://i.loli.net/2020/08/17/6gwMrxdok5A71JZ.png',
					times: '初犯',
				},
				{
					area: '空间2区',
					uid: '4871767',
					img: 'https://i.loli.net/2020/08/17/nh9EQ6dC2gUqBtW.png',
					times: '初犯',
				},
				{
					area: '微信H5区',
					uid: '737972',
					img: 'https://i.loli.net/2020/08/17/bx5sdXDAcV4gJt6.png',
					times: '第2次',
				},
				{
					area: '手Q区',
					uid: '418118',
					img: 'https://i.loli.net/2020/08/17/w14zdkaxsOj6SFC.png',
					times: '初犯',
				},
				{
					area: 'QQ小程序区',
					uid: '4792678',
					img: 'https://i.loli.net/2020/08/17/oK2TZ4GVPet6Jda.png',
					times: '初犯',
				},
      ],
    };
  },
};
</script>