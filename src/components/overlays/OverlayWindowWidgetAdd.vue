<template>
  <OverlayTemplateDecorated class="overlay-window-wrapper" header-text="Добавление виджета">
    <main>
      <div class="widget" v-for="w in mainSectionWidgets" :key="w">
        <div class="widget-overlay">
          <ControlButtonRoundWhite class="add-button" @click="onAddClick(w)">ADD</ControlButtonRoundWhite>
          <ControlButtonRoundWhite class="help-button">HELP</ControlButtonRoundWhite>
        </div>
        <component :is="widgets[w]" :widget-size="1" :options="{settings: {nicheName: 'wwewe'}}"/>
      </div>
    </main>
  </OverlayTemplateDecorated>
</template>

<script setup lang="ts">
import OverlayTemplateDecorated from "@/components/overlays/OverlayTemplateDecorated.vue";
import {widgets} from "@/components/view-workspace/widgets";
import ControlButtonRoundWhite from "@/components/controls/ControlButtonRoundWhite.vue";
import type {WidgetName} from "@/types/WidgetTypes";
import {useWidgetStore} from "@/stores/widgetStore";

const widgetStore = useWidgetStore();

const mainSectionWidgets: WidgetName[] = [
  'nicheDist',
  'unitEcon',
  'remains',
  'storeProfitability',
  'ordersAndRedemptions',
  'averageCheck',
  'lostRevenue',
  'turnover'
]

function onAddClick(name: WidgetName) {
  widgetStore.addWidget(name);
}

</script>

<style scoped lang="scss">
.overlay-window-wrapper {
  width: 100%;
  max-width: 1000px;
}

main {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;

  header {
    font-size: 30px;
  }

  .input-wrapper {
    width: 300px;
  }

  .submit {
    font-size: 22px;
    margin-top: 30px;
    height: 50px;
    width: 250px;
  }

  .widget {
    background: black;
    border-radius: 10px;
    border: 3px solid white;
    position: relative;

    .widget-overlay {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 10px;
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255);
      opacity: 0;
      transition: opacity 0.2s;

      * {
        width: 80px;
        height: 80px;
        font-size: 20px;
      }

      &:hover {
        opacity: 0.3;
      }
    }
  }
}
</style>
