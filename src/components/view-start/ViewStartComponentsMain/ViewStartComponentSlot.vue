<template>
    <div class="text-menu-wrapper" id="questions">
        <div class="questions">
            <h1>ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ:</h1>
        </div>
        <div class="slots-wrapper">
            <ViewStartQuestionBlock>
                <template v-slot:header>
                    Чем вы отличаетесь от других сервисов аналитики?
                </template>
                <template v-slot:description>
                    Помимо основного функционала аналитики, Jarvis предлагает
                    рекомендации по развитию вашего бизнеса на основе
                    самоокупающейся нейросети
                </template>
            </ViewStartQuestionBlock>
            <ViewStartQuestionBlock>
                <template v-slot:header>
                    Насколько точны ваши данные?
                </template>
                <template v-slot:description>
                    Мы регулярно собираем данные и обновляем ежедневно.
                    Точность соответствия с фактическими данными равна 99%
                </template>
            </ViewStartQuestionBlock>
            <ViewStartQuestionBlock>
                <template v-slot:header>
                    Если у меня есть менеджер, будет ли мне полезен сервис?
                </template>
                <template v-slot:description>
                    Да, сервис будет полезен как селлерам работающим самостоятельно,
                    так и тем у кого есть менеджер. Jarvis увеличит эффективность работы
                    менеджера в разы. Если Вы менеджер маркетплейсов, то с нашим
                    сервисом вы сможете вести больше клиентов одновременно
                </template>
            </ViewStartQuestionBlock>
            <ViewStartQuestionBlock>
                <template v-slot:header>
                    Могу ли я ознакомится с сервисом до
                    приобретения подписки ?
                </template>
                <template v-slot:description>
                    Да, у нас есть бесплатный тариф с которым вы можете ознакомиться
                    с функционалом сервиса
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
        margin: 40px 20px;

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