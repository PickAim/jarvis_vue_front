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
                    <div class="card-items">
                        <h1>LINE</h1>
                        <h1>IMG</h1>
                    </div>
                </div>
                <div class="bottom-cards">
                    <div class="block-with-sign">
                        <h1>Рутинная работа отнимает <br> много времени, которое можно <br> посвятить запуску новых товаров
                            <br> и масштабированию бизнеса
                        </h1>
                        <div class="card-items">
                            <h1>LINE</h1>
                            <h1>IMG</h1>
                        </div>
                    </div>
                    <div class="block-with-sign">
                        <h1>Процесс работы с финансовыми <br>отчетами слишком трудоемкий</h1>
                        <div class="card-items">
                            <h1>LINE</h1>
                            <h1>IMG</h1>
                        </div>
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 50px;

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
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
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
    flex-direction: column;
    justify-content: space-around;
    gap: 10px;
}

.first-cards {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 21px;
    border: 1px solid black;
    color: black;

    h1 {
        font-weight: 700;
        font-size: 1rem;
        line-height: 1rem;
        margin: 45px 14px 45px 14px;
    }

    .card-items {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

    }
}

.bottom-cards {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 10px;

}

.block-with-sign {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid black;
    border-radius: 25px;

    h1 {
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        margin: 54px 14px 54px 14px;
    }

    .card-items {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
}
</style>