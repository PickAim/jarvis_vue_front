<template>
    <main>
        <div class="two-blocks">
            <div class="what-you-have">
                <h1>ЧТО ВЫ <br> СЕЙЧАС ИМЕЕТЕ:</h1>
            </div>
            <div class="card-blocks">
                <div class="firs-cards">
                    <h1>Сложно выбрать подходящий <br> момент чтобы встать в акцию, <br> запустить рекламу или <br>
                        запланировать поставку</h1>
                    <div
                        style="width: 50px; height: 50px; background-color: aquamarine; position: relative; top: 50px; left: 540px;">
                        img</div>
                    <div style="width: 50px; height: 10px; background-color: aquamarine;position: relative; top: 25px;">
                    </div>
                </div>
                <div class="bottom-cards">
                    <div class="block-with-sign">
                        <h1>Рутинная работа отнимает <br> много времени, которое можно <br> посвятить запуску новых товаров
                            <br> и масштабированию бизнеса
                        </h1>
                        <div
                            style="width: 50px; height: 50px; background-color: aquamarine; position: relative; top: 120px; left: 220px;">
                        </div>
                        <div style="width: 60px; height: 10px; background-color: aquamarine; position:relative; top: 90px;">
                        </div>
                    </div>
                    <div class="block-with-sign">
                        <h1>Процесс работы с финансовыми <br>отчетами слишком трудоемкий</h1>
                        <div
                            style="width: 50px; height: 50px; background-color: aquamarine; position: relative; top: 155px; left: 220px;">
                        </div>
                        <div
                            style="width: 60px; height: 10px; background-color: aquamarine; position:relative; top: 120px;">
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
    height: 711px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 0 0 auto;
    color: black;

    h1 {
        @font-face {
            font-family: Inter;
            src: url(src\assets\Inter-SemiBold.otf);
        }
    }

    p {
        @font-face {
            font-family: Montserrat;
            src: url(src\assets\Montserrat-LightItalic.ttf);
        }
    }
}

.two-blocks {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1280px;
    gap: 88px;
}

.what-you-have {

    h1 {
        font-weight: 700;
        font-size: 48px;
        line-height: 59px;
    }
}

.card-blocks {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    row-gap: 22px;
    width: 613px;
    height: 100%;
}

.firs-cards {
    display: flex;
    flex-direction: column;
    width: 613px;
    height: 261px;
    border-radius: 21px;
    border: 1px solid black;
    color: black;

    h1 {
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        margin: 45px 0px 0px 14px;
    }
}

.bottom-cards {
    display: flex;
    flex-direction: row;
    column-gap: 49px;
}

.block-with-sign {
    display: flex;
    flex-direction: column;
    width: 282px;
    height: 322px;
    border: 1px solid black;
    border-radius: 25px;

    h1 {
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        margin: 54px 0px 0px 14px;
    }
}
</style>