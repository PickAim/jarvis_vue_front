<template>
    <div class="View-About-Jarvis">
        <div class="jarvis-wrapper">
            <div class="question-about-jarvis">
                <h1>Что умеет Jarvis?</h1>
            </div>
            <div class="jarvis">
                <div class="jarvis-block">
                    <div class="left-block">
                        <h1>Рекомендательная <br /> система</h1>
                        <h3>IMG</h3>
                    </div>
                    <div class="text-info">
                        <h2>Предлагает рекомендации по <br> работе с Вашими продажами:<br> предлагает цену товара, заранее
                            <br>
                            сообщает о необходимости <br> поставки, рекомендует наиболее <br> выгодные ниши и многое
                            другое.<br>
                        </h2>
                        <h4> Благодаря этому вы не упустите <br> момент принятия решения, что <br> предотвратит упущенную
                            прибыль
                            <br> и сократит Ваши расходы
                        </h4>
                    </div>
                </div>
                <div class="jarvis-block">
                    <div class="left-block">
                        <h1>Внешняя аналитика</h1>
                        <h3>IMG</h3>
                    </div>
                    <div class="text-info">
                        <h2>Собирает данные со всего <br> маркетплейса и предоставляет <br> актуальную аналитику рынка.
                        </h2>
                        <h4>Благодаря внешней аналитике и <br> рекомендательной системе Вы всегда знаете, <br> как идут дела
                            у Ваших конкурентов, и <br> сможете выходить на новые ниши <br> максимально подготовленными и
                            <br> информированными</h4>
                    </div>
                </div>
                <div class="jarvis-block">
                    <div class="left-block">
                        <h1>Расчет индексов <br> показателей магазина</h1>
                        <h3>IMG</h3>
                    </div>
                    <div class="text-info">
                        <h2>Позволяет оценить финансовое <br> здоровье вашего магазина, выявить <br> рентабельные позиции и
                            отсеять <br> нерентабельные. </h2>
                        <h4>На основе внутренней аналитики <br> рекомендательная система подскажет, как <br> эффективнее
                            масштабировать наиболее <br> прибыльные товары и увеличить продажи</h4>
                    </div>
                </div>

            </div>
            <button class="button-try">Попробовать сейчас</button>
            <ViewStartTariffs />
            <ViewStartTrustedBlock />
            <ViewStartComponentsText />
            <ViewStartFormBlock/>
        </div>
    </div>
</template>
<script setup lang="ts">
import ViewStartComponentsText from "../ViewStartJarvisComponentsBlock/ViewStartComponentsText.vue";
import ViewStartTrustedBlock from "../ViewStartJarvisComponentsBlock/ViewStartTrustedBlock.vue";
import ViewStartTariffs from "../ViewStartJarvisComponentsBlock/ViewStartTariffs.vue"
import ViewStartFormBlock from "../ViewStartJarvisComponentsBlock/ViewStartFormBlock.vue"
</script> 
<style scoped lang="scss">
.View-About-Jarvis {
    display: flex;
    flex-direction: column;
    flex: 0 0 auto;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #191919;
    color: #FFFFFF;

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
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    background: #191919;

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

    .jarvis {
        display: grid;
        position: relative;
        background: linear-gradient(97.84deg, rgba(107, 166, 255, 0.228) 4.44%, rgba(199, 244, 70, 0.201) 93.84%);
        backdrop-filter: blur(15px);
        z-index: 100;
        align-items: center;

        .jarvis-block {
            display: grid;
            grid-template-columns: 400px 400px;
            grid-template-rows: 250px;
            justify-content: space-around;
            align-items: start;
            margin: 45px 15px 40px 15px;



            .text-info {
                display: flex;
                flex-direction: column;
                text-align: start;
                gap: 10px;
                padding-left: 50px;
                
                border-left:  #B7FF44;
                h2 {
                    font-weight: 400;
                    font-size: 20px;
                    line-height: 24px;
                }
            }

            .left-block {
                display: flex;
                flex-direction: column;
                

                h1 {
                    font-weight: 700;
                    font-size: 36px;
                    line-height: 44px;
                }

                h3 {
                    color: #B7FF44;
                }
            }
        }
    }

    .button-try {
        width: 465px;
        height: 102px;
        border: 1px solid #B7FF44;
        border-radius: 12px;
        margin-top: 56px;
        font-weight: 700;
        font-size: 23px;
        line-height: 28px;
    }
}</style>