<template>
    <main>
        <div class="skills-block">
            <div class="two-blocks">
                <div class="what-you-have">
                    <h1>ЧТО ВЫ <br> СЕЙЧАС ИМЕЕТЕ:</h1>
                </div>
                <div class="card-blocks">
                    <div class="block-with-sign">
                        <div class="cards-image-first">
                            <img src="src\assets\Group 23 (1).png" alt="">
                        </div>
                        <div class="cards-text-first">
                            <h1>Рутинная работа отнимает <br> много времени, которое можно <br> посвятить запуску новых товаров <br> и масштабированию бизнеса</h1>
                        </div>
                    </div>
                    <div class="block-with-sign">
                        <div class="cards-image-second">
                            <img src="src\assets\Group 12.png" alt="">
                        </div>
                        <div class="cards-text-second">
                            <h1>Процесс работы с финансовыми <br>отчетами слишком трудоемкий</h1>
                        </div>
                    </div>
                    <div class="block-with-sign">
                        <div class="cards-image-third">
                            <img src="src\assets\Group 22.png" alt="">
                        </div>
                        <div class="cards-text-third">
                            <h1>Отсутствие внешней аналитики</h1>
                        </div>
                    </div>
                    <div class="block-with-sign">
                        <div class="cards-image-fourth">
                            <img src="src\assets\Group 24.png" alt="">
                        </div>
                        <div class="cards-text-fourth">
                            <h1>Сложно выбрать подходящий <br> момент чтобы встать в акцию, <br> запустить рекламу или <br> запланировать поставку</h1>
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
    main{
        width: 100%;
        color: #EEEFF3;
        background-color: #EEEFF3;
        display: flex;
        flex-direction: column;
        max-width: 1280px;
        flex: 0 0 auto;
    }
    main h1{
        @font-face {
            font-family:Inter;
            src: url(src\assets\Inter-SemiBold.otf);
            }
    }
    main p{
        @font-face {
        font-family:Montserrat ;
        src: url(src\assets\Montserrat-LightItalic.ttf);
        }
    }
    .skills-block{
        margin-top: -32px;
        display: flex;
        flex-direction: row;
        background-color: #EEEFF3;
        color: #3129F1;
        height: 628px;
    }
    .two-blocks{
        display: flex;
        justify-content: center;
        height: 370px;
        margin-left: 98px;
        margin-top: 172px;
    }
    .card-blocks{
        display: grid;
        grid-template-columns: 269px 269px;
        grid-template-rows: 172px 172px;
        row-gap: 26px;
        column-gap: 21px;
        height: 370px;
        width: 559px;
    }
    .what-you-have{
        display: flex;
        width: 433px;
        height: 116px;
        justify-content: center;
        align-items: center;
        margin-top: 108px;
        margin-right: 97px;
    }
    .what-you-have h1{
        font-weight: 700;
        font-size: 48px;
        line-height: 58px;
        color: #0E028E;
    }
    .block-with-sign{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #312889;
    border: 1px solid #312889;
    border-radius: 21px;
    color: #FFFFFF;
    .cards-image-first{
    display: flex;
    justify-content: center;
    width: 49.58px;
    height: 49.58px;
    margin-top: 17px;
    margin-bottom: 17.42px;
    }
    .cards-image-second{
        display: flex;
        justify-content: center;
        width: 42.75px;
        height: 50px;
        margin-top: 19px;
        margin-bottom: 29px;
    }
    .cards-image-third{
        display: flex;
        justify-content: center;
        width: 173px;
        height: 53px;
        margin-top: 18px;
        margin-bottom: 33px;
    }
    .cards-image-fourth{
        display: flex;
        justify-content: center;
        width: 28.31px;
        height: 46px;
        margin-top: 19px;
        margin-bottom: 16px;
    }
    .cards-text-first{
    margin: 0px 10px 20px 13px;
    text-align: center;
    font-size: 14px
    }
    .cards-text-second{
    margin: 0px 14px 40px 14px;
    text-align: center;
    font-size: 14px
    }
    .cards-text-third{
    margin: 0px 16px 51px 18px;
    text-align: center;
    font-size: 14px
    }
    .cards-text-fourth{
    margin: 0px 24px 23px 26px;
    text-align: center;
    font-size: 14px
    }
}
</style>