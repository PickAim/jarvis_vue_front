<template>
    <main>
        <div class="jarvis-wrapper">
            <div class="question-about-jarvis">
                <h1>Что умеет Jarvis?</h1>
            </div>
            <div class="jarvis-block">
                <div class="elements-jarvis-block">
                    <img src="src\assets\Снимок экрана 2023-03-07 в 21 1.png" alt="">
                    <div class="information-block-title">
                        <h1>Рекомендательная <br /> система</h1>
                        <div class="offer-information">
                            <h1>Предлагает рекомендации по <br> работе с Вашими продажами: <br> предлагает цену товара,
                                заранее <br> сообщает о необходимости <br> поставки, рекомендует наиболее <br> выгодные ниши
                                и многое другое. <br> Благодаря этому вы не упустите <br> момент принятия решения, что <br>
                                предотвратит упущенную прибыль <br> и сократит Ваши расходы</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div class="jarvis-block">
                <div class="elements-jarvis-block-back">
                    <div class="information-block-title-back">
                        <h1>Внешняя аналитика</h1>
                        <div class="offer-information-back">
                            <h1>Собирает данные со всего <br> маркетплейса и предоставляет <br> актуальную аналитику
                                рынка.<br> Благодаря внешней аналитике и <br> рекомендательной системе Вы <br> всегда
                                знаете, как идут дела у Ваших <br> конкурентов, и сможете выходить на <br> новые ниши
                                максимально <br> подготовленными и <br> информированными</h1>
                        </div>
                    </div>
                    <img src="src\assets\Снимок экрана 2023-03-07 в 21 1.png" alt="">
                </div>
            </div>
            <div class="jarvis-block">
                <div class="elements-jarvis-block">
                    <img src="src\assets\Снимок экрана 2023-03-07 в 21 1.png" alt="">
                    <div class="information-block-title">
                        <h1>Расчет индексов <br /> показателей магазина</h1>
                        <div class="offer-information">
                            <h1>Позволяет оценить финансовое <br> здоровье вашего магазина, выявить <br> рентабельные
                                позиции и отсеять <br> нерентабельные. На основе <br> внутренней аналитики <br>
                                рекомендательная система подскажет,<br> как эффективнее масштабировать <br>наиболее
                                прибыльные товары и <br> увеличить продажи</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<script setup lang="ts">
</script> 
<style scoped lang="scss">
main {
    width: 100%;
    color: #EEEFF3;
    background-color: #EEEFF3;
    display: flex;
    flex-direction: column;
    //max-width: 1280px;
    flex: 0 0 auto;

    h1 {
        @font-face {
            font-family: Inter;
            src: url(src\assets\Inter-SemiBold.otf);
        }
    }

    p {
        @font-face {
            font-family: Montserrat;
            src: url(src\assets\Montserrat-Light.ttf);
        }
    }
}

.jarvis-wrapper {
    height: 2326px;
    border: 1px solid black;
    //background: url(src/assets/BackgroundJarvis.jpg);
    //background-repeat: no-repeat;
    //background-size: cover;

    .question-about-jarvis {
        text-align: center;
        margin-top: 37px;
        margin-bottom: 82px;

        h1 {
            font-weight: 700;
            font-size: 64px;
            line-height: 77px;
        }
    }
}

.jarvis-block {
    .elements-jarvis-block {
        display: flex;
        flex-direction: row;
        margin-left: 56px;

        img {
            width: 568px;
            height: 461px;
            margin-top: 60px;
        }

        .information-block-title {
            margin-left: 81px;

            h1 {
                font-weight: 700;
                font-size: 40px;
                line-height: 49px;
                text-align: center;
                margin-bottom: 29px;
            }

            .offer-information {
                display: flex;
                justify-content: center;
                width: 504px;
                height: 364px;
                //background: rgba(158, 158, 158, 0.2);
                //backdrop-filter: blur(5px);
                border-radius: 24px;
                border: 1px solid black;

                h1 {
                    font-weight: 400;
                    font-size: 20px;
                    line-height: 24px;
                    text-align: center;
                    margin: 72px 48px 61px 67px;
                }
            }
        }
    }
}

.elements-jarvis-block-back {
    display: flex;
    flex-direction: row;
    margin-left: 82px;
    margin-top: 164px;
    margin-bottom: 134px;

    .information-block-title-back {
        margin-right: 77px;

        h1 {
            font-weight: 700;
            font-size: 40px;
            line-height: 49px;
            text-align: center;
            margin-bottom: 31px;
        }

        .offer-information-back {
            display: flex;
            justify-content: center;
            width: 504px;
            height: 364px;
            //background: rgba(158, 158, 158, 0.2);
            //backdrop-filter: blur(5px);
            border-radius: 24px;
            border: 1px solid black;

            h1 {
                font-weight: 400;
                font-size: 20px;
                line-height: 24px;
                text-align: center;
                margin: 58px 58px 75px 57px;
            }
        }
    }

    img {
        width: 568px;
        height: 461px;
        margin-top: 34px;
    }
}
</style>