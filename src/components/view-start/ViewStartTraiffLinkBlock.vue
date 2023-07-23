<template>
    <div class="view-cards-block">
        <div class="buttons-wrapper">
            <img src="src\assets\jarvis.png" alt="">
            <button class="about-product">О продукте</button>
            <button class="tariffs">Тарифы</button>
            <button class="question">Вопросы</button>
            <button class="login-button" @click="actions.openLoginOverlay()">Вход</button>
            <button class="reg-button" @click="actions.openRegistrationOverlay()">Регистрация</button>
        </div>
        <div class="tariff-title">
            <div class="tariff-paragraph">
                ТАРИФЫ:
            </div>
            <div class="tariff-table">
                <div class="tariffs-types">
                    <div></div>
                    <div class="base-type">БАЗОВЫЙ</div>
                    <div class="advanced-type">ПРОДВИНУТЫЙ</div>
                    <div class="professional-type">ПРОФЕССИОНАЛЬНЫЙ</div>
                </div>
                <div class="advantages">
                    <div class="advantages-title">Дашборд с ключивыми показателями</div>
                    <div>+</div>
                    <div>+</div>
                    <div>+</div>
                </div>
                <div class="advantages">
                    <div class="advantages-title">Калькулятор юнит-экономики</div>
                    <div>+</div>
                    <div>+</div>
                    <div>+</div>
                </div>
                <div class="advantages">
                    <div class="advantages-title">Оценка финансового здоровья магазина</div>
                    <div>+</div>
                    <div>+</div>
                    <div>+</div>
                </div>
                <div class="advantages">
                    <div class="advantages-title">Расчет поставки</div>
                    <div>+</div>
                    <div>+</div>
                    <div>+</div>
                </div>
                <div class="advantages">
                    <div class="advantages-title">Смарт-анализ товарной ниши</div>
                    <div>+</div>
                    <div>+</div>
                    <div>+</div>
                </div>
                <div class="advantages">
                    <div class="advantages-title">Управление остатками на складах</div>
                    <div>+</div>
                    <div>+</div>
                    <div>+</div>
                </div>
                <div class="advantages">
                    <div class="advantages-title">Рекомендации по цене</div>
                    <div>+</div>
                    <div>+</div>
                    <div>+</div>
                </div>
                <div class="advantages">
                    <div class="advantages-title">Сегментарный анализ</div>
                    <div>+</div>
                    <div>+</div>
                    <div>+</div>
                </div>
                <div class="advantages">
                    <div class="advantages-title">SEO-оптимизация</div>
                    <div>+</div>
                    <div>+</div>
                    <div>+</div>
                </div>
                <div class="type-price">
                    <div></div>
                    <div class="price-block">
                        <button class="button-price">5000</button>
                    </div>
                    <div class="price-block">
                        <button class="button-price">10000</button>
                    </div>
                    <div class="price-block">
                        <button class="button-price">15000</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="tariff-description">
            <div class="question-tarif">КАКОЙ ТАРИФ ПОДОЙДЕТ ИМЕННО ВАМ?</div>
            <div class="type-description">
                <div class="base-description">
                    <div class="base-name">БАЗОВЫЙ</div>
                    <div class="base-name-description-1">
                        Малый бизнес,
                        не имеющий больших
                        средств на более
                        дорогую подписку
                    </div>
                    <div class="base-name-description-2">
                        Бизнес не имеет продаж,
                        поэтому нуждается в самой
                        базовой аналитике
                    </div>
                </div>
                <div class="advanced-description">
                    <div class="advanced-name">ПРОДВИНУТЫЙ</div>
                    <div class="advanced-name-description-1">
                        Малый и средний бизнес,
                        нуждающийся в полном
                        функционале
                        рекомендательной
                        системы для принятия
                        решений
                    </div>
                    <div class="advanced-name-description-2">
                        Бизнес стабилен, но есть
                        потребность
                        в масштабировании
                        и увеличении продаж;
                        есть запрос на
                        автоматизацию бизнеса
                    </div>
                </div>
                <div class="professional-description">
                    <div class="professional-name">ПРОФЕССИОНАЛЬНЫЙ</div>
                    <div class="professional-name-description-1">
                        Малый и средний бизнес,
                        активно масштабирующийся
                        или развивающий разные
                        направления; менеджеры
                        маркетплейсов, работающие
                        с несколькими клиентами
                        одновременно
                    </div>
                    <div class="professional-name-description-2">
                        Иметь весь возможный
                        спектр инструментов для
                        глубокого и гибкого
                        управления продажами,
                        возможно через несколько
                        магазинов
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ViewStartActions } from "@/component-classes/ViewStartActions";
import { useRouter } from "vue-router";

