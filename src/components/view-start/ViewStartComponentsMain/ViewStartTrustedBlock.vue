<template>
    <div class="trusted-block">
        <div class="trust-wrapper">
            <div class="paragraph-about-trust">
                <h1>ПОЧЕМУ НАМ ДОВЕРЯЮТ?</h1>
            </div>
            <div class="line-block">
                <div class="advantages">
                    <div class="advantages-image">IMG</div>
                    <div class="advantages-text">Актуальность и точность предоставляемых данных</div>
                </div>
                <div class="advantages">
                    <div class="advantages-image">IMG</div>
                    <div class="advantages-text">Актуальность и точность предоставляемых данных</div>
                </div>
                <div class="advantages">
                    <div class="advantages-image">IMG</div>
                    <div class="advantages-text">100+ клиентов выведено на маркетплейсы</div>
                </div>
            </div>
            <button class="button-try">Попробовать сейчас</button>
        </div>
    </div>
</template>
<script setup lang="ts">

</script>
    
<style scoped lang="scss">
$tag-width: 1150px;

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
            margin: 100px 0px;
            padding: 0px 50px;

            .advantages {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;

                .advantages-image {
                    display: flex;
                    padding-bottom: 50px;
                    color: #B7FF44;
                }

                .advantages-text {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    padding-top: 50px;
                    border-top: 1px solid #B7FF44;
                    font-weight: 500;
                    font-size: 20px;
                    line-height: 29px;
                }
            }
        }
    }

    .button-try {
        border: 1px solid #B7FF44;
        border-radius: 12px;
        padding: 20px 50px;
    }
}

@media (max-width: $tag-width) {
    .trusted-block {
        margin: 0px;

        .trust-wrapper {
            .paragraph-about-trust {

                h1 {
                    font-size: 24px;
                    font-weight: 700;
                    line-height: 29px;
                }
            }

            .line-block {
                display: grid;
                grid-template-columns: 1fr;
                max-width: 400px;
                padding: 0px;
                margin: 80px 0px 0px 0px;

                .advantages {
                    display: grid;
                    grid-template-columns: 1fr 1fr;

                    .advantages-image {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        padding: 20px;
                    }

                    .advantages-text {
                        padding: 20px;
                        border-top: none;
                        border-left: 1px solid #B7FF44;
                        font-weight: 500;
                        font-size: 13px;
                        line-height: 15.85px;
                    }
                }
            }
        }

        .button-try {
            display: none;
        }
    }
}</style>