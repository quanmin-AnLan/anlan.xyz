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
            month: '7',
            day: '18',
            tableData: [
                {
                    area: '手q区',
                    uid: '6142925',
                    img: 'http://img.anlan.xyz/ledou/jubao/2022/0627/1.jpg?imagelim',
                    times: '第2次',
                },
                {
                    area: '微信小程序6区',
                    uid: '79705117',
                    img: 'http://img.anlan.xyz/ledou/jubao/2022/0718/1.jpg?imagelim',
                    times: '初犯',
                },
                {
                    area: '微信小程序6区',
                    uid: '55898163',
                    img: 'http://img.anlan.xyz/ledou/jubao/2022/0718/2.jpg?imagelim',
                    times: '初犯',
                },
            ],
        };
    },
};
</script>