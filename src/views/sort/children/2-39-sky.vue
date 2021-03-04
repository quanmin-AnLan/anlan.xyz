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
      times: '2',
      level: '39',
      model: '天',
      author: '微信1区有点白',
      checker: 'qq小程序灭绝',
      tableData: [
        {
          area: '空间1区',
          name: '有点白',
        },
        {
          area: '手q区',
          name: '李时珍的皮',
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
          area: '空间2区',
          name: '有点苏',
        },
        {
          area: '空间1区',
          name: '活。',
        },
        {
          area: '空间1区',
          name: '城管小队长',
        },
        {
          area: '空间1区',
          name: '有点坑',
        },
        {
          area: '空间1区',
          name: '有点虎',
        },
        {
          area: '微信6区',
          name: '有点帅',
        },
        {
          area: 'qq小程序',
          name: '霸枪',
        },
        {
          area: '微信10区',
          name: '有点纯',
        },
        {
          area: 'qq小程序',
          name: '有点紫',
        },
        {
          area: '手q区',
          name: '五行缺钱',
        },
        {
          area: '微信9区',
          name: '戒酒的李白',
        },
        {
          area: '空间1区',
          name: '有点甜',
        },
        {
          area: '空间2区',
          name: '物似+++人非',
        },
        {
          area: '微信1区',
          name: '有点洋',
        },
        {
          area: '手q区',
          name: '鹅喂记几袋盐',
        },
        {
          area: '微信8区',
          name: '放毒桶装水',
        },
        {
          area: '手q区',
          name: '祁禾',
        },
        {
          area: '空间2区',
          name: '天旋星',
        },
        {
          area: '微信1区',
          name: '++++莼g',
        },
        {
          area: '空间1区',
          name: '琉璃',
        },
        {
          area: '空间1区',
          name: '情',
        },
        {
          area: '空间1区',
          name: '琳玧',
        },
        {
          area: '手q区',
          name: '天旋星',
        },
        {
          area: '空间1区',
          name: '珮琦',
        },
        {
          area: '空间1区',
          name: '珈琪',
        },
        {
          area: '空间1区',
          name: '琳琅',
        },
        {
          area: '手q区',
          name: '*',
        },
        {
          area: '空间2区',
          name: '天天',
        },
        {
          area: '空间2区',
          name: 'Dubhe',
        },
        {
          area: '微信2区',
          name: '放下',
        },
        {
          area: '微信7区',
          name: '满猪圈赶猪跑',
        },
        {
          area: '空间3区',
          name: '云游',
        },
      ],
    };
  },
};
</script>