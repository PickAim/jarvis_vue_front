<template>
    <main>
        <div class="jarvis-wrapper">
            <div class="question-about-jarvis">
                <h1>Что умеет Jarvis?</h1>
            </div>
            <div class="jarvis">
                <div class="jarvis-block">
                    <h1>Рекомендательная <br /> система</h1>
                    <h2>Предлагает рекомендации по <br> работе с Вашими продажами:<br> предлагает цену товара, заранее <br>
                        сообщает о необходимости <br> поставки, рекомендует наиболее <br> выгодные ниши и многое другое.<br>
                        Благодаря этому вы не упустите <br> момент принятия решения, что <br> предотвратит упущенную прибыль
                        <br> и сократит Ваши расходы
                    </h2>
                </div>
                <div class="jarvis-block">
                    <h1>Рекомендательная <br /> система</h1>
                    <h2>Предлагает рекомендации по <br> работе с Вашими продажами:<br> предлагает цену товара, заранее <br>
                        сообщает о необходимости <br> поставки, рекомендует наиболее <br> выгодные ниши и многое другое.<br>
                        Благодаря этому вы не упустите <br> момент принятия решения, что <br> предотвратит упущенную прибыль
                        <br> и сократит Ваши расходы
                    </h2>
                </div>
                <div class="jarvis-block">
                    <h1>Рекомендательная <br /> система</h1>
                    <h2>Предлагает рекомендации по <br> работе с Вашими продажами:<br> предлагает цену товара, заранее <br>
                        сообщает о необходимости <br> поставки, рекомендует наиболее <br> выгодные ниши и многое другое.<br>
                        Благодаря этому вы не упустите <br> момент принятия решения, что <br> предотвратит упущенную прибыль
                        <br> и сократит Ваши расходы
                    </h2>
                </div>
                <div class="neon-line"></div>
            </div>
            <button class="button-try">Попробовать сейчас</button>
            <div class="circle-first"></div>
            <div class="circle-second"></div>
            <div class="circle-back"></div>
            <div class="circle-back-second"></div>
            <div class="circle-back-third"></div>
        </div>
    </main>
</template>
<script setup lang="ts">
</script> 
<style scoped lang="scss">
main {
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
    height: 2326px;
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
        left: 407px;
        top: 3204px;
        border: 1px solid #B7FF44;
        border-radius: 12px;
        margin-top: 56px;
    }
}

.jarvis {
    display: flex;
    flex-direction: column;
    position: relative;
    background: linear-gradient(97.84deg, rgba(107, 166, 255, 0.228) 4.44%, rgba(199, 244, 70, 0.201) 93.84%);
    backdrop-filter: blur(15px);
    width: 1035px;
    height: 1405px;
    z-index: 100;

    .jarvis-block {
        display: flex;
        justify-content: center;
        text-align: center;
        align-items: center;
        gap: 110px;
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
    }
}

.neon-line {
    border-left: 1px solid #B7FF44;
    ;
    height: 1311px;
    position: absolute;
    bottom: 54px;
    left: 517.5px;
}

.circle-first {
    height: 100px;
    width: 100px;
    border-radius: 100px;
    background-color: #B7FF44;
    position: relative;
    z-index: 0;
    top: -318px;
    left: 510px;
}

.circle-second {
    height: 285px;
    width: 285px;
    border-radius: 300px;
    background-color: #B7FF44;
    position: relative;
    z-index: 0;
    bottom: 1356px;
    right: 480px;
}

.circle-back {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background-color: #B7FF44;
    position: relative;
    z-index: 0;
    bottom: 1700px;
}

.circle-back-second {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background-color: #B7FF44;
    position: relative;
    z-index: 0;
    bottom: 1348px;
}

.circle-back-third {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background-color: #B7FF44;
    position: relative;
    z-index: 0;
    bottom: 998px;
}
</style>