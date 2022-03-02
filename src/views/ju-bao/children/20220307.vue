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
            day: '7',
            tableData: [
                {
                    area: '微信小程序12区',
                    uid: '18268157',
                    img: 'http://img.anlan.xyz/ledou/jubao/2022/0307/1.jpg?imagelim',
                    times: '初犯',
                },
            ],
        };
    },
};
</script>