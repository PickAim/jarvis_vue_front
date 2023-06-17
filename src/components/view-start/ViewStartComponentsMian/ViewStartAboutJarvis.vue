<template>
    <div class="view-about-jarvis">
        <div class="jarvis-wrapper">
            <div class="question-about-jarvis">
                <h1>Что умеет Jarvis?</h1>
            </div>
            <div class="blur-block">
                <div class="left-block">
                    <h1>Рекомендательная система</h1>
                    <h3>IMG</h3>
                </div>
                <div class="text-info">
                    <h2>Предлагает рекомендации по работе с Вашими продажами: предлагает цену товара, заранее
                        сообщает о необходимости поставки, рекомендует наиболее выгодные ниши и многое
                        другое.
                    </h2>
                    <h4> Благодаря этому вы не упустите момент принятия решения, что предотвратит упущенную
                        прибыль и сократит Ваши расходы
                    </h4>
                </div>
                <div class="left-block">
                    <h1>Внешняя аналитика</h1>
                    <h3>IMG</h3>
                </div>
                <div class="text-info">
                    <h2>Собирает данные со всего маркетплейса и предоставляет актуальную аналитику рынка.
                    </h2>
                    <h4>Благодаря внешней аналитике и рекомендательной системе Вы всегда знаете, как идут дела
                        у Ваших конкурентов, и сможете выходить на новые ниши максимально подготовленными и информированными
                    </h4>
                </div>
                <div class="left-block">
                    <h1>Расчет индексов показателей магазина</h1>
                    <h3>IMG</h3>
                </div>
                <div class="text-info">
                    <h2>Позволяет оценить финансовое здоровье вашего магазина, выявить рентабельные позиции и
                        отсеять нерентабельные. </h2>
                    <h4>На основе внутренней аналитики рекомендательная система подскажет, как эффективнее
                        масштабировать наиболее прибыльные товары и увеличить продажи</h4>
                </div>
            </div>
            <button class="button-try">Попробовать сейчас</button>
        </div>
    </div>
</template>
<script setup lang="ts">
</script> 
<style scoped lang="scss">
.view-about-jarvis {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #191919;
    color: #FFFFFF;
    width: 100%;
    flex: 0 0 auto;
    padding: 50px 0px;

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
    background: #191919;
    width: 100%;
    max-width: 1200px;

    .question-about-jarvis {
        text-align: center;

        h1 {
            font-weight: 700;
            font-size: 64px;
            line-height: 77px;
        }
    }

    .blur-block {
        display: grid;
        position: relative;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        background: linear-gradient(97.84deg, rgba(107, 166, 255, 0.228) 4.44%, rgba(199, 244, 70, 0.201) 93.84%);
        backdrop-filter: blur(15px);
        z-index: 100;
        max-width: 1200px;
        margin: 50px 80px;
        padding: 40px 20px 40px 20px;

        .text-info {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            text-align: start;
            border-left: 2px solid #B7FF44;
            padding: 30px;

            h2 {
                font-weight: 400;
                font-size: 20px;
                line-height: 24px;
            }
        }

        .left-block {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 10px;

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

    .button-try {
        width: 465px;
        height: 102px;
        border: 1px solid #B7FF44;
        border-radius: 12px;
        font-weight: 700;
        font-size: 23px;
        line-height: 28px;
    }
}</style>