<template>
    <div class="text-menu-wrapper">
        <div class="questions">
            <h1>ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ:</h1>
        </div>
        <ViewStartText_1 />
        <ViewStartText_2/>
        <ViewStartText_3/>
        <ViewStartText_4/>
    </div>
</template>
<script setup lang="ts">
import ViewStartText_1 from "./ViewStartTextBlock/ViewStartText_1.vue";
import ViewStartText_2 from "./ViewStartTextBlock/ViewStartText_2.vue";
import ViewStartText_3 from "./ViewStartTextBlock/ViewStartText_3.vue";
import ViewStartText_4 from "./ViewStartTextBlock/ViewStartText_4.vue";
</script>
<style scoped lang="scss">
.text-menu-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex: 0 0 auto;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #191919;
    color: #FFFFFF;

    .questions {
        margin-top: 150px;
        margin-bottom: 150px;

        h1 {
            font-weight: 700;
            font-size: 48px;
            line-height: 59px;
        }

    }

}
</style>