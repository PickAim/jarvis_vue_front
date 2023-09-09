<template>
    <div class="view-start-header-overlay">
        <div class="overlay-wrapper">
            <div class="top-items">
                <img src="src\assets\jarvis.png" alt="Logo">
                <button class="button-close">Закрыть</button>
            </div>
            <div class="link-items">
                <div class="link">
                    <a href="">ЧТО УМЕЕТ JARVIS?</a>
                </div>
                <div class="link">
                    <a href="">ТАРИФЫ</a>
                </div>
                <div class="link">
                    <a href="">ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</a>
                </div>
                <div class="link">
                    <a href="">ЛИЧННЫЙ КАБИНЕТ</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">

</script>
    
<style scoped lang="scss">
$tag-width: 1150px;

@media (max-width: $tag-width) {
    .view-start-header-overlay {
        display: flex;
        flex-direction: column;
        margin: 20px 50px;
        align-items: center;

        .overlay-wrapper {
            display: flex;
            flex-direction: column;

            .top-items {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                gap: 60px;
                max-width: 400px;

                img {
                    width: 200px;
                    height: 50px;
                }

                .button-close {
                    background: transparent;
                    font-size: 15px;
                    font-weight: 400;
                    line-height: 18px;
                    color: rgba(255, 255, 255, 1);
                }
            }

            .link-items {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: 0px 4 0px;
                margin: 20px 0px;
                max-width: 280px;

                .link {
                    border-bottom: 1px solid rgba(183, 255, 68, 1);
                    margin-bottom: 20px;

                    a {
                        font-weight: 400;
                        font-size: 16px;
                        line-height: 20px;
                        color: rgba(255, 255, 255, 1);
                    }
                }
            }
        }
    }
}
</style>