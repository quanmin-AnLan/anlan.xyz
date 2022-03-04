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
            month: '1-3',
            day: '4',
            tableData: [
                {
                    area: '微信小程序1区',
                    uid: '71178269',
                    img: 'http://img.anlan.xyz/ledou/jubao/2022/0207/4.jpg?imagelim',
                    times: '第5次',
                },
                {
                    area: '微信小程序1区',
                    uid: '5888616',
                    img: 'http://img.anlan.xyz/ledou/jubao/2022/0207/5.jpg?imagelim',
                    times: '第2次',
                },
                {
                    area: '微信小程序1区',
                    uid: '9838142',
                    img: 'http://img.anlan.xyz/ledou/jubao/2022/0104/2.jpg?imagelim',
                    times: '初犯',
                },
                {
                    area: '微信小程序1区',
                    uid: '10364101',
                    img: 'http://img.anlan.xyz/ledou/jubao/2022/0117/9.jpg?imagelim',
                    times: '初犯',
                },
                {
                    area: '微信小程序1区',
                    uid: '7620138',
                    img: 'http://img.anlan.xyz/ledou/jubao/2022/0124/8.jpg?imagelim',
                    times: '初犯',
                },
                {
                    area: '微信小程序1区',
                    uid: '732287',
                    img: 'http://img.anlan.xyz/ledou/jubao/2022/0124/9.jpg?imagelim',
                    times: '初犯',
                },
                {
                    area: '微信小程序1区',
                    uid: '27440358',
                    img: 'http://img.anlan.xyz/ledou/jubao/2022/0124/10.jpg?imagelim',
                    times: '初犯',
                },
                {
                    area: '微信小程序1区',
                    uid: '5102443',
                    img: 'http://img.anlan.xyz/ledou/jubao/2022/0124/11.jpg?imagelim',
                    times: '第4次',
                },
                {
                    area: '微信小程序1区',
                    uid: '93043369',
                    img: 'http://img.anlan.xyz/ledou/jubao/2022/0124/12.jpg?imagelim',
                    times: '初犯',
                },
                {
                    area: '微信小程序1区',
                    uid: '2198111',
                    img: 'http://img.anlan.xyz/ledou/jubao/2022/0124/13.jpg?imagelim',
                    times: '初犯',
                },
                {
                    area: '微信小程序1区',
                    uid: '9386640',
                    img: 'http://img.anlan.xyz/ledou/jubao/2022/0124/14.jpg?imagelim',
                    times: '初犯',
                },
                {
                    area: '微信小程序1区',
                    uid: '3078412',
                    img: 'http://img.anlan.xyz/ledou/jubao/2022/0124/15.jpg?imagelim',
                    times: '初犯',
                },
                {
                    area: '微信小程序1区',
                    uid: '84393342',
                    img: 'http://img.anlan.xyz/ledou/jubao/2022/0124/16.jpg?imagelim',
                    times: '初犯',
                },
                {
                    area: '微信小程序2区',
                    uid: '5669072',
                    img: 'http://img.anlan.xyz/ledou/jubao/2022/0104/3.jpg?imagelim',
                    times: '初犯',
                },
                {
                    area: '微信小程序2区',
                    uid: '94967119',
                    img: 'http://img.anlan.xyz/ledou/jubao/2022/0117/5.jpg?imagelim',
                    times: '初犯',
                },
                {
                    area: '微信小程序2区',
                    uid: '66951101',
                    img: 'http://img.anlan.xyz/ledou/jubao/2022/0117/6.jpg?imagelim',
                    times: '第2次',
                },
                {
                    area: '微信小程序2区',
                    uid: '459862',
                    img: 'http://img.anlan.xyz/ledou/jubao/2022/0214/1.jpg?imagelim',
                    times: '初犯',
                },
                {
                    area: '微信小程序2区',
                    uid: '9612093',
                    img: 'http://img.anlan.xyz/ledou/jubao/2022/0214/2.jpg?imagelim',
                    times: '第2次',
                },
                {
                    area: '微信小程序10区',
                    uid: '71858131',
                    img: 'http://img.anlan.xyz/ledou/jubao/2022/0117/4.jpg?imagelim',
                    times: '第3次',
                },
                {
                    area: '微信小程序12区',
                    uid: '64082190',
                    img: 'http://img.anlan.xyz/ledou/jubao/2022/0104/4.jpg?imagelim',
                    times: '初犯',
                },
                {
                    area: '微信小程序12区',
                    uid: '81938187',
                    img: 'http://img.anlan.xyz/ledou/jubao/2022/0104/5.jpg?imagelim',
                    times: '初犯',
                },
                {
                    area: '微信小程序12区',
                    uid: '18268157',
                    img: 'http://img.anlan.xyz/ledou/jubao/2022/0307/1.jpg?imagelim',
                    times: '初犯',
                },
                {
                    area: '空间1区',
                    uid: '3765059',
                    img: 'http://img.anlan.xyz/ledou/jubao/2022/0214/3.jpg?imagelim',
                    times: '初犯',
                },
                {
                    area: '空间1区',
                    uid: '9440847',
                    img: 'http://img.anlan.xyz/ledou/jubao/2022/0214/4.jpg?imagelim',
                    times: '初犯',
                },
                {
                    area: '空间2区',
                    uid: '2710244',
                    img: 'http://img.anlan.xyz/ledou/jubao/2022/0117/3.jpg?imagelim',
                    times: '初犯',
                },
                {
                    area: '空间2区',
                    uid: '6069451',
                    img: 'http://img.anlan.xyz/ledou/jubao/2022/0117/8.jpg?imagelim',
                    times: '初犯',
                },
                {
                    area: '空间3区',
                    uid: '5784486',
                    img: 'http://img.anlan.xyz/ledou/jubao/2022/0221/1.jpg?imagelim',
                    times: '初犯',
                },
                {
                    area: '空间4区',
                    uid: '87879101',
                    img: 'http://img.anlan.xyz/ledou/jubao/2022/0207/6.jpg?imagelim',
                    times: '第2次',
                },
                {
                    area: '空间4区',
                    uid: '91089107',
                    img: 'http://img.anlan.xyz/ledou/jubao/2022/0207/7.jpg?imagelim',
                    times: '第4次',
                },
                {
                    area: '空间4区',
                    uid: '9172382',
                    img: 'http://img.anlan.xyz/ledou/jubao/2022/0104/1.jpg?imagelim',
                    times: '初犯',
                },
                {
                    area: '空间4区',
                    uid: '3111294',
                    img: 'http://img.anlan.xyz/ledou/jubao/2022/0124/1.jpg?imagelim',
                    times: '初犯',
                },
                {
                    area: '空间4区',
                    uid: '96697115',
                    img: 'http://img.anlan.xyz/ledou/jubao/2022/0124/3.jpg?imagelim',
                    times: '初犯',
                },
                {
                    area: '空间4区',
                    uid: '42553103',
                    img: 'http://img.anlan.xyz/ledou/jubao/2022/0124/4.jpg?imagelim',
                    times: '初犯',
                },
                {
                    area: '空间5区',
                    uid: '18098110',
                    img: 'http://img.anlan.xyz/ledou/jubao/2022/0110/1.jpg?imagelim',
                    times: '初犯',
                },
                {
                    area: '空间5区',
                    uid: '17226112',
                    img: 'http://img.anlan.xyz/ledou/jubao/2022/0117/2.jpg?imagelim',
                    times: '初犯',
                },
                {
                    area: '空间5区',
                    uid: '32808106',
                    img: 'http://img.anlan.xyz/ledou/jubao/2022/0124/5.jpg?imagelim',
                    times: '初犯',
                },
                {
                    area: '空间5区',
                    uid: '62089104',
                    img: 'http://img.anlan.xyz/ledou/jubao/2022/0124/6.jpg?imagelim',
                    times: '初犯',
                },
                {
                    area: '空间5区',
                    uid: '60612118',
                    img: 'http://img.anlan.xyz/ledou/jubao/2022/0124/7.jpg?imagelim',
                    times: '初犯',
                },
            ],
        };
    },
};
</script>