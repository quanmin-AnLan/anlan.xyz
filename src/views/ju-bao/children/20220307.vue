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
                {
                    area: '空间4区',
                    uid: '29687129',
                    img: 'http://img.anlan.xyz/ledou/jubao/2022/0307/2.jpg?imagelim',
                    times: '初犯',
                },
                {
                    area: '空间5区',
                    uid: '39504102',
                    img: 'http://img.anlan.xyz/ledou/jubao/2022/0307/3.jpg?imagelim',
                    times: '初犯',
                },
            ],
        };
    },
};
</script>