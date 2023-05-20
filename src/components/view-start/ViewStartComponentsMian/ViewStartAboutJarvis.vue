<template>
    <div class="View-About-Jarvis">
        <div class="jarvis-wrapper">
            <div class="question-about-jarvis">
                <h1>Что умеет Jarvis?</h1>
            </div>
            <div class="jarvis">
                <div class="jarvis-block">
                    <div class="first-left-block">
                        <div class="first-image"></div>
                        <h1>Рекомендательная <br /> система</h1>
                    </div>
                    <h2>Предлагает рекомендации по <br> работе с Вашими продажами:<br> предлагает цену товара, заранее <br>
                        сообщает о необходимости <br> поставки, рекомендует наиболее <br> выгодные ниши и многое другое.<br>
                        Благодаря этому вы не упустите <br> момент принятия решения, что <br> предотвратит упущенную прибыль
                        <br> и сократит Ваши расходы
                    </h2>
                </div>
                <div class="jarvis-block">
                    <div class="second-left-block">
                        <div class="second-image"></div>
                        <h1>Расчет индексов <br> показателей магазина</h1>
                    </div>
                    <h2>Собирает данные со всего <br> маркетплейса и предоставляет <br> актуальную аналитику рынка. <br>
                        Благодаря внешней аналитике и <br> рекомендательной системе Вы <br> всегда знаете, как идут дела у
                        <br> Ваших конкурентов, и сможете <br> выходить на новые ниши <br> максимально подготовленными и
                        <br> информированными
                    </h2>
                </div>
                <div class="jarvis-block">
                    <div class="first-left-block">
                        <div class="third-image"></div>
                        <h1>Расчет индексов <br> показателей магазина</h1>
                    </div>
                    <h2>Позволяет оценить финансовое <br> здоровье вашего магазина, выявить <br> рентабельные позиции и
                        отсеять <br> нерентабельные. На основе <br> внутренней аналитики <br> рекомендательная система <br>
                        подскажет, как эффективнее <br> масштабировать наиболее <br> прибыльные товары и увеличить <br>
                        продажи
                    </h2>
                </div>
                <div class="neon-line"></div>
            </div>
            <button class="button-try">Попробовать сейчас</button>
            <ViewStartTariffs />
            <ViewStartTrustedBlock/>
        </div>
    </div>
</template>
<script setup lang="ts">
import ViewStartTariffs from './ViewStartTariffs.vue';
import ViewStartTrustedBlock from './ViewStartTrustedBlock.vue';
</script> 
<style scoped lang="scss">
.View-About-Jarvis {
    width: 100%;
    color: #EEEFF3;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    height: 500vh;
    width: 100%;
    min-width: 70vw;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
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
}

.jarvis {
    display: flex;
    flex-direction: column;
    position: relative;
    background: linear-gradient(97.84deg, rgba(107, 166, 255, 0.228) 4.44%, rgba(199, 244, 70, 0.201) 93.84%);
    backdrop-filter: blur(15px);
    width: 50vw;
    height: 142vh;
    z-index: 100;

    .jarvis-block {
        display: flex;
        justify-content: space-around;
        text-align: center;
        align-items: center;
        margin-top: 163px;

        h1 {
            font-weight: 700;
            font-size: 36px;
            line-height: 44px;
        }

        h2 {
            font-weight: 400;
            font-size: 20px;
            line-height: 24px;
        }

        .first-left-block {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 80px;

            .first-image {
                height: 100px;
                width: 100px;
                background-color: #B7FF44;
            }

            .third-image {
                height: 100px;
                width: 100px;
                background-color: #B7FF44;
            }
        }

        .second-left-block {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-bottom: 80px;
            .second-image {
                height: 100px;
                width: 100px;
                background-color: #B7FF44;
            }
        }

    }
}

.neon-line {
    border-left: 1px solid #B7FF44;
    height: 130vh;
    position: absolute;
    bottom: 54px;
    left: 500.5px;
}</style>