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
            day: '27',
            tableData: [
                {
                    area: '手q区',
                    uid: '6142925',
                    img: 'http://img.anlan.xyz/ledou/jubao/2022/0627/1.jpg?imagelim',
                    times: '初犯',
                },
                {
                    area: '微信小程序2区',
                    uid: '922981',
                    img: 'http://img.anlan.xyz/ledou/jubao/2022/0627/2.jpg?imagelim',
                    times: '第2次',
                },
                {
                    area: '微信小程序2区',
                    uid: '35704120',
                    img: 'http://img.anlan.xyz/ledou/jubao/2022/0627/3.jpg?imagelim',
                    times: '初犯',
                },
                {
                    area: '微信小程序2区',
                    uid: '96339104',
                    img: 'http://img.anlan.xyz/ledou/jubao/2022/0627/4.jpg?imagelim',
                    times: '初犯',
                },
                {
                    area: '微信小程序2区',
                    uid: '11372102',
                    img: 'http://img.anlan.xyz/ledou/jubao/2022/0627/5.jpg?imagelim',
                    times: '初犯',
                },
                {
                    area: '微信小程序2区',
                    uid: '76897109',
                    img: 'http://img.anlan.xyz/ledou/jubao/2022/0627/6.jpg?imagelim',
                    times: '初犯',
                },
            ],
        };
    },
};
</script>