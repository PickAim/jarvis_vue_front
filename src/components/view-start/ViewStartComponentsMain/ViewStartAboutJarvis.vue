<script setup lang="ts">
</script>

<template>
  <div class="view-about-jarvis">
    <div class="jarvis-wrapper">
      <div class="question-about-jarvis">
        <h1>Что умеет Jarvis?</h1>
      </div>
      <div class="blur-block">
        <div class="block">
          <div class="left-block">
            <h1>Рекомендательная система</h1>
            <img src="src\assets\images\About-Jarvis-1.png" alt="">
          </div>
          <div class="text-info">
            <div class="text-1">Предлагает рекомендации по работе с Вашими продажами: предлагает цену товара,
              заранее
              сообщает о необходимости поставки, рекомендует наиболее выгодные ниши и многое
              другое.
            </div>
            <div class="text-2"> Благодаря этому вы не упустите момент принятия решения, что предотвратит
              упущенную
              прибыль и сократит Ваши расходы
            </div>
          </div>
        </div>
        <div class="block">
          <div class="left-block">
            <h1>Внешняя аналитика</h1>
            <img src="src\assets\images\About-Jarvis-2.png" alt="">
          </div>
          <div class="text-info">
            <div class="text-1">Собирает данные со всего маркетплейса и предоставляет актуальную аналитику
              рынка.
            </div>
            <div class="text-2">Благодаря внешней аналитике и рекомендательной системе Вы всегда знаете, как
              идут дела
              у Ваших конкурентов, и сможете выходить на новые ниши максимально подготовленными и
              информированными
            </div>
          </div>
        </div>
        <div class="block">
          <div class="left-block">
            <h1>Расчет индексов показателей магазина</h1>
            <img src="src\assets\images\About-Jarvis-3.png" alt="">
          </div>
          <div class="text-info">
            <div class="text-1">Позволяет оценить финансовое здоровье вашего магазина, выявить рентабельные
              позиции и
              отсеять нерентабельные.
            </div>
            <div class="text-2">На основе внутренней аналитики рекомендательная система подскажет, как
              эффективнее
              масштабировать наиболее прибыльные товары и увеличить продажи
            </div>
          </div>
        </div>
      </div>
      <button class="button-try">Попробовать сейчас</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
$tag-width: 1150px;

.view-about-jarvis {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #191919;
  color: #FFFFFF;
  width: 100%;
  flex: 0 0 auto;
  padding: 50px 0px;

  h1 {
    font-family: Inter, sans-serif;
  }

  p {
    font-family: Montserrat, sans-serif;
  }
}

.jarvis-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #191919;
  width: 100%;
  max-width: 1200px;

  .question-about-jarvis {
    text-align: center;

    h1 {
      font-weight: 700;
      font-size: 64px;
      line-height: 77px;
    }
  }

  .blur-block {
    display: grid;
    position: relative;
    grid-template-columns: 1fr;
    background: linear-gradient(97.84deg, rgba(107, 166, 255, 0.228) 4.44%, rgba(199, 244, 70, 0.201) 93.84%);
    backdrop-filter: blur(15px);
    z-index: 100;
    max-width: 1200px;
    margin: 50px 80px;
    padding: 40px 20px;

    .block {
      display: grid;
      grid-template-columns: 1fr 1fr;

      .left-block {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        padding: 0px 20px;

        h1 {
          font-weight: 700;
          font-size: 24px;
          line-height: 44px;
        }

        h3 {
          color: #B7FF44;
        }
      }

      .text-info {
        display: flex;
        flex-direction: column;
        text-align: start;
        border-left: 2px solid #B7FF44;
        padding: 30px 60px;

        .text-1 {
          font-weight: 400;
          font-size: 20px;
          line-height: 24px;
          margin-bottom: 10px;
        }

        .text-2 {
          font-weight: 400;
          font-size: 16px;
          line-height: 19.5px;
        }
      }
    }
  }

  .button-try {
    border: 1px solid #B7FF44;
    border-radius: 12px;
    font-weight: 700;
    font-size: 23px;
    line-height: 28px;
    padding: 15px;
  }
}

@media (max-width: $tag-width) {
  .view-about-jarvis {
  }

  .jarvis-wrapper {
    .question-about-jarvis {

      h1 {
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;
      }
    }

    .blur-block {
      display: grid;
      grid-template-columns: 1fr;
      padding: 0px;
      margin: 20px 50px 0px;
      background: none;

      .block {
        display: flex;
        flex-direction: column;
        background: linear-gradient(97.84deg, rgba(107, 166, 255, 0.228) 4.44%, rgba(199, 244, 70, 0.201) 93.84%);
        backdrop-filter: blur(15px);
        margin-bottom: 50px;
        overflow: hidden;
        max-width: 400px;
        padding: 20px 15px;

        .left-block {
          display: flex;
          flex-direction: column;
          gap: 0px;
          padding: 0px;

          h1 {
            font-weight: 700;
            font-size: 24px;
            line-height: 44px;
          }

          h3 {
            color: #B7FF44;
          }
        }

        .text-info {
          border: none;
          display: flex;
          flex-direction: column;
          text-align: center;
          padding: 20px;

          .text-1 {
            font-weight: 700;
            font-size: 15px;
            line-height: 18.29px;
            margin-bottom: 20px;
          }

          .text-2 {
            padding: 10px;
            border: 1px solid #B7FF44;
            font-weight: 400;
            font-size: 13px;
            line-height: 16px;
          }
        }
      }
    }

    .button-try {
      border: 1px solid #B7FF44;
      border-radius: 12px;
      font-weight: 700;
      font-size: 11px;
      line-height: 13px;
      padding: 15px 30px;
    }
  }
}
</style>
