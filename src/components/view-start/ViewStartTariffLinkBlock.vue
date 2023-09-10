<script setup lang="ts">
import {ViewStartActions} from "@/component-actions/view-start/ViewStartActions";
import {useRouter} from "vue-router";

const actions = new ViewStartActions();
const router = useRouter();
</script>

<template>
  <div class="view-you-have">
    <div class="buttons-wrapper">
      <img src="src\assets\images\jarvis.png" alt="">
      <button class="about-product">О продукте</button>
      <button class="tariffs">Тарифы</button>
      <button class="question">Вопросы</button>
      <button class="login-button" @click="actions.openLoginOverlay()">Вход</button>
      <button class="reg-button" @click="actions.openRegistrationOverlay()">Регистрация</button>
    </div>
    <div class="tariff-title">
      <div class="tariff-paragraph">
        ТАРИФЫ:
      </div>
      <div class="tariff-table">
        <div class="tariffs-types classes">
          <div></div>
          <div class="base-type">БАЗОВЫЙ</div>
          <div class="advanced-type">ПРОДВИНУТЫЙ</div>
          <div class="professional-type">ПРОФЕССИОНАЛЬНЫЙ</div>
        </div>
        <div class="advantages classes">
          <div class="advantages-title">Дашборд с ключивыми показателями</div>
          <div>+</div>
          <div>+</div>
          <div>+</div>
        </div>
        <div class="advantages classes">
          <div class="advantages-title">Калькулятор юнит-экономики</div>
          <div>+</div>
          <div>+</div>
          <div>+</div>
        </div>
        <div class="advantages classes">
          <div class="advantages-title">Оценка финансового здоровья магазина</div>
          <div>+</div>
          <div>+</div>
          <div>+</div>
        </div>
        <div class="advantages classes">
          <div class="advantages-title">Расчет поставки</div>
          <div>+</div>
          <div>+</div>
          <div>+</div>
        </div>
        <div class="advantages classes">
          <div class="advantages-title">Смарт-анализ товарной ниши</div>
          <div>+</div>
          <div>+</div>
          <div>+</div>
        </div>
        <div class="advantages classes">
          <div class="advantages-title">Управление остатками на складах</div>
          <div>+</div>
          <div>+</div>
          <div>+</div>
        </div>
        <div class="advantages classes">
          <div class="advantages-title">Рекомендации по цене</div>
          <div>+</div>
          <div>+</div>
          <div>+</div>
        </div>
        <div class="advantages classes">
          <div class="advantages-title">Сегментарный анализ</div>
          <div>+</div>
          <div>+</div>
          <div>+</div>
        </div>
        <div class="advantages classes">
          <div class="advantages-title">SEO-оптимизация</div>
          <div>+</div>
          <div>+</div>
          <div>+</div>
        </div>
        <div class="type-price classes">
          <div></div>
          <div class="price-block">
            <button class="button-price">5000</button>
          </div>
          <div class="price-block">
            <button class="button-price">10000</button>
          </div>
          <div class="price-block">
            <button class="button-price">15000</button>
          </div>
        </div>
      </div>
    </div>
    <div class="tariff-description">
      КАКОЙ ТАРИФ ПОДОЙДЕТ ИМЕННО ВАМ?
    </div>
    <div class="tariff-types-wrapper">
      <div class="tariffs-name">
        <h1 class="base">
          БАЗОВЫЙ
        </h1>
      </div>
      <div class="tariffs-name">
        <h1 class="advanced">
          ПРОДВИНУТЫЙ
        </h1>
      </div>
      <div class="tariffs-name">
        <h1 class="professional">
          ПРОФЕССИОНАЛЬНЫЙ
        </h1>
      </div>
      <div class="description-white-line">
        <div class="description">
          <h1>
            Малый бизнес,
            не имеющий больших
            средств на более
            дорогую подписку
          </h1>
        </div>
      </div>
      <div class="description-white-line">
        <div class="description">
          <h1>Малый и средний бизнес,
            нуждающийся в полном
            функционале
            рекомендательной
            системы для принятия
            решений
          </h1>
        </div>
      </div>
      <div class="description">
        <h1>
          Малый и средний бизнес,
          активно масштабирующийся
          или развивающий разные
          направления; менеджеры
          маркетплейсов, работающие
          с несколькими клиентами
          одновременно
        </h1>
      </div>
      <div class="description-white-line">
        <div class="description">
          <h1 class="description-line">
            Бизнес не имеет продаж,
            поэтому нуждается в самой
            базовой аналитике
          </h1>
        </div>
      </div>
      <div class="description-white-line">
        <div class="description">
          <h1 class="description-line">
            Бизнес стабилен, но есть
            потребность
            в масштабировании
            и увеличении продаж;
            есть запрос на
            автоматизацию бизнеса
          </h1>
        </div>
      </div>
      <div class="description">
        <h1 class="description-line">
          Иметь весь возможный
          спектр инструментов для
          глубокого и гибкого
          управления продажами,
          возможно через несколько
          магазинов
        </h1>
      </div>
    </div>
    <div class="footer">
      <div class="footer-wrapper">
        <img src="\src\assets\images\jarvis.png" alt="">
        <a href="">Контакты</a>
        <a href="">Мы в социальных сетях:</a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
$tag-width: 1150px;

.view-you-have {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  width: 100%;
  background-color: rgba(25, 25, 25, 1);
  color: rgba(255, 255, 255, 1);

  .buttons-wrapper {
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-around;

    img {
      width: 200px;
    }

    button {
      font-weight: 400;
      font-size: 24px;
      line-height: 29px;
    }

    .login-button {
      border: 1px solid rgba(183, 255, 68, 1);
      padding: 10px 25px;
      border-radius: 15px;
    }

    .reg-button {
      border: 1px solid rgba(183, 255, 68, 1);
      padding: 10px 25px;
      border-radius: 15px;
    }
  }

  .tariff-title {
    display: flex;
    flex-direction: column;
    justify-content: center;

    .tariff-paragraph {
      font-weight: 700;
      font-size: 64px;
      line-height: 78px;
      margin: 70px 0px;
      text-align: center;
    }

    .tariff-table {
      display: grid;
      grid-template-rows: 1fr;
      background: linear-gradient(97.84deg, rgba(217, 217, 217, 0.087) 4.44%, rgba(0, 0, 0, 0.249) 93.84%);
      backdrop-filter: blur(15px);
      max-width: 1000px;
      text-align: center;
      padding: 30px 40px;

      .classes {
        display: grid;
        grid-template-columns: minmax(100px, 1.5fr) 1.5fr 1.5fr 1.5fr;
      }

      .tariffs-types {
        display: grid;
        text-align: center;
        border-bottom: 1px solid rgba(183, 255, 68, 1);
        padding: 10px 0px 20px 10px;

        .base-type {
          font-weight: 700;
          font-size: 20px;
          line-height: 24px;
          color: #D9D9D9;
        }

        .advanced-type {
          font-weight: 700;
          font-size: 20px;
          line-height: 24px;
          color: #7026EB;
        }

        .professional-type {
          font-weight: 700;
          font-size: 20px;
          line-height: 24px;
          color: #B7FF44;
        }
      }

      .advantages {
        display: grid;
        padding: 10px;
        text-align: center;
        align-items: center;

        .advantages-title {
          text-align: start;
          align-items: center;
          font-weight: 700;
          font-size: 24px;
          line-height: 29px;
          color: #D9D9D9;
          padding: 20px 0px;
        }
      }

      .type-price {
        display: grid;
        text-align: center;
        padding: 10px;

        .price-block {
          .button-price {
            background-color: rgba(183, 255, 68, 1);
            color: rgba(0, 0, 0, 1);
            padding: 10px 30px;
            border-radius: 20px;
            font-weight: 700;
            font-size: 23px;
            line-height: 28px;
          }

        }
      }
    }
  }

  .tariff-description {
    font-weight: 700;
    font-size: 48px;
    line-height: 59px;
    text-align: center;
    color: #FFFFFF;
    margin: 70px 0px;
  }

  .tariff-types-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    max-width: 1100px;
    justify-items: flex-start;
    margin: 50px 0px;
    column-gap: 30px;

    .tariffs-name {
      display: flex;
      flex-direction: column;
      justify-content: center;

      .base {
        background: #F0F0F0;
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;
        text-align: center;
        color: #000000;
        border-radius: 17px;
        padding: 10px 30px;
      }

      .advanced {
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;
        text-align: center;
        color: #FFFFFF;
        background: #7026EB;
        border-radius: 17px;
        padding: 10px 30px;
      }

      .professional {
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;
        text-align: center;
        color: #000000;
        background: #B7FF44;
        border-radius: 17px;
        padding: 10px 30px;
      }
    }

    .description-white-line {
      border-right: 2px solid #FFFFFF;
      padding: 0px 50px 0px 0px;
    }

    .description {
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
      color: #D9D9D9;
      padding-top: 40px;

      .description-line {
        border-top: 1px solid #B7FF44;
        padding: 20px 0px;
      }
    }
  }

  .footer {
    width: 100%;
    background: #191919;
    color: #FFFFFF;
    display: flex;
    justify-content: start;

    .footer-wrapper {
      display: flex;
      flex-direction: column;
      gap: 45px;
      padding: 50px 40px;

      img {
        width: 300px;
        height: 70px;
      }

      a {
        font-weight: 700;
        font-size: 36px;
        line-height: 44px;
      }
    }
  }

  @media (max-width: $tag-width) {}
}</style>
