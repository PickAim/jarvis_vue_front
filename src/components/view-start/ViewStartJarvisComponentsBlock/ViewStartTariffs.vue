<template>
    <div class="View-Tariffs-Block">
        <div class="tariffs-wrapper">
            <div class="external-tariffs">
                <div class="tariffs-image">Img</div>
                <div class="board-info">
                    <h1>Дашборд <br> с системой виджетов</h1>
                    <h1>Внутренняя аналитика</h1>
                    <h1>Рекомендации <br> по ценообразованию</h1>
                </div>
                <button class="simple-button-try">Попробовать сейчас</button>
            </div>
            <div class="mid-tariffs">
                <div class="tariffs-image-2">Img</div>
                <div class="board-info-2">
                    <h1>Дашборд <br> с системой виджетов</h1>
                    <h1>Внутренняя аналитика</h1>
                    <h1>Внешняя аналитика</h1>
                    <h1>Рекомендации <br> по ценообразованию</h1>
                </div>
                <button class="basic-button-try">Попробовать сейчас</button>
            </div>
            <div class="external-tariffs">
                <div class="tariffs-image">Img</div>
                <div class="board-info">
                    <h1>Дашборд <br> с системой виджетов</h1>
                    <h1>Внутренняя аналитика</h1>
                    <h1>Рекомендации <br> по ценообразованию</h1>
                </div>
                <button class="simple-button-try">Попробовать сейчас</button>
            </div>
        </div>
    </div>
</template>
    
<script setup lang="ts">

</script>
    
<style scoped lang="scss">
.View-Tariffs-Block {
    width: 100%;
    min-width: 70vw;
    display: flex;
    flex-direction: column;
    flex: 0 0 auto;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 45px;
    color: #FFFFFF;

    h1 {
        @font-face {
            font-family: Inter;
            src: url(src\assets\fonts\Inter-SemiBold.otf);
        }
    }

    p {
        @font-face {
            font-family: Montserrat;
            src: url(src\assets\fonts\Montserrat-LightItalic.ttf);
        }
    }
}

.tariffs-wrapper {
    display: flex;
    flex-direction: row;
    margin-top: 50px;
    gap: 19px;
    align-items: center;
    height: 100vh;
}

.external-tariffs {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20vw;
    height: 82vh;
    border: 1px solid #B7FF44;
    backdrop-filter: blur(5px);
    border-radius: 24px;

    .tariffs-image {
        width: 150px;
        height: 150px;
        background-color: #B7FF44;
        margin-top: 50px;
        color: #000000;
    }

    .board-info {
        font-weight: 700;
        font-size: 1.5rem;
        line-height: 1.6rem;
        margin-top: 3vh;

        h1 {
            padding-top: 99px;
        }
    }

    .simple-button-try {
        width: 15vw;
        height: 63px;
        background: #B7FF44;
        color: #000000;
        border-radius: 12px;
        font-weight: 700;
        font-size: 23px;
        line-height: 28px;
        margin-top: 70px;
    }
}

.mid-tariffs {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 22vw;
    height: 92vh;
    background: #B7FF44;
    border: 1px solid rgba(183, 255, 68, 0.4);
    backdrop-filter: blur(5px);
    border-radius: 24px;

    .tariffs-image-2 {
        width: 150px;
        height: 150px;
        background-color: #FFFFFF;
        margin-top: 40px;
        color: #000000;
    }

    .board-info-2 {
        font-weight: 700;
        font-size: 1.5rem;
        line-height: 2.4rem;
        color: #000000;
        

        h1 {
            padding-top: 90px;
        }
    }

    .basic-button-try {
        width: 15vw;
        height: 63px;
        border: 1px solid #000000;
        border-radius: 12px;
        color: #000000;
        font-weight: 700;
        font-size: 23px;
        line-height: 28px;
        margin-top: 39px;
    }
}
</style>