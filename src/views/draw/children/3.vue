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
      num: '3',
      tableData: [
        {
          qq: '810404802',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1150229001',
          isDraw: '1',
          times: '1',
        },
        {
          qq: '709669669',
          isDraw: '0',
          times: '2',
        },
        {
          qq: '359337375',
          isDraw: '0',
          times: '2',
        },
        {
          qq: '3178316837',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1065757675',
          isDraw: '1',
          times: '1',
        },
        {
          qq: '765134724',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '2360362693',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '472967960',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '750657515',
          isDraw: '1',
          times: '1',
        },
        {
          qq: '971344832',
          isDraw: '0',
          times: '2',
        },
        {
          qq: '840578176',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1367750952',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1183924041',
          isDraw: '1',
          times: '1',
        },
        {
          qq: '3076920355',
          isDraw: '0',
          times: '2',
        },
        {
          qq: '3227421690',
          isDraw: '0',
          times: '2',
        },
        {
          qq: '476907339',
          isDraw: '0',
          times: '2',
        },
        {
          qq: '1915847282',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1023433846',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '28258793',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '2311758983',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '2992520498',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1306871989',
          isDraw: '1',
          times: '2',
        },
        {
          qq: '1960524123',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '706800311',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1137659728',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '596084465',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '64018643',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '2018073818',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '2390913192',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '282247718',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '876430181',
          isDraw: '1',
          times: '1',
        },
        {
          qq: '798775629',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '2024260897',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1196290753',
          isDraw: '1',
          times: '1',
        },
        {
          qq: '1019541566',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1536305834',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '320890459',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '178189136',
          isDraw: '0',
          times: '2',
        },
        {
          qq: '2250871361',
          isDraw: '1',
          times: '1',
        },
        {
          qq: '2252586769',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '478304291',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '623365729',
          isDraw: '1',
          times: '2',
        },
        {
          qq: '1320363535',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '2712380294',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '15130961526',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '65604272',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '873736065',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1105449684',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1106536702',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1459304805',
          isDraw: '1',
          times: '1',
        },
        {
          qq: '949506263',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '2670198670',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1849293021',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '571051252',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '365174845',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1010628065',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '2326214250',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '930619712',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1580949802',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1226551527',
          isDraw: '1',
          times: '1',
        },
        {
          qq: '1396074471',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '363858005',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '525807752',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '515565730',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '2300815048',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '2508740070',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '289052683',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1875899879',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '285332139',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1137502828',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1973116441',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1921321822',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '381953677',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1316889514',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '316431584',
          isDraw: '0',
          times: '2',
        },
        {
          qq: '454608737',
          isDraw: '0',
          times: '2',
        },
        {
          qq: '1928828508',
          isDraw: '0',
          times: '2',
        },
        {
          qq: '317642582',
          isDraw: '0',
          times: '2',
        },
        {
          qq: '1924904678',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '842581289',
          isDraw: '1',
          times: '1',
        },
        {
          qq: '244707138',
          isDraw: '0',
          times: '2',
        },
        {
          qq: '349247917',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1598660893',
          isDraw: '0',
          times: '2',
        },
        {
          qq: '1515879287',
          isDraw: '0',
          times: '2',
        },
        {
          qq: '823754010',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '2624943783',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1710992380',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '578545404',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '245185222',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '595406476',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '928787983',
          isDraw: '0',
          times: '2',
        },
        {
          qq: '2316586428',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1343886965',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '2528558065',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '489468703',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1569378948',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1277408883',
          isDraw: '1',
          times: '1',
        },
        {
          qq: '71972995',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1826487033',
          isDraw: '0',
          times: '3',
        },
        {
          qq: '657648405',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '280212502',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1175562960',
          isDraw: '0',
          times: '2',
        },
        {
          qq: '2495646505',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1243418106',
          isDraw: '1',
          times: '2',
        },
        {
          qq: '235434055',
          isDraw: '1',
          times: '1',
        },
        {
          qq: '2849759587',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '2720209005',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '3462668',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '316331234',
          isDraw: '0',
          times: '2',
        },
        {
          qq: '894051331',
          isDraw: '1',
          times: '2',
        },
        {
          qq: '1712138317',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '3391868848',
          isDraw: '0',
          times: '2',
        },
        {
          qq: '3431318396',
          isDraw: '1',
          times: '2',
        },
        {
          qq: '2197961583',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '863518122',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1471006682',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '22001221',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '944050317',
          isDraw: '1',
          times: '1',
        },
        {
          qq: '1541038385',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1539174646',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '3249797390',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '1919004022',
          isDraw: '0',
          times: '2',
        },
        {
          qq: '1063775652',
          isDraw: '1',
          times: '1',
        },
        {
          qq: '1034039952',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '434212379',
          isDraw: '1',
          times: '1',
        },
        {
          qq: '1023075',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '2324861058',
          isDraw: '0',
          times: '1',
        },
        {
          qq: '441901236',
          isDraw: '0',
          times: '1',
        },
      ],
    };
  },
};
</script>