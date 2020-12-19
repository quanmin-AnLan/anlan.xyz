<template>
  <section>
    <al-st :tableData="tableData" :times="times" :level="level" :model="model" :author="author" :checker="checker"></al-st>
  </section>
</template>

<script>
import AlSt from '@/utils/sort-tool.vue';
export default {
  components: {
    AlSt,
  },
  data() {
    return {
      times: '1',
      level: '39',
      model: '天',
      author: '微信1区有点白',
      checker: 'qq小程序灭绝',
      tableData: [
        {
          area: '手q区',
          name: '李时珍的皮',
        },
        {
          area: '空间1区',
          name: '有点白',
        },
        {
          area: '空间1区',
          name: '杨广庆',
        },
        {
          area: '空间1区',
          name: '有点黑',
        },
        {
          area: '微信1区',
          name: '有点卡',
        },
        {
          area: '空间2区',
          name: '有点苏',
        },
        {
          area: '空间1区',
          name: '城管小队长',
        },
        {
          area: '手q区',
          name: '鹅喂记几袋盐',
        },
        {
          area: '空间1区',
          name: '浪呀浪。',
        },
        {
          area: '空间1区',
          name: '有点虎',
        },
        {
          area: '手q区',
          name: '五行缺钱',
        },
        {
          area: '微信1区',
          name: '有点虚',
        },
        {
          area: '空间1区',
          name: '情',
        },
        {
          area: '微信1区',
          name: '有点洋',
        },
        {
          area: '手q区',
          name: '有丶小帅',
        },
        {
          area: '手q区',
          name: '',
        },
        {
          area: '微信1区',
          name: '++++莼g',
        },
        {
          area: '微信6区',
          name: '有点帅',
        },
        {
          area: '空间2区',
          name: '天旋星',
        },
        {
          area: '空间2区',
          name: '物似+++人非',
        },
        {
          area: '微信1区',
          name: 'cz',
        },
        {
          area: '微信8区',
          name: 'Marry+',
        },
        {
          area: '空间1区',
          name: '琳玧',
        },
        {
          area: '手q区',
          name: '祈禾',
        },
        {
          area: '手q区',
          name: '我',
        },
        {
          area: '微信5区',
          name: '宁亡',
        },
        {
          area: '微信1区',
          name: '有点凉',
        },
        {
          area: '空间2区',
          name: '雷帝不是la',
        },
        {
          area: '手q区',
          name: '夏目友人帐',
        },
        {
          area: '空间1区',
          name: '活。',
        },
        {
          area: '空间1区',
          name: '路飞',
        },
        {
          area: '手q区',
          name: '几何',
        },
        {
          area: '手q区',
          name: '天旋星',
        },
        {
          area: '微信7区',
          name: '有点水',
        },
        {
          area: '微信1区',
          name: 'syq',
        },
        {
          area: '微信9区',
          name: '戒酒的李白',
        },
      ],
    };
  },
};
</script>