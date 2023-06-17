<template>
    <div class="view-tariffs-block">
        <div class="tarifs-name">
            <h1>ТАРИФЫ:</h1>
        </div>
        <div class="tariffs-wrapper">
            <div class="basic-tarif">
                <div class="first-tarif">
                    <h1>IMG</h1>
                    <div class="board-info">
                        <h1>Дашборд с системой виджетов</h1>
                        <h1>Внутренняя аналитика</h1>
                        <h1>Рекомендации по ценообразованию</h1>
                    </div>
                    <button class="simple-button-try">Попробовать сейчас</button>
                </div>
            </div>
            <div class="basic-tarif">
                <div class="second-tarif">
                    <h1>IMG</h1>
                    <div class="board-info">
                        <h1>Дашборд с системой виджетов</h1>
                        <h1>Внутренняя аналитика</h1>
                        <h1>Внешняя аналитика</h1>
                        <h1>Рекомендации по ценообразованию</h1>
                    </div>
                    <button class="mid-simple-button-try">Попробовать сейчас</button>
                </div>
            </div>
            <div class="basic-tarif">
                <div class="third-tarif">
                    <h1>IMG</h1>
                    <div class="board-info">
                        <h1>Дашборд с системой виджетов</h1>
                        <h1>Внутренняя аналитика</h1>
                        <h1>Рекомендации по ценообразованию</h1>
                    </div>
                    <button class="simple-button-try">Попробовать сейчас</button>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script setup lang="ts">

</script>
    
<style scoped lang="scss">
.view-tariffs-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 50px 0px;
    color: #FFFFFF;
    background-color: #191919;
    width: 100%;

    .tarifs-name {
        padding-bottom: 50px;

        h1 {
            font-weight: 700;
            font-size: 48px;
            line-height: 59px;
        }
    }

    .tariffs-wrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        column-gap: 19px;
        width: 100%;
        max-width: 1000px;

        .basic-tarif {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            min-height: 400px;
            width: 100%;

            h1 {
                padding: 20px 0px 20px 0px;
            }

            .first-tarif {
                display: flex;
                flex-direction: column;
                align-items: center;
                border: 1px solid #B7FF44;
                backdrop-filter: blur(5px);
                border-radius: 24px;

                .board-info {
                    font-weight: 700;
                    font-size: 24px;
                    line-height: 29px;

                    h1 {
                        padding: 40px 0px 40px 0px;
                    }
                }
            }

            .second-tarif {
                display: flex;
                flex-direction: column;
                align-items: center;
                background: #B7FF44;
                color: #000000;
                border: 1px solid #B7FF44;
                backdrop-filter: blur(5px);
                border-radius: 24px;

                .board-info {
                    font-weight: 700;
                    font-size: 24px;
                    line-height: 29px;

                    h1 {
                        padding: 40px 0px 40px 0px;
                    }
                }

                .mid-simple-button-try {
                    padding: 10px;
                    background: #B7FF44;
                    color: #000000;
                    border: 1px solid #000000;
                    border-radius: 12px;
                    font-weight: 700;
                    font-size: 23px;
                    line-height: 28px;
                    margin: 10px;
                }
            }

            .third-tarif {
                display: flex;
                flex-direction: column;
                align-items: center;
                border: 1px solid #B7FF44;
                backdrop-filter: blur(5px);
                border-radius: 24px;

                .board-info {
                    font-weight: 700;
                    font-size: 24px;
                    line-height: 29px;

                    h1 {
                        padding: 40px 0px 40px 0px;
                    }
                }
            }

            .simple-button-try {
                padding: 10px;
                background: #B7FF44;
                color: #000000;
                border-radius: 12px;
                font-weight: 700;
                font-size: 23px;
                line-height: 28px;
                margin: 10px;
            }
        }
    }
}</style>