<template>
    <div class="trusted-block">
        <div class="trust-wrapper">
            <div class="paragraph-about-trust">
                <h1>ПОЧЕМУ НАМ ДОВЕРЯЮТ?</h1>
            </div>
            <div class="line-block">
                <div class="advantages">
                    <div class="advantages-image">IMG</div>
                </div>
                <div class="advantages">
                    <div class="advantages-image">IMG</div>
                </div>
                <div class="advantages">
                    <div class="advantages-image">IMG</div>
                </div>
                <div class="advantages-info">
                    <h1>Актуальность и точность предоставляемых данных</h1>
                </div>
                <div class="advantages-info">
                    <h1>3 года работы с маркетплейсами</h1>
                </div>
                <div class="advantages-info">
                    <h1>100+ клиентов выведено на маркетплейсы</h1>
                </div>
            </div>
            <button class="button-try">Попробовать сейчас</button>
        </div>
    </div>
</template>
<script setup lang="ts">

</script>
    
<style scoped lang="scss">
.trusted-block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
    margin: 50px 0px;

    .trust-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 10px;
        width: 100%;
        max-width: 1200px;
        padding: 0px 40px;

        .paragraph-about-trust {
            display: flex;
            flex-direction: column;

            h1 {
                font-weight: 700;
                font-size: 48px;
                line-height: 59px;
            }
        }

        .line-block {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            margin-top: 100px;
            margin-bottom: 100px;
            padding: 0px 50px;

            .advantages {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
                padding: 20px;

                .advantages-image {
                    padding-bottom: 20px;
                    color: #B7FF44;
                }
            }

            .advantages-info {
                padding-top: 80px;
                border-top: 1px solid #B7FF44;

                h1 {
                    font-weight: 500;
                    font-size: 20px;
                    line-height: 29px;
                }
            }
        }
    }

    .button-try {
        width: 465px;
        height: 102px;
        border: 1px solid #B7FF44;
        border-radius: 12px;
    }
}</style>