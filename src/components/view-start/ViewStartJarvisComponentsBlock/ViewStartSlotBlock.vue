<template>
    <div class="slot-wrapper">
        <h1>
            <slot name="header">Здесь будет текст</slot>
        </h1>
        <div class="arrow-link">arrow</div>
    </div>
</template>
<script setup lang="ts">

</script>
<style scoped lang="scss">
.slot-wrapper {
    width: 100%;
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