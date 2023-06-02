<template>
    <div class="StartFormBlock">
        <div class="question-block">
            <h1>ОСТАЛИСЬ ВОПРОСЫ?</h1>
            <h2>Оставьте заявку и мы свяжемся <br> с вами в ближайшее время</h2>
        </div>
        <div class="form-wrapper">
            <form action="">
                <input type="text" name="text" placeholder="Введите ваше имя">
                <input type="tel" name="tel" placeholder="Введите ваш телефона">
                <input type="email" name="email" placeholder="Введите ваш email">
            </form>
            <button class="button-try">Получить консультацию</button>
        </div>
    </div>
</template>
<script setup lang="ts">

</script>
<style scoped lang="scss">
.StartFormBlock {
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
    margin-top: 50px;
    gap: 50px;

    .question-block {
        align-items: center;

        h1 {
            font-weight: 700;
            font-size: 48px;
            line-height: 59px;
        }

        h2 {
            font-weight: 400;
            font-size: 32px;
            line-height: 39px;
        }
    }

    .form-wrapper {
        display: flex;
        flex-direction: column;

        .button-try {
            width: 100%;
            border: 1px solid #B7FF44;
            border-radius: 23px;
            font-weight: 700;
            font-size: 28px;
            line-height: 34px;
            padding: 34px 46px 34px 46px;
            margin-top: 80px;
        }

        form {
            display: flex;
            flex-direction: column;
            gap: 50px;

            input {
                background-color: transparent;
                border-bottom: 1px solid greenyellow;
                width: 100%;
                font-weight: 400;
                font-size: 32px;
                line-height: 39px;
            }
        }
    }
}
</style>