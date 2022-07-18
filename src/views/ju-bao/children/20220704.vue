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
            day: '4',
            tableData: [
                {
                    area: '微信小程序2区',
                    uid: '9612093',
                    img: 'http://img.anlan.xyz/ledou/jubao/2022/0214/2.jpg?imagelim',
                    times: '第3次',
                },
            ],
        };
    },
};
</script>