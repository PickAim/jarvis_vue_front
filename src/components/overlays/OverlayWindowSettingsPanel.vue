<script setup lang="ts">
import OverlayTemplate from "@/components/overlays/OverlayTemplate.vue";
import {settingsPanelSections} from "@/components/overlays/settings-panel-overlay";
import {ref} from "vue";

const sectionIndex = ref(0);

const menuItems: {
  text: string,
  component: object
}[] = [
  {text: "Личные данные", component: settingsPanelSections.personalInfo},
  {text: "Настройка аккаунта", component: settingsPanelSections.account},
  {text: "Подписка", component: settingsPanelSections.subscribe},
  {text: "Информация о продавце", component: settingsPanelSections.sellerInfo},
]

function onMenuClick(ind: number) {
  sectionIndex.value = ind;
}
</script>

<template>
  <OverlayTemplate class="overlay-window-wrapper" header-text="">
    <main>
      <header>Панель управления</header>
      <div class="body-wrapper">
        <div class="menu-panel">
          <button class="menu-item"
                  :class="{selected: ind === sectionIndex}"
                  @click="onMenuClick(ind)"
                  v-for="(item, ind) in menuItems" :key="ind">
            {{ item.text }}
          </button>
        </div>
        <div class="content-wrapper">
          <component :is="menuItems[sectionIndex].component"/>
        </div>
      </div>
    </main>
  </OverlayTemplate>
</template>

<style scoped lang="scss">
@use "/src/assets/styles/variables" as var;

.overlay-window-wrapper {
  display: flex;
  flex-direction: column;
  width: 900px;
  height: 700px;
  background: #2F2F2F;
  border: 1px solid rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(15px);
  color: white;
  line-height: normal;

  main {
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    header {
      width: 100%;
      padding: 15px 36px;
      font-size: 36px;
      font-weight: 700;
    }

    .body-wrapper {
      flex: 1;
      display: flex;
      flex-direction: row;
      width: 100%;

      .menu-panel {
        display: flex;
        flex-direction: column;
        flex: 0 0 auto;
        width: 280px;
        padding: 40px 20px 30px 40px;
        gap: 36px;
        filter: drop-shadow(7px 2px 4px rgba(0, 0, 0, 0.20));
        background: linear-gradient(#292929, #292929) padding-box,
        linear-gradient(180deg, var.$green-jarvis-color, rgba(0, 0, 0, 0)) border-box;
        border-width: 1px 1px 0 0;
        border-color: transparent;
        border-radius: 0 30px 30px 0;

        .menu-item {
          display: flex;
          flex-direction: row;
          font-size: 18px;
          font-style: normal;
          font-weight: 300;
          line-height: normal;
          text-align: left;

          &.selected {
            color: var.$green-jarvis-color;
          }
        }
      }

      .content-wrapper {
        flex: 1 0;
        display: flex;
        flex-direction: row;
        align-items: stretch;
        padding: 10px 40px;
      }
    }
  }
}
</style>
