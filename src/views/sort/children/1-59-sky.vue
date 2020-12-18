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
      level: '59',
      model: '天',
      author: 'qq小程序灭绝',
      checker: 'qq小程序灭绝',
      tableData: [
        {
          area: '空间1区',
          name: '枫叶',
        },
        {
          area: '空间2区',
          name: '畩嘫♥睡様様',
        },
        {
          area: '手q区',
          name: '依赖',
        },
        {
          area: 'qq小程序',
          name: '无畏',
        },
        {
          area: '微信1区',
          name: '有点猪',
        },
        {
          area: '空间1区',
          name: '天外飞星',
        },
        {
          area: 'qq小程序',
          name: '灭绝丶',
        },
        {
          area: '微信8区',
          name: '东东',
        },
        {
          area: '空间1区',
          name: '霸气侧漏',
        },
        {
          area: '手q区',
          name: '软萌*\'⊙v',
        },
        {
          area: '手q区',
          name: '༺秦༻',
        },
        {
          area: '空间1区',
          name: '蒋',
        },
        {
          area: '微信1区',
          name: '有点白',
        },
        {
          area: '空间2区',
          name: '清风',
        },
        {
          area: '手q区',
          name: '满满的一天',
        },
        {
          area: '微信8区',
          name: '傻吊鹅',
        },
        {
          area: '空间3区',
          name: 'V587',
        },
        {
          area: '空间1区',
          name: 'Fly',
        },
        {
          area: '空间1区',
          name: '千极老人',
        },
        {
          area: '手q区',
          name: '今晚去你家',
        },
        {
          area: '空间1区',
          name: 'THOR',
        },
        {
          area: '微信1区',
          name: '有点帅',
        },
        {
          area: '微信1区',
          name: '有点坏',
        },
        {
          area: '微信11区',
          name: '春风化雨',
        },
        {
          area: '空间1区',
          name: '石头脑袋',
        },
        {
          area: 'qq小程序',
          name: '雨落',
        },
        {
          area: '空间2区',
          name: '安琪~',
        },
        {
          area: '微信1区',
          name: '有点懒',
        },
        {
          area: '空间1区',
          name: 'acc',
        },
        {
          area: '微信10区',
          name: '非诚勿扰',
        },
        {
          area: '空间1区',
          name: '小年糕',
        },
        {
          area: '空间2区',
          name: '。',
        },
        {
          area: 'qq小程序',
          name: '墨黑',
        },
        {
          area: '空间4区',
          name: '秋容',
        },
        {
          area: 'qq小程序',
          name: '爻*柒',
        },
        {
          area: '空间1区',
          name: '玖玥',
        },
      ],
    };
  },
};
</script>