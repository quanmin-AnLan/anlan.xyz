<template>
  <section>
    <al-dr :tableData="tableData" :num="num"></al-dr>
  </section>
</template>

<script>
import AlDr from '@/utils/draw-tool.vue';
export default {
  components: {
    AlDr,
  },
  data() {
    return {
      num: '1',
      tableData: [
        {
          qq: '582653442',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1196290753',
          isDraw: '1',
          times: '1',
        },
        {
          qq: '1343886965',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '2670198670',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1980295719',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '197639932',
          isDraw: '1',
          times: '1',
        },
        {
          qq: '578545404',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '472967960',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1320363535',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '962564476',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '489582203',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '454205763',
          isDraw: '1',
          times: '1',
        },
        {
          qq: '1316889514',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '2460033107',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1543796964',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '2528558065',
          isDraw: '1',
          times: '1',
        },
        {
          qq: '2317493318',
          isDraw: '1',
          times: '1',
        },
        {
          qq: '907505892',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1732016860',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1273930611',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1960524123',
          isDraw: '1',
          times: '1',
        },
        {
          qq: '269352046',
          isDraw: '1',
          times: '1',
        },
        {
          qq: '1186655497',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1019266682',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '2084296248',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '2643128524',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '978205469',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '2953875109',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1826487033',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '489468703',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '64018643',
          isDraw: '1',
          times: '1',
        },
        {
          qq: '2712380294',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '932045511',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1973116441',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '421009197',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '826054974',
          isDraw: '1',
          times: '1',
        },
        {
          qq: '2495646505',
          isDraw: '1',
          times: '1',
        },
        {
          qq: '1879796096',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '949506263',
          isDraw: '1',
          times: '1',
        },
        {
          qq: '373077679',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '327518817',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '123253585',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1138228649',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '346549252',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '36174006',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '844009673',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '357488386',
          isDraw: '1',
          times: '1',
        },
        {
          qq: '1427739483',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '65604272',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '2483332873',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '235434055',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1318124463',
          isDraw: '1',
          times: '1',
        },
        {
          qq: '488937478',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '648221882',
          isDraw: '1',
          times: '1',
        },
        {
          qq: '365174845',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '2979278191',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '309071927',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '2272707284',
          isDraw: '1',
          times: '1',
        },
        {
          qq: '364060784',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '2902503907',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '2223971097',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '925211045',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '570576013',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '2326214250',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '826774522',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1959431670',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1447159290',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '544125893',
          isDraw: '1',
          times: '1',
        },
        {
          qq: '1604330800',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1815838726',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1841128593',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '161948139',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1219092938',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1640031211',
          isDraw: '1',
          times: '1',
        },
        {
          qq: '1095897631',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '3095872356',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1030936786',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '2144024353',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '603896862',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '404597851',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '3484865320',
          isDraw: '1',
          times: '1',
        },
        {
          qq: '1150024783',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '657648405',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1115215786',
          isDraw: '1',
          times: '1',
        },
        {
          qq: '563688454',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '895645090',
          isDraw: '1',
          times: '1',
        },
      ],
    };
  },
};
</script>