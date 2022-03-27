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
            day: '28',
            tableData: [
                {
                    area: '空间3区',
                    uid: '5784486',
                    img: 'http://img.anlan.xyz/ledou/jubao/2022/0328/1.jpg?imagelim',
                    times: '第2次',
                },
                {
                    area: '微信小程序2区',
                    uid: '1582915',
                    img: 'http://img.anlan.xyz/ledou/jubao/2022/0328/2.jpg?imagelim',
                    times: '初犯',
                },
            ],
        };
    },
};
</script>