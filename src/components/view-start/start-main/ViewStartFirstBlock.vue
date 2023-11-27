<script setup lang="ts">
import PaddingLayout from "@/components/layouts/PaddingLayout.vue";
import ControlButton from "@/components/controls/ControlButton.vue";
import ViewStartHeader from "@/components/view-start/ViewStartHeader.vue";
import {ViewStartActions} from "@/component-actions/view-start/ViewStartActions";

const actions = new ViewStartActions();
</script>

<template>
  <div class="background-white-wrapper">
    <PaddingLayout class="first-block-wrapper">
      <div class="first-block-grid">
        <div class="header-wrapper">
          <ViewStartHeader/>
        </div>
        <div class="jarvis-label-block">
          <div class="jarvis-label"/>
          <div class="over-jarvis-label">
            <h1>
              Рекомендательный сервис аналитики Вашего бизнеса на Wildberries
            </h1>
          </div>
        </div>
        <div class="under-label-block">
          <h2>Сервис, который не только даст всю интересующую аналитику, но и подскажет что делать дальше, чтобы
            быстрее расти и больше зарабатывать
          </h2>
          <ControlButton class="button-try" @click="actions.onTryButtonClick()">Попробовать сейчас</ControlButton>
        </div>
      </div>
    </PaddingLayout>
  </div>
</template>

<style scoped lang="scss">
.background-white-wrapper {
  background: white;
}

.first-block-wrapper {
  min-height: max(600px, 100vh);
  background: #191919;
  border-radius: 0 0 60px 60px;
}

.first-block-grid {
  flex: 1;
  display: grid;
  grid-template-rows: 2fr 4fr 3fr;
  color: white;

  h1, h2 {
    text-align: center;
    line-height: normal;
  }

  .header-wrapper {
    grid-row: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .jarvis-label-block {
    position: relative;
    grid-row: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    .jarvis-label {
      width: 90%;
      height: 100%;
      background: url("/src/assets/images/Jarvis-Label-1024px.png") no-repeat center;
      background-size: contain;
    }

    .over-jarvis-label {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 15vw;
      width: 60%;
      padding: 20px 5%;
      background: linear-gradient(97.84deg, rgba(107, 166, 255, 0.228) 4.44%, rgba(199, 244, 70, 0.201) 93.84%);
      backdrop-filter: blur(15px);

      h1 {
        font-size: 3vw;
        font-weight: 700;
      }
    }
  }

  .under-label-block {
    grid-row: 3;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    gap: 20px;

    h2 {
      font-size: 24px;
      font-weight: 300;
      max-width: 700px;
    }
  }
}

//@media (max-width: $tag-width) {
//  .first-block-wrapper {
//    display: flex;
//    flex-direction: column;
//    flex: 0 0 auto;
//    background-color: #191919;
//    color: #FFFFFF;
//    margin-top: 130px;
//
//    .start-main {
//      display: flex;
//      flex-direction: column;
//      justify-content: center;
//      align-items: flex-start;
//      height: 100%;
//      width: 100%;
//      position: relative;
//
//      .jarvis-label {
//        display: flex;
//        justify-content: center;
//        width: 100%;
//        position: relative;
//
//        img {
//          width: 80%;
//          height: 85%;
//        }
//      }
//
//      .over-jarvis-label {
//        background: none;
//        backdrop-filter: none;
//        position: relative;
//        display: flex;
//        flex-direction: column;
//        justify-content: flex-start;
//        align-items: flex-start;
//        background: none;
//        backdrop-filter: none;
//        padding: 10vh;
//
//        h1 {
//          text-align: start;
//          font-weight: 700;
//          font-size: 3vw;
//          line-height: 3vw;
//          color: #FFFFFF;
//        }
//      }
//
//      .about-network {
//        display: flex;
//        flex-direction: column;
//        justify-content: flex-start;
//        position: relative;
//        align-items: flex-start;
//        //padding: 10vh;
//        gap: 0;
//
//        h1 {
//          text-align: start;
//          font-weight: 300;
//          font-size: 3vw;
//          line-height: 2.5vw;
//          color: #FFFFFF;
//          padding-bottom: 10vw;
//        }
//
//        .button-try {
//          position: relative;
//          padding: 2vh 4vw;
//          font-weight: 700;
//          font-size: 3vw;
//          line-height: 2vh;
//          color: #000000;
//        }
//      }
//    }
//  }
//}
</style>
