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
      num: '4',
      tableData: [
        {
          qq: '344564701',
          isDraw: '1',
          times: '1',
        },
        {
          qq: '1784392136',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '949506263',
          isDraw: '0',
          times: '2',
        },
        {
          qq: '1448759301',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1300290017',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '3076920355',
          isDraw: '0',
          times: '3',
        },
        {
          qq: '2575310802',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '813059151',
          isDraw: '1',
          times: '1',
        },
        {
          qq: '472967960',
          isDraw: '0',
          times: '2',
        },
        {
          qq: '1095647524',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '861945505',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1960524123',
          isDraw: '0',
          times: '2',
        },
        {
          qq: '1376712530',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '727635799',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '863518122',
          isDraw: '0',
          times: '2',
        },
        {
          qq: '476907339',
          isDraw: '1',
          times: '3',
        },
        {
          qq: '1262913564',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '2041075045',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1320363535',
          isDraw: '0',
          times: '2',
        },
        {
          qq: '1579849991',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1306871989',
          isDraw: '0',
          times: '3',
        },
        {
          qq: '1915847282',
          isDraw: '0',
          times: '2',
        },
        {
          qq: '2601272356',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '363858005',
          isDraw: '1',
          times: '2',
        },
        {
          qq: '2185351933',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '2508740070',
          isDraw: '0',
          times: '2',
        },
        {
          qq: '1063051555',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '971344832',
          isDraw: '0',
          times: '3',
        },
        {
          qq: '3178316837',
          isDraw: '0',
          times: '2',
        },
        {
          qq: '928787983',
          isDraw: '0',
          times: '3',
        },
        {
          qq: '15130961526',
          isDraw: '0',
          times: '2',
        },
        {
          qq: '2142175032',
          isDraw: '1',
          times: '1',
        },
        {
          qq: '1150229001',
          isDraw: '0',
          times: '2',
        },
        {
          qq: '3313767215',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '316431584',
          isDraw: '0',
          times: '3',
        },
        {
          qq: '2326214250',
          isDraw: '0',
          times: '2',
        },
        {
          qq: '1484576250',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1137502828',
          isDraw: '0',
          times: '2',
        },
        {
          qq: '2360362693',
          isDraw: '0',
          times: '2',
        },
        {
          qq: '446069783',
          isDraw: '1',
          times: '1',
        },
        {
          qq: '2934679791',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '3249797390',
          isDraw: '0',
          times: '2',
        },
        {
          qq: '840578176',
          isDraw: '0',
          times: '2',
        },
        {
          qq: '2770295841',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1142133884',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1249080117',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '2042491815',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '57260698',
          isDraw: '1',
          times: '1',
        },
        {
          qq: '873736065',
          isDraw: '0',
          times: '2',
        },
        {
          qq: '750657515',
          isDraw: '0',
          times: '2',
        },
        {
          qq: '1367750952',
          isDraw: '0',
          times: '2',
        },
        {
          qq: '349247917',
          isDraw: '0',
          times: '2',
        },
        {
          qq: '71972995',
          isDraw: '0',
          times: '2',
        },
        {
          qq: '1764899676',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '651398821',
          isDraw: '1',
          times: '1',
        },
        {
          qq: '317642582',
          isDraw: '0',
          times: '3',
        },
        {
          qq: '565664476',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '944050317',
          isDraw: '0',
          times: '2',
        },
        {
          qq: '1921321822',
          isDraw: '0',
          times: '2',
        },
        {
          qq: '1009760834',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '525807752',
          isDraw: '0',
          times: '2',
        },
        {
          qq: '1521663652',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '403159861',
          isDraw: '1',
          times: '1',
        },
        {
          qq: '1928828508',
          isDraw: '0',
          times: '3',
        },
        {
          qq: '1226551527',
          isDraw: '0',
          times: '2',
        },
        {
          qq: '1712138317',
          isDraw: '0',
          times: '2',
        },
        {
          qq: '2670198670',
          isDraw: '0',
          times: '2',
        },
        {
          qq: '365174845',
          isDraw: '0',
          times: '2',
        },
        {
          qq: '2316586428',
          isDraw: '0',
          times: '2',
        },
        {
          qq: '1395264234',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '359337375',
          isDraw: '1',
          times: '3',
        },
        {
          qq: '709669669',
          isDraw: '0',
          times: '3',
        },
        {
          qq: '3246777637',
          isDraw: '1',
          times: '1',
        },
        {
          qq: '2411647393',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1598660893',
          isDraw: '0',
          times: '3',
        },
        {
          qq: '2720209005',
          isDraw: '0',
          times: '2',
        },
        {
          qq: '1753894394',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '2646723847',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '287546630',
          isDraw: '1',
          times: '1',
        },
        {
          qq: '544125893',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '2209633879',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1908440146',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '413503896',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '2631502518',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1654948508',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '41605700',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1183924041',
          isDraw: '1',
          times: '2',
        },
        {
          qq: '515565730',
          isDraw: '0',
          times: '2',
        },
        {
          qq: '765134724',
          isDraw: '0',
          times: '2',
        },
        {
          qq: '2250871361',
          isDraw: '0',
          times: '2',
        },
        {
          qq: '1217174481',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '565373454',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '595406476',
          isDraw: '0',
          times: '2',
        },
        {
          qq: '1010055624',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1569503987',
          isDraw: '1',
          times: '1',
        },
        {
          qq: '571051252',
          isDraw: '0',
          times: '2',
        },
        {
          qq: '943099963',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '876430181',
          isDraw: '0',
          times: '2',
        },
        {
          qq: '489468703',
          isDraw: '0',
          times: '2',
        },
        {
          qq: '410126314',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '2252586769',
          isDraw: '0',
          times: '2',
        },
        {
          qq: '2683797939',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '769319722',
          isDraw: '1',
          times: '1',
        },
        {
          qq: '206839264',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '114533077',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1126072689',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1569378948',
          isDraw: '0',
          times: '2',
        },
        {
          qq: '285332139',
          isDraw: '0',
          times: '2',
        },
        {
          qq: '3259311383',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '2608195141',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1459304805',
          isDraw: '1',
          times: '2',
        },
        {
          qq: '1926017449',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '798775629',
          isDraw: '0',
          times: '2',
        },
        {
          qq: '740037169',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1243418106',
          isDraw: '0',
          times: '3',
        },
        {
          qq: '3111318262',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '320890459',
          isDraw: '0',
          times: '2',
        },
        {
          qq: '454608737',
          isDraw: '0',
          times: '3',
        },
        {
          qq: '1152815658',
          isDraw: '1',
          times: '1',
        },
        {
          qq: '1596608957',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1580949802',
          isDraw: '0',
          times: '2',
        },
        {
          qq: '2018073818',
          isDraw: '0',
          times: '2',
        },
        {
          qq: '1515879287',
          isDraw: '0',
          times: '3',
        },
        {
          qq: '1341648610',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '605492366',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1826487033',
          isDraw: '0',
          times: '4',
        },
        {
          qq: '1205387016',
          isDraw: '1',
          times: '1',
        },
        {
          qq: '1277408883',
          isDraw: '0',
          times: '2',
        },
        {
          qq: '1137659728',
          isDraw: '0',
          times: '2',
        },
        {
          qq: '1511493381',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1602625872',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1447159290',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '2760836505',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1520693933',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1065312112',
          isDraw: '1',
          times: '1',
        },
        {
          qq: '861633682',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '2645519976',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1919004022',
          isDraw: '0',
          times: '3',
        },
        {
          qq: '491315897',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1471006682',
          isDraw: '0',
          times: '2',
        },
        {
          qq: '513252353',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1852068539',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '3391868848',
          isDraw: '1',
          times: '3',
        },
        {
          qq: '2197961583',
          isDraw: '0',
          times: '2',
        },
        {
          qq: '316331234',
          isDraw: '0',
          times: '3',
        },
        {
          qq: '1134007827',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1092843699',
          isDraw: '0',
          times: '1',
        },
      ],
    };
  },
};
</script>