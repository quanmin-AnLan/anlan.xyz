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
            month: '6',
            day: '20',
            tableData: [
                {
                    area: '空间4区',
                    uid: '29687129',
                    img: 'http://img.anlan.xyz/ledou/jubao/2022/0620/1.jpg?imagelim',
                    times: '第3次',
                },
                {
                    area: '空间4区',
                    uid: '79806123',
                    img: 'http://img.anlan.xyz/ledou/jubao/2022/0620/2.jpg?imagelim',
                    times: '初犯',
                },
            ],
        };
    },
};
</script>