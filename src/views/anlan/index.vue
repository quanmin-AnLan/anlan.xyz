<template>
    <section class="anlan-container">
        <div class="title">建设中</div>
    </section>
</template>

<script>
export default {
    name: 'anlan',
};
</script>

<style lang="less" scoped>
.anlan-container {
    min-height: calc(100vh - 50px);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    .title {
        width: 100px;
        height: 50px;
        line-height: 50px;
        background: #f00;
    }
}
</style>