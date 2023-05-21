<template>
    <div class="trusted-block">
        <div class="trust-wrapper">
            <div class="paragraph-about-trust">
                <h1>ПОЧЕМУ НАМ ДОВЕРЯЮТ?</h1>
            </div>
            <div class="line-block">
                <div class="advantages">
                    <div class="advantages-image">IMG</div>
                    <h1>Актуальность и точность <br> предоставляемых данных</h1>
                </div>
                <div class="advantages">
                    <div class="advantages-image">IMG</div>
                    <h1>3 года работы <br> с маркетплейсами</h1>
                </div>
                <div class="advantages">
                    <div class="advantages-image">IMG</div>
                    <h1>100+ клиентов выведено <br> на маркетплейсы</h1>
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
    width: 100%;
    min-width: 60vw;
    display: flex;
    flex-direction: column;
    flex: 0 0 auto;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #FFFFFF;


    .trust-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 10px;
        width: 100%;

        .paragraph-about-trust {
            display: flex;
            flex-direction: column;

            h1 {
                font-weight: 700;
                font-size: 3rem;
                line-height: 2.5em;
            }
        }

        .line-block {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 80px;
            margin-top: 20px;
            margin-bottom: 6vh;

            .advantages {
                display: flex;
                flex-direction: column;
                gap: 50px;

                .advantages-image {
                    width: 15vw;
                    height: 20vh;
                    background-color: aquamarine;
                    color: black;
                }
            }
        }
    }

    .button-try {
        width: 20vw;
        height: 10vh;
        border: 1px solid #B7FF44;
        border-radius: 12px;
    }
}</style>