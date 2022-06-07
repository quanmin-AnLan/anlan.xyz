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
            day: '8',
            tableData: [
                {
                    area: '空间1区',
                    uid: '326301',
                    img: 'http://img.anlan.xyz/ledou/jubao/2022/0608/1.jpg?imagelim',
                    times: '初犯',
                },
                {
                    area: '空间5区',
                    uid: '62089104',
                    img: 'http://img.anlan.xyz/ledou/jubao/2022/0608/2.jpg?imagelim',
                    times: '第2次',
                },
                {
                    area: '空间5区',
                    uid: '2034898',
                    img: 'http://img.anlan.xyz/ledou/jubao/2022/0608/3.jpg?imagelim',
                    times: '初犯',
                },
                {
                    area: '空间5区',
                    uid: '84575122',
                    img: 'http://img.anlan.xyz/ledou/jubao/2022/0608/4.jpg?imagelim',
                    times: '初犯',
                },
                {
                    area: '空间5区',
                    uid: '14261113',
                    img: 'http://img.anlan.xyz/ledou/jubao/2022/0608/5.jpg?imagelim',
                    times: '初犯',
                },
                {
                    area: '空间5区',
                    uid: '83136101',
                    img: 'http://img.anlan.xyz/ledou/jubao/2022/0608/6.jpg?imagelim',
                    times: '初犯',
                },
                {
                    area: '空间5区',
                    uid: '75830117',
                    img: 'http://img.anlan.xyz/ledou/jubao/2022/0608/7.jpg?imagelim',
                    times: '初犯',
                },
                {
                    area: '空间5区',
                    uid: '39504102',
                    img: 'http://img.anlan.xyz/ledou/jubao/2022/0608/8.jpg?imagelim',
                    times: '第2次',
                },
            ],
        };
    },
};
</script>