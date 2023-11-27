<script setup lang="ts">
import {ViewStartActions} from "@/component-actions/view-start/ViewStartActions";

const actions = new ViewStartActions();
</script>

<template>
  <div class="form-block-wrapper">
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
      <button class="button-try" @click="actions.onTryButtonClick()">Получить консультацию</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
$tag-width: 1150px;

.form-block-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 50px 0;
  gap: 50px;
  color: #FFFFFF;

  .question-block {
    align-items: center;

    h1 {
      font-weight: 700;
      font-size: 48px;
      line-height: 59px;
      margin-bottom: 20px;
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
    align-items: center;

    .button-try {
      border: 1px solid #B7FF44;
      border-radius: 23px;
      font-weight: 700;
      font-size: 28px;
      line-height: 34px;
      padding: 20px;
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

@media (max-width: $tag-width) {
  .form-block-wrapper {
    margin: 0;
    gap: 25px;

    .question-block {
      h1 {
        font-size: 24px;
        font-weight: 700;
        line-height: 29px;
      }

      h2 {
        font-size: 15px;
        font-weight: 400;
        line-height: 18px;
      }
    }

    .form-wrapper {
      display: flex;

      .button-try {
        font-size: 13px;
        font-weight: 700;
        line-height: 16px;
        padding: 15px;
        border-radius: 11px;
        margin-top: 25px;
      }

      form {
        gap: 35px;

        input {
          font-size: 15px;
          font-weight: 400;
          line-height: 18px;
          padding: 10px 80px 10px 0;
        }
      }
    }
  }
}
</style>
