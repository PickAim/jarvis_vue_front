<template>
    <main>
        <div class="dashboard-wrapper">
            <div class="external-dashboard">
                <div class="fake-image">Img</div>
                <div class="board-info">
                    <h1>Дашборд <br> с системой виджетов</h1>
                    <h1>Внутренняя аналитика</h1>
                    <h1>Рекомендации <br> по ценообразованию</h1>
                </div>
                <button class="button-try">Попробовать сейчас</button>
            </div>
            <div class="mid-dashboard">
                <div class="fake-image-2">Img</div>
                <div class="board-info-2">
                    <h1>Дашборд <br> с системой виджетов</h1>
                    <h1>Внутренняя аналитика</h1>
                    <h1>Внешняя аналитика</h1>
                    <h1>Рекомендации <br> по ценообразованию</h1>
                </div>
                <button class="button-try-2">Попробовать сейчас</button>
            </div>
            <div class="external-dashboard">
                <div class="fake-image">Img</div>
                <div class="board-info">
                    <h1>Дашборд <br> с системой виджетов</h1>
                    <h1>Внутренняя аналитика</h1>
                    <h1>Рекомендации <br> по ценообразованию</h1>
                </div>
                <button class="button-try">Попробовать сейчас</button>
            </div>
        </div>
    </main>
</template>
    
<script setup lang="ts">

</script>
    
<style scoped lang="scss">
main {
    width: 100%;
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

.dashboard-wrapper {
    display: flex;
    flex-direction: row;
    margin-top: 50px;
    gap: 19px;
    align-items: center;
}

.external-dashboard {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 376px;
    height: 802px;
    border: 1px solid #B7FF44;
    backdrop-filter: blur(5px);
    border-radius: 24px;

    .fake-image {
        width: 150px;
        height: 150px;
        background-color: #B7FF44;
        margin-top: 50px;
        color: #000000;
    }

    .board-info {
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;

        h1 {
            padding-top: 99px;
        }
    }

    .button-try {
        width: 287px;
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

.mid-dashboard {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    height: 917px;
    background: #B7FF44;
    border: 1px solid rgba(183, 255, 68, 0.4);
    backdrop-filter: blur(5px);
    border-radius: 24px;

    .fake-image-2 {
        width: 150px;
        height: 150px;
        background-color: #FFFFFF;
        margin-top: 40px;
        color: #000000;
    }

    .board-info-2 {
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;
        color: #000000;
        margin-top: 60px;

        h1 {
            padding-top: 90px;
        }
    }

    .button-try-2 {
        width: 287px;
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