const actions = new ViewStartActions();
const router = useRouter();
</script>
<style scoped lang="scss">
$tag-width: 1150px;

.view-cards-block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
    width: 100%;
    background-color: rgba(25, 25, 25, 1);
    color: rgba(255, 255, 255, 1);

    .buttons-wrapper {
        display: flex;
        flex-direction: row;
        width: 100%;
        align-items: center;
        justify-content: space-around;

        img {
            width: 200px;
        }

        button {
            font-weight: 400;
            font-size: 24px;
            line-height: 29px;
        }

        .login-button {
            border: 1px solid rgba(183, 255, 68, 1);
            padding: 10px 25px;
            border-radius: 15px;
        }

        .reg-button {
            border: 1px solid rgba(183, 255, 68, 1);
            padding: 10px 25px;
            border-radius: 15px;
        }
    }

    .tariff-title {
        display: flex;
        flex-direction: column;
        justify-content: center;

        .tariff-paragraph {
            font-weight: 700;
            font-size: 64px;
            line-height: 78px;
            margin: 70px 0px;
            text-align: center;
        }

        .tariff-table {
            display: grid;
            grid-template-rows: 1fr;
            background: linear-gradient(97.84deg, rgba(217, 217, 217, 0.087) 4.44%, rgba(0, 0, 0, 0.249) 93.84%);
            backdrop-filter: blur(15px);
            max-width: 1000px;
            text-align: center;
            padding: 30px 40px;

            .tariffs-types {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr 1fr;
                text-align: center;
                border-bottom: 1px solid rgba(183, 255, 68, 1);
                padding: 10px 0px 20px 10px;

                .base-type {
                    font-weight: 700;
                    font-size: 20px;
                    line-height: 24px;
                    color: #D9D9D9;
                }

                .advanced-type {
                    font-weight: 700;
                    font-size: 20px;
                    line-height: 24px;
                    color: #7026EB;
                }

                .professional-type {
                    font-weight: 700;
                    font-size: 20px;
                    line-height: 24px;
                    color: #B7FF44;
                }
            }

            .advantages {
                display: grid;
                grid-template-columns: 1.5fr 1.5fr 1.5fr 1.5fr;
                padding: 10px;
                text-align: center;
                align-items: center;

                .advantages-title {
                    text-align: start;
                    align-items: center;
                    font-weight: 700;
                    font-size: 24px;
                    line-height: 29px;
                    color: #D9D9D9;
                    padding: 20px 0px;
                }
            }

            .type-price {
                display: grid;
                grid-template-columns: 1.5fr 1.5fr 1.5fr 1.5fr;
                text-align: center;
                padding: 10px;

                .price-block {
                    .button-price {
                        background-color: rgba(183, 255, 68, 1);
                        color: rgba(0, 0, 0, 1);
                        padding: 10px 30px;
                        border-radius: 20px;
                        font-weight: 700;
                        font-size: 23px;
                        line-height: 28px;
                    }

                }
            }
        }
    }

    .view-tariffs-block {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 50px 0;
        color: #FFFFFF;
        background-color: #191919;
        width: 100%;

        .tariffs-name {
            padding-bottom: 50px;

            h1 {
                font-weight: 700;
                font-size: 48px;
                line-height: 59px;
            }
        }

        .tariffs-wrapper {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            align-items: center;
            column-gap: 19px;
            max-width: 1000px;

            .tariff-side-wrapper {
                display: flex;
                flex-direction: row;
                height: 100%;
                overflow: hidden;
                align-items: center;
                padding-block: 20px;
            }

            .tariff {
                display: flex;
                height: 100%;
                overflow: hidden;
                flex-direction: column;
                align-items: center;
                text-align: center;
                justify-content: space-between;
                border: 1px solid #B7FF44;
                border-radius: 24px;
                padding: 10px;

                h1 {
                    margin: 20px;
                }

                .board-info {
                    display: flex;
                    flex-direction: column;
                    font-weight: 700;
                    font-size: 24px;
                    line-height: 29px;

                    span {
                        padding-block: 40px;
                    }
                }

                &.second-tariff {
                    background: #B7FF44;
                    color: #000000;
                    border: 1px solid #B7FF44;
                }

                &.first-tariff,
                &.third-tariff {
                    margin-block: 20px;
                }

                .simple-button-try {
                    padding: 10px;
                    background: #B7FF44;
                    border: 1px black solid;
                    color: #000000;
                    border-radius: 12px;
                    font-weight: 700;
                    font-size: 23px;
                    line-height: 28px;
                    margin: 10px;
                }
            }
        }
    }

    @media (max-width: $tag-width) {
        .view-tariffs-block {
            padding: 0px 40px;

            .tariffs-name {
                padding: 0px;

                h1 {
                    font-weight: 700;
                    font-size: 24px;
                    line-height: 29px;
                }
            }

            .tariffs-wrapper {
                display: grid;
                grid-template-columns: 1fr;
                gap: 20px;

                .tariff-side-wrapper {
                    overflow: hidden;
                }

                .tariff {
                    overflow: hidden;

                    h1 {}

                    .board-info {
                        line-height: 24px;
                        font-weight: 700;
                        font-size: 20px;

                        span {
                            padding-block: 25px;
                        }
                    }

                    &.second-tariff {}

                    &.first-tariff,
                    &.third-tariff {
                        margin-block: 20px;
                    }

                    .simple-button-try {
                        line-height: 24px;
                        font-size: 20px;
                        font-weight: 700;

                    }
                }
            }
        }
    }

    .tariff-description {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 50px;

        .question-tarif {
            font-weight: 700;
            font-size: 48px;
            line-height: 59px;
            color: #FFFFFF;
        }

        .type-description {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            max-width: 1200px;
            margin: 50px 0px;
            gap: 40px;

            .base-description {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                padding: 10px;
                gap: 20px;
                max-width: 300px;
                .base-name {
                    display: flex;
                    flex-direction: column;
                    background: #F0F0F0;
                    border-radius: 17px;
                    font-weight: 700;
                    font-size: 24px;
                    line-height: 29px;
                    color: #000000;
                    text-align: center;
                    padding: 10px 20px;

                }

                .base-name-description-1 {
                    border-bottom: 1px solid #B7FF44;
                    font-weight: 700;
                    font-size: 24px;
                    line-height: 29px;
                    color: #D9D9D9;

                }

                .base-name-description-2 {

                    font-weight: 700;
                    font-size: 24px;
                    line-height: 29px;
                    color: #D9D9D9;

                }
            }

            .advanced-description {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                padding: 10px;
                gap: 20px;
                max-width: 300px;
                .advanced-name {
                    display: flex;
                    flex-direction: column;
                    background: rgba(112, 38, 235, 1);
                    border-radius: 17px;
                    font-weight: 700;
                    font-size: 24px;
                    line-height: 29px;
                    color: rgba(255, 255, 255, 1);
                    text-align: center;
                    padding: 10px 20px;
                }

                .advanced-name-description-1 {
                    border-bottom: 1px solid #B7FF44;
                    font-weight: 700;
                    font-size: 24px;
                    line-height: 29px;
                    color: #D9D9D9;

                }

                .advanced-name-description-2 {
                    padding: 20px 50px 20px 0px;
                    font-weight: 700;
                    font-size: 24px;
                    line-height: 29px;
                    color: #D9D9D9;

                }
            }

            .professional-description {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                padding: 10px;
                gap: 20px;
                max-width: 300px;

                .professional-name {
                    display: flex;
                    flex-direction: column;
                    background: rgba(183, 255, 68, 1);
                    border-radius: 17px;
                    font-weight: 700;
                    font-size: 24px;
                    line-height: 29px;
                    color: rgba(0, 0, 0, 1);
                    text-align: center;
                    padding: 10px 20px;
                }

                .professional-name-description-1 {

                    border-bottom: 1px solid #B7FF44;
                    font-weight: 700;
                    font-size: 24px;
                    line-height: 29px;
                    color: #D9D9D9;


                }

                .professional-name-description-2 {
                    font-weight: 700;
                    font-size: 24px;
                    line-height: 29px;
                    color: #D9D9D9;

                }
            }
        }
    }

    @media (max-width: $tag-width) {}
}</style>