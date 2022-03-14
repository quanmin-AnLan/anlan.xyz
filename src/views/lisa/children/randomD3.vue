<template>
    <section>
        <div class="head">
            <div class="title">一次随机几次：</div>
            <el-input v-model="count"></el-input>
        </div>
        <el-button class="into" @click="getUser()">点击开始随机</el-button>
        <al-table :headerSet="headerSet" :tableData="tableData"></al-table>
        <Home></Home>
    </section>
</template>

<script>
import Home from '../../../components/GoHome.vue';
import AlTable from '@/components/AlTable.vue';
export default {
    data() {
        return {
            count: 1,
            data: [
                {
                    name: '野蛮人',
                    value: ['蕾蔻', '大地', '荒原', '不朽', '90', '无套装'],
                },
                {
                    name: '圣教军',
                    value: ['阿克汉', '唤魔', '罗兰', '圣光', '勇气', '无套装'],
                },
                {
                    name: '猎魔人',
                    value: ['掠夺者', '影', '不洁', '娜塔娅', '冰吞', '无套装'],
                },
                {
                    name: '武僧',
                    value: ['上帝', '孙悟空', '乌莲娜', '尹娜', '正义', '无套装'],
                },
                {
                    name: '死灵法师',
                    value: ['拉斯玛', '塔格奥', '伊纳瑞斯', '死疫', '狂欢骨矛', '无套装'],
                },
                {
                    name: '巫医',
                    value: ['玉魂', '魔牙', '祖尼马萨', '亚拉基尔', '蒙嘟咕噜', '无套装'],
                },
                {
                    name: '魔法师',
                    value: ['不死鸟', '维尔', '绝望', '塔拉夏', '提丰', '无套装'],
                },
            ],
            tableData: [],
            headerSet: [
                {
                    prop: 'first',
                    label: '职业',
                },
                {
                    prop: 'second',
                    label: '套装',
                },
            ],
        };
    },
    components: {
        Home,
    },
    methods: {
        updateTableData() {
            const a = Math.floor(Math.random * 7);
            const b = Math.floor(Math.random * 6);
            const firstName = this.data[a].name;
            const arr = this.data[a].value;
            const secondName = arr[b];
            this.tableData.push({
                first: firstName,
                second: secondName,
            });
        },
        getUser() {
            for (let i = 0; i < this.count; i++) {
                this.updateTableData();
            }
        },
    },
};
</script>

<style lang="less" scoped>
    
</style>