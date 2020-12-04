<template>
  <section class="main">
    <al-table :headerSet="headerSet" :tableData="tableData"></al-table>
  </section>
</template>

<script>
import AlTable from '@/components/AlTable.vue';
export default {
  components: {
    AlTable
  },
  data() {
    return {
      headerSet: [
        {
          prop: 'question',
          label: '问题',
        },
        {
          prop: 'answer',
          label: '答案',
          width: '200px',
        },
        {
          prop: 'description',
          label: '解释',
          width: '300px',
        },
      ],
      tableData: [
        {
          question: '在使用5星关刀攻击时，对方手持嵌有7级反魂的8星金砖，那么被反击的几率是多少？',
          answer: '0%',
          description: '关刀不会被反击',
        },
        {
          question: '在触发偷天换日时使用风暴战斧攻击对方触发了连击且都成功命中，那么最多会使对方损失多少把武器？',
          answer: '12',
          description: '(3+3)×2=12',
        },
        {
          question: '在游历系统中，神兵-眉来眼去剑法，除了命中与闪避之外，还增加什么属性？',
          answer: '暴击伤害减免',
          description: '答暴伤减免也可',
        },
        {
          question: '在结界-法阵系统中，若自身风法阵为21级，对方风法阵为1级，那么对方会降低多少命中？',
          answer: '70%',
          description: '10%+3%×(21-1)=70%',
        },
        {
          question: '分享链接邀请新人可以随着邀请的人数增加获得不同的奖励，那么需要邀请多少人可以获得最后的奖励？',
          answer: '30',
          description: '-',
        },
        {
          question: '在召唤兽系统中，古木苍龙第2个助阵的位置，能否放置技能：真·佛山无影脚？',
          answer: '不能',
          description: '此位置只能放置辅助技能',
        },
        {
          question: '假设本回合你和对方的随从都将发动技能，那么发动技能的先后顺序是根据什么决定的',
          answer: '速度资质',
          description: '-',
        },
        {
          question: '每提升1点筋骨，会带来4点防御，30点基础生命值和多少闪避的属性提升？',
          answer: '0.08%',
          description: '-',
        },
        {
          question: '消费排行榜的奖励选项中，混元丹的作用是什么？',
          answer: '给限时随从续时间',
          description: '言之有理即可',
        },
        {
          question: '在一个帮派遗迹石板中放置一个加成橙、紫宝石的彩钻，是否可以加成该玩家其他石板的橙、紫宝石属性？',
          answer: '可以',
          description: '-',
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.main {
  width: 100%;
  box-sizing: border-box;
  padding: 30px;
  /deep/ .is-leaf {
    background: #506fbc;
    color: #fff;
  }
}
</style>
