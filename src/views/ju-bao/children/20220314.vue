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
            year: '2022',
            month: '3',
            day: '14',
            tableData: [
                {
                    area: '微信小程序13区',
                    uid: '48290165',
                    img: 'http://img.anlan.xyz/ledou/jubao/2022/0314/1.jpg?imagelim',
                    times: '初犯',
                },
                {
                    area: '空间3区',
                    uid: '7788890',
                    img: 'http://img.anlan.xyz/ledou/jubao/2022/0314/2.jpg?imagelim',
                    times: '初犯',
                },
            ],
        };
    },
};
</script>