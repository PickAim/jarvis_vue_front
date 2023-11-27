<script setup lang="ts">
import MiddleLineLayout from "@/components/layouts/MiddleLineLayout.vue";
import ControlButton from "@/components/controls/ControlButton.vue";
import {ViewStartActions} from "@/component-actions/view-start/ViewStartActions";

const actions = new ViewStartActions();
</script>

<template>
  <MiddleLineLayout>
    <div class="about-jarvis-block-wrapper" id="about-jarvis">
      <h1>ЧТО УМЕЕТ JARVIS?</h1>
      <div class="feature-grid-wrapper">
        <div class="feature-grid">
          <div class="feature">
            <div class="title-with-image feature-column">
              <h2>Рекомендательная система</h2>
              <div class="feature-image image-1"/>
            </div>
            <div class="text-info feature-column">
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
          <div class="feature">
            <div class="title-with-image feature-column">
              <h2>Внешняя аналитика</h2>
              <div class="feature-image image-2"/>
            </div>
            <div class="text-info feature-column">
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
          <div class="feature">
            <div class="title-with-image feature-column">
              <h2>Расчет индексов показателей магазина</h2>
              <div class="feature-image image-3"/>
            </div>
            <div class="text-info feature-column">
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
        <div class="circles">
          <div class="circle circle-1"/>
          <div class="circle circle-2"/>
          <div class="circle circle-3"/>
          <div class="circle circle-4"/>
          <div class="circle circle-5"/>
          <div class="circle circle-6"/>
        </div>
      </div>
      <ControlButton class="button-try" @click="actions.onTryButtonClick()">Попробовать сейчас</ControlButton>
    </div>
  </MiddleLineLayout>
</template>

<style scoped lang="scss">
.about-jarvis-block-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  line-height: normal;
  color: white;

  h1 {
    text-align: center;
    font-size: 48px;
    font-weight: 700;
  }

  .feature-grid-wrapper {
    position: relative;
    max-width: 1060px;
    margin-block: 50px;
    overflow: visible;

    .circles {
      display: flex;
      flex-direction: row;


      .circle {
        position: absolute;
        border-radius: 999px;
        background: linear-gradient(180deg, #B7FF44 0%, rgba(43, 44, 42, 0.31) 100%);
        z-index: 1;
      }

      .circle-1 {
        left: -80px;
        top: 20%;
        width: 260px;
        height: 260px;
      }

      .circle-2 {
        right: -36px;
        bottom: -27px;
        width: 120px;
        height: 120px;
      }

      .circle-3, .circle-4, .circle-5 {
        background: #B7FF44;
        width: 50px;
        height: 50px;
        left: calc(50% - 25px);
      }

      .circle-3 {
        top: 14%;
      }

      .circle-4 {
        top: 47%;
      }

      .circle-5 {
        top: 82%;
      }
    }
  }

  .feature-grid {
    display: grid;
    position: relative;
    grid-template-columns: 1fr;
    background: linear-gradient(97.84deg, rgba(107, 166, 255, 0.228) 4.44%, rgba(199, 244, 70, 0.201) 93.84%);
    backdrop-filter: blur(15px);
    padding-block: 62px;
    z-index: 2;

    .feature {
      display: grid;
      grid-template-columns: 1fr 1fr;

      .feature-column {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 25px 0 60px;
      }

      &:not(:last-child) .title-with-image {
        padding-bottom: 200px;
      }

      .title-with-image {
        gap: 60px;

        h2 {
          text-align: center;
          font-size: 36px;
          font-weight: 700;
        }

        .feature-image {
          width: 150px;
          height: 100px;
          background-size: contain;
          background-repeat: no-repeat;

          &.image-1 {
            background-image: url("/src/assets/images/About-Jarvis-1-512px.png");
          }

          &.image-2 {
            background-image: url("/src/assets/images/About-Jarvis-2-512px.png");
          }

          &.image-3 {
            background-image: url("/src/assets/images/About-Jarvis-3-512px.png");
          }
        }
      }

      .text-info {
        text-align: start;
        border-left: 2px solid #B7FF44;

        .text-1 {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .text-2 {
          font-size: 16px;
          font-weight: 400;
        }
      }
    }
  }
}

@media (max-width: 1200px) {
  .about-jarvis-block-wrapper {
    h1 {
      font-size: 30px;
    }

    .feature-grid-wrapper {
      max-width: 700px;
      margin-top: 30px;

      .circle-1, .circle-2 {
        display: none;
      }
    }

    .feature-grid {
      display: grid;
      grid-template-columns: 1fr;
      padding: 0;
      gap: 50px;
      backdrop-filter: blur(15px);
      background: none;

      .feature {
        display: flex;
        flex-direction: column;
        background: linear-gradient(97.84deg, rgba(107, 166, 255, 0.228) 4.44%, rgba(199, 244, 70, 0.201) 93.84%);
        backdrop-filter: blur(15px);
        padding: 20px 15px;

        .title-with-image {
          display: flex;
          flex-direction: column;
          gap: 15px;
          padding: 0 20px 20px 20px !important;

          h2 {
            font-size: 24px;
          }
        }

        .text-info {
          border: none;
          display: flex;
          flex-direction: column;
          text-align: center;
          padding: 20px;

          .text-1 {
            font-size: 15px;
            margin-bottom: 20px;
          }

          .text-2 {
            padding: 10px;
            border: 1px solid #B7FF44;
            font-size: 13px;
          }
        }
      }
    }
  }
}
</style>
