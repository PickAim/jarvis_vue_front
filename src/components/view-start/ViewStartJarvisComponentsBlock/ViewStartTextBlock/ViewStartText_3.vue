<template>
    <div class="text-wrapper">

        <h1>ТЕКСТ</h1>
        <div class="arrow-link">arrow</div>
    </div>
</template>
<script setup lang="ts">

</script>
<style scoped lang="scss">
.text-wrapper {
    width: 50vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-top: 1px solid #B7FF44;
    justify-content: space-between;
    padding: 20px;
    margin-bottom: 30px;

    h1 {
        font-weight: 700;
        font-size: 40px;
        line-height: 49px;
    }

    .arrow-link {
        width: 55px;
        height: 2px;
        background-color: #B7FF44;
    }
}
</style>