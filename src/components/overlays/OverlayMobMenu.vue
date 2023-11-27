<script setup lang="ts">
import {useOverlayStateStore} from "@/stores/overlayStore";
import {useRouter} from "vue-router";
import OverlayTemplate from "@/components/overlays/OverlayTemplate.vue";
import {ViewStartActions} from "@/component-actions/view-start/ViewStartActions";

const actions = new ViewStartActions();
const router = useRouter();
const {closeOverlay} = useOverlayStateStore()

function scrollTo(id: string) {
  closeOverlay();
  router.push('/').then(() => {
    document.querySelector(`#${id}`)?.scrollIntoView({
      behavior: "smooth"
    })
  });
}

function goTo(path: string) {
  closeOverlay();
  router.push(path);
}
</script>

<template>
  <OverlayTemplate class="overlay-window-wrapper" header-text="">
    <div class="overlay-wrapper">
      <div class="top-items">
        <div class="jarvis-label" @click="goTo('/')"/>
        <!--        <button class="button-close" @click="closeOverlay()">Закрыть</button>-->
      </div>
      <div class="link-items">
        <div class="link">
          <button @click="() => scrollTo('about-jarvis')">
            ЧТО УМЕЕТ JARVIS?
          </button>
        </div>
        <!--        <div class="link">-->
        <!--          <button @click="router.push('tariffs')">-->
        <!--            ТАРИФЫ-->
        <!--          </button>-->
        <!--        </div>-->
        <div class="link">
          <button @click="() => scrollTo('questions')">
            ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ
          </button>
        </div>
        <div class="link">
          <button @click="actions.openLoginOverlay()">
            ВОЙТИ
          </button>
        </div>
      </div>
    </div>
  </OverlayTemplate>
</template>

<style scoped lang="scss">
.overlay-window-wrapper {
  flex: 1;
  background-color: rgba(25, 25, 25, 1);
  display: flex;
  height: min-content;
  width: 100%;
  flex-direction: column;
  align-items: center;

  .overlay-wrapper {
    display: flex;
    flex-direction: column;
    padding: 70px;
    gap: 70px;

    .top-items {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      gap: 60px;

      .jarvis-label {
        background: url("/src/assets/images/Jarvis-Label-256px.png") no-repeat top;
        background-size: contain;
        width: 200px;
        height: 70px;
        cursor: pointer;
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
