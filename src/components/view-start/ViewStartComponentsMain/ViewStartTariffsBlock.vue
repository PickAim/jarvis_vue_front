<script setup lang="ts">

</script>

<template>
  <div class="tariffs-block-wrapper">
    <div class="tariffs-name">
      <h1>ТАРИФЫ:</h1>
    </div>
    <div class="tariffs-wrapper">
      <div class="tariff-side-wrapper">
        <div class="tariff first-tariff">
          <div class="tariff-image image-1"/>
          <div class="board-info">
            <span>Дашборд с системой виджетов</span>
            <span>Внутренняя аналитика</span>
            <span>Рекомендации по ценообразованию</span>
          </div>
          <button class="simple-button-try">Попробовать сейчас</button>
        </div>
      </div>
      <div class="tariff second-tariff">
        <div class="tariff-image image-2"/>
        <div class="board-info">
          <span>Дашборд с системой виджетов</span>
          <span>Внутренняя аналитика</span>
          <span>Внешняя аналитика</span>
          <span>Рекомендации по ценообразованию</span>
        </div>
        <button class="simple-button-try">Попробовать сейчас</button>
      </div>
      <div class="tariff-side-wrapper">
        <div class="tariff third-tariff">
          <div class="tariff-image image-3"/>
          <div class="board-info">
            <span>Дашборд с системой виджетов</span>
            <span>Внутренняя аналитика</span>
            <span>Рекомендации по ценообразованию</span>
          </div>
          <button class="simple-button-try">Попробовать сейчас</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
$tag-width: 1150px;

.tariffs-block-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px 0;
  color: #FFFFFF;
  background-color: #191919;
  width: 100%;

  .tariffs-name {
    padding-bottom: 50px;

    h1 {
      font-weight: 700;
      font-size: 48px;
      line-height: 59px;
    }
  }

  .tariffs-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    column-gap: 19px;
    max-width: 1000px;

    .tariff-side-wrapper {
      display: flex;
      flex-direction: row;
      height: 100%;
      overflow: hidden;
      align-items: center;
      padding-block: 20px;
    }

    .tariff {
      display: flex;
      height: 100%;
      overflow: hidden;
      flex-direction: column;
      align-items: center;
      text-align: center;
      justify-content: space-between;
      border: 1px solid #B7FF44;
      border-radius: 24px;
      padding: 10px;

      .tariff-image {
        background-size: contain;
        background-repeat: no-repeat;
        margin-top: 50px;
        height: 100px;
        width: 100px;

        &.image-1 {
          background-image: url("/src/assets/images/Tariffs-1.png");
        }

        &.image-2 {
          background-image: url("/src/assets/images/Tariffs-2.png");
        }

        &.image-3 {
          background-image: url("/src/assets/images/Tariffs-3.png");
        }
      }

      .board-info {
        display: flex;
        flex-direction: column;
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;

        span {
          padding-block: 40px;
        }
      }

      &.second-tariff {
        background: #B7FF44;
        color: #000000;
        border: 1px solid #B7FF44;
      }

      &.first-tariff,
      &.third-tariff {
        margin-block: 20px;
      }

      .simple-button-try {
        padding: 10px;
        background: #B7FF44;
        border: 1px black solid;
        color: #000000;
        border-radius: 12px;
        font-weight: 700;
        font-size: 23px;
        line-height: 28px;
        margin: 10px;
      }
    }
  }
}

@media (max-width: $tag-width) {
  .tariffs-block-wrapper {
    padding: 0 40px;

    .tariffs-name {
      padding: 0;

      h1 {
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;
      }
    }

    .tariffs-wrapper {
      display: grid;
      grid-template-columns: 1fr;
      gap: 20px;

      .tariff-side-wrapper {
        overflow: hidden;
      }

      .tariff {
        overflow: hidden;

        img {
          height: 350px;
          width: 350px;
        }

        .board-info {
          line-height: 24px;
          font-weight: 700;
          font-size: 20px;

          span {
            padding-block: 25px;
          }
        }

        &.second-tariff {

        }

        &.first-tariff,
        &.third-tariff {
        }

        .simple-button-try {
          line-height: 24px;
          font-size: 20px;
          font-weight: 700;

        }
      }
    }
  }
}
</style>
