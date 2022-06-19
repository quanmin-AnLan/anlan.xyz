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
            day: '13',
            tableData: [
                {
                    area: '空间5区',
                    uid: '75830117',
                    img: 'http://img.anlan.xyz/ledou/jubao/2022/0608/7.jpg?imagelim',
                    times: '第2次',
                },
            ],
        };
    },
};
</script>