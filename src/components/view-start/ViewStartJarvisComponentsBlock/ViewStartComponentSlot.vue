<template>
    <div class="text-menu-wrapper">
        <div class="questions">
            <h1>ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ:</h1>
        </div>
        <div class="slots-wrapper">

            <ViewStartSlotBlock>
                <template v-slot:header>
                    Текст 1
                </template>
            </ViewStartSlotBlock>
            <ViewStartSlotBlock>
                <template v-slot:header>
                    Текст 2
                </template>
            </ViewStartSlotBlock>
            <ViewStartSlotBlock>
                <template v-slot:header>
                    Текст 3
                </template>
            </ViewStartSlotBlock>
            <ViewStartSlotBlock>
                <template v-slot:header>
                    Текст 4
                </template>
            </ViewStartSlotBlock>
        </div>
    </div>
</template>
<script setup lang="ts">
import ViewStartSlotBlock from '../ViewStartJarvisComponentsBlock/ViewStartSlotBlock.vue';

</script>
<style scoped lang="scss">
.text-menu-wrapper {
    display: flex;
    flex-direction: column;
    flex: 0 0 auto;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #191919;
    color: #FFFFFF;
    margin: 50px 0px;

    .questions {
        margin: 50px 0px;

        h1 {
            font-weight: 700;
            font-size: 48px;
            line-height: 59px;
        }
    }

    .slots-wrapper {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 1200px;
        padding: 0px 50px;
    }
}
</style>