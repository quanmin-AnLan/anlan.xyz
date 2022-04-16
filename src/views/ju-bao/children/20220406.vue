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
            month: '4',
            day: '6',
            tableData: [
                {
                    area: '空间1区',
                    uid: '9173676',
                    img: 'http://img.anlan.xyz/ledou/jubao/2022/0406/1.jpg?imagelim',
                    times: '第2次',
                },
                {
                    area: '空间3区',
                    uid: '49261101',
                    img: 'http://img.anlan.xyz/ledou/jubao/2022/0406/2.jpg?imagelim',
                    times: '初犯',
                },
                {
                    area: '空间3区',
                    uid: '5784486',
                    img: 'http://img.anlan.xyz/ledou/jubao/2022/0328/1.jpg?imagelim',
                    times: '第3次',
                },
                {
                    area: '空间4区',
                    uid: '29687129',
                    img: 'http://img.anlan.xyz/ledou/jubao/2022/0307/2.jpg?imagelim',
                    times: '第2次',
                },
                {
                    area: '微信小程序12区',
                    uid: '18268157',
                    img: 'http://img.anlan.xyz/ledou/jubao/2022/0307/1.jpg?imagelim',
                    times: '第2次',
                },
            ],
        };
    },
};
</script>