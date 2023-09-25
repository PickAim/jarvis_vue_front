<script setup lang="ts">
import {SectionInfoType, sections} from "@/components/view-workspace/workspaceSections";
import {ref} from "vue";
import {useRouter} from "vue-router";

const router = useRouter();
const isOpen = ref(false);
const selectedRoute = ref(0);

const menus: { title: string, menuItems: SectionInfoType[] }[] = [
  {
    title: "Внешняя аналитика",
    menuItems: [
      sections.nicheAnalyze,
      sections.categoryAnalyze,
      sections.auditoryGeography,
      sections.segmentsAnalyze,
    ]
  },
  {
    title: "Внутренняя аналитика",
    menuItems: [
      sections.remainsAnalyze,
      sections.assortMatrix,
      sections.salesGeography,
    ]
  },
  {
    title: "Финансы",
    menuItems: [
      sections.unitEconomy,
      sections.financialHealth,
    ]
  }
]

const gridColumns = menus.length;

type SectionButtonInfoType = { item: SectionInfoType, row: number, column: number };
const menuItems = menus.reduce(
    (accum: SectionButtonInfoType[], menu, menuInd) => {
      menu.menuItems.forEach((menuItem, menuItemInd) => {
        accum.push({item: menuItem, column: menuInd + 1, row: menuItemInd + 1});
      });
      return accum;
    }, []);

function onMouseEnter() {
  isOpen.value = true;
}

function onMouseLeave() {
  isOpen.value = false;
}

function onMenuButtonClicked(menuItem: SectionButtonInfoType, id: number) {
  router.push(menuItem.item.link);
  selectedRoute.value = id;
  isOpen.value = false;
}

</script>

<template>
  <div class="menu-wrapper"
       @mouseenter="onMouseEnter"
       @mouseleave="onMouseLeave">
    <div class="menu-grid title-list">
      <div class="title menu-title" v-for="menu in menus" :key="menu.title">
        <div class="hover-effect-box"/>
        {{ menu.title }}
      </div>
    </div>
    <div class="menu-grid menu-items-grid" :class="{isShown: isOpen}">
      <div class="title menu-item"
           v-for="(menuItem, ind) in menuItems"
           :key="ind"
           :class="{selected: ind === selectedRoute}"
           :style="{gridRow: menuItem.row, gridColumn: menuItem.column}"
           @click="onMenuButtonClicked(menuItem, ind)">
        <div class="hover-effect-box"/>
        {{ menuItem.item.title }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
$header-height: 70px;

$menu-item-width: 250px;
$menu-gap: 0;
$hover-effect-width: 30px;

.menu-wrapper {
  position: relative;
  display: flex;
  flex-direction: row;
  height: 100%;
  color: white;
  margin-left: 100px;

  .title {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: $header-height;
    width: 100%;
    padding-right: 10px;
    -webkit-user-select: none;

    .hover-effect-box {
      flex: 0 0 $hover-effect-width;
      height: 100%;
      border-left: 1px solid white;
      margin-right: 10px;
      transition: all 0.2s;
      box-sizing: border-box;
    }
  }

  .menu-title {
    font-weight: bold;
  }

  .menu-grid {
    display: grid;
    grid-template-columns: repeat(v-bind(gridColumns), $menu-item-width);
    border-right: 1px solid white;
  }

  .title-list {
    grid-template-columns: repeat(v-bind(gridColumns), $menu-item-width);
    height: 100%;
    background: #000;
    z-index: 21;
  }

  .menu-items-grid {
    transform: translateY(-100%);
    position: absolute;
    background: #000;
    top: 100%;
    border-bottom: 1px solid white;
    border-top: 1px solid white;
    transition: transform 0.1s cubic-bezier(0.620, 0.145, 0.340, 0.905);
    z-index: 20;

    .menu-item {
      cursor: pointer;

      &:hover, &.selected {
        .hover-effect-box {
          border-left-width: $hover-effect-width;
        }
      }
    }

    &.isShown {
      transition-duration: 0.3s;
      transform: translateY(0%);
    }
  }
}
</style>
