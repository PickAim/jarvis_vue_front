<template>
    <div class="questions-wrapper">
        <h1>
            <slot name="header">Здесь будет текст</slot>
        </h1>
        <div class="arrow-link">arrow</div>
    </div>
</template>
<script setup lang="ts">

</script>
<style scoped lang="scss">
$tag-width: 1150px;

.questions-wrapper {
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

        @media (max-width: $tag-width) {
            font-size: 24px;
            font-weight: 700;
            line-height: 29px;
        }
    }

    .arrow-link {
        width: 55px;
        height: 2px;
        background-color: #B7FF44;
    }
}

@media (max-width:$tag-width) {
    .questions-wrapper {
        h1 {
            font-weight: 400;
            font-size: 12px;
            line-height: 14.63px;
        }

        .arrow-link {}
    }
}
</style>