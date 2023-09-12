<script setup lang="ts">
import {useOverlayStateStore} from "@/stores/overlayStore";
import {useRouter} from "vue-router";

const router = useRouter();
const {closeOverlay} = useOverlayStateStore()

</script>

<template>
  <div class="overlay-window-wrapper">
    <div class="overlay-wrapper">
      <div class="top-items">
        <img src="src\assets\images\jarvis.png" alt="Logo">
        <button class="button-close" @click="closeOverlay()">Закрыть</button>
      </div>
      <div class="link-items">
        <div class="link">
          <button>
            ЧТО УМЕЕТ JARVIS?
          </button>
        </div>
        <div class="link">
          <button @click="router.push('ViewTariffs')">
            ТАРИФЫ
          </button>
        </div>
        <div class="link">
          <button>
            ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ
          </button>
        </div>
        <div class="link">
          <button>
            ЛИЧНЫЙ КАБИНЕТ
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.overlay-window-wrapper {
  width: 100vw;
  height: 100vh;
  background-color: rgba(25, 25, 25, 1);
  display: flex;
  flex-direction: column;
  align-items: center;

  .overlay-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 70px;
    gap: 70px;

    .top-items {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      gap: 60px;

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
      margin: 20px 0;
      gap: 50px;

      .link {
        border-bottom: 1px solid rgba(183, 255, 68, 1);

        button {
          font-weight: 400;
          font-size: 16px;
          line-height: 20px;
          color: rgba(255, 255, 255, 1);
          padding: 0 5px;
        }
      }
    }
  }
}
</style>
