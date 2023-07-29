<template>
    <div class="text-menu-wrapper" id="questions">
        <div class="questions">
            <h1>ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ:</h1>
        </div>
        <div class="slots-wrapper">
            <ViewStartQuestionBlock>
                <template v-slot:header>
                    Текст 1
                </template>
            </ViewStartQuestionBlock>
            <ViewStartQuestionBlock>
                <template v-slot:header>
                    Текст 2
                </template>
            </ViewStartQuestionBlock>
            <ViewStartQuestionBlock>
                <template v-slot:header>
                    Текст 3
                </template>
            </ViewStartQuestionBlock>
            <ViewStartQuestionBlock>
                <template v-slot:header>
                    Текст 4
                </template>
            </ViewStartQuestionBlock>
        </div>
    </div>
</template>
<script setup lang="ts">
import ViewStartQuestionBlock from "./ViewStartQuestionBlock.vue";

</script>
<style scoped lang="scss">
$tag-width: 1150px;

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

@media (max-width: $tag-width) {
    .text-menu-wrapper {
        margin: 50px 20px;

        .questions {

            h1 {
                font-weight: 700;
                font-size: 24px;
                line-height: 29.26px;
            }
        }

        .slots-wrapper {
            max-width: 600px;
        }
    }
}
</style>