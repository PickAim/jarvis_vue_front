<template>
    <div class="View-Cards-Block">
        <div class="cards-wrapper">
            <div class="what-you-have">
                <h1>ЧТО ВЫ <br> СЕЙЧАС ИМЕЕТЕ:</h1>
            </div>
            <div class="opportunity-cards">
                <div class="first-cards">
                    <h1>Сложно выбрать подходящий <br> момент чтобы встать в акцию, <br> запустить рекламу или <br>
                        запланировать поставку</h1>
                    <div class="first-image">Img</div>
                    <div class="first-line">Line</div>
                </div>
                <div class="bottom-cards">
                    <div class="block-with-sign">
                        <h1>Рутинная работа отнимает <br> много времени, которое можно <br> посвятить запуску новых товаров
                            <br> и масштабированию бизнеса</h1>
                        <div class="second-image">Img</div>
                        <div class="second-line">Line</div>
                    </div>
                    <div class="block-with-sign">
                        <h1>Процесс работы с финансовыми <br>отчетами слишком трудоемкий</h1>
                        <div class="third-image">Img</div>
                        <div class="third-line">Line</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
</script>
<style scoped lang="scss">
.View-Cards-Block {
    height: 80vh;
    min-height: 70vh;
    width: 100%;
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

.cards-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 400px;
   width: 100%;
   height: 70vh;
   position: absolute;

}

.what-you-have {

    h1 {
        font-weight: 700;
        font-size: 48px;
        line-height: 59px;
    }
}

.opportunity-cards {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    row-gap: 22px;
    width: 40vw;

}

.first-cards {
    display: flex;
    flex-direction: column;
    width: 40vw;
    height: 27vh;
    border-radius: 21px;
    border: 1px solid black;
    color: black;

    h1 {
        font-weight: 700;
        font-size: 1rem;
        line-height: 1rem;
        margin: 45px 0px 0px 14px;
    }

    .first-image {
        width: 50px;
        height: 50px;
        background-color: aquamarine;
        position: relative;
        top: 50px;
        left: 700px;
    }

    .first-line {
        width: 50px;
        height: 10px;
        background-color: aquamarine;
        position: relative;
        top: 25px;
    }
}

.bottom-cards {
    display: flex;
    flex-direction: row;
    column-gap: 49px;
    width: 40vw;

}

.block-with-sign {
    display: flex;
    flex-direction: column;
    width: 22vw;
    height: 33.5vh;
    border: 1px solid black;
    border-radius: 25px;

    h1 {
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        margin: 54px 0px 0px 14px;
    }

    .second-image {
        width: 50px;
        height: 50px;
        background-color: aquamarine;
        position: relative;
        top: 120px;
        left: 220px;
    }

    .second-line {
        width: 60px;
        height: 10px;
        background-color: aquamarine;
        position: relative;
        top: 90px;
    }

    .third-image {
        width: 50px;
        height: 50px;
        background-color: aquamarine;
        position: relative;
        top: 155px;
        left: 220px;
    }

    .third-line {
        width: 60px;
        height: 10px;
        background-color: aquamarine;
        position: relative;
        top: 120px;
    }
}</style>