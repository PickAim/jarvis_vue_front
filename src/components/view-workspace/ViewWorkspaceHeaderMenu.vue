<script setup lang="ts">
import {SectionLabelType, sections} from "@/component-actions/view-workspace/workspaceLabels";
import {ref} from "vue";
import {useRouter} from "vue-router";
import {SectionNameType} from "@/types/SectionTypes";

const router = useRouter();
const isOpen = ref(false);
const selectedRoute = ref(-1);

const menus: { title: string, menuItems: SectionLabelType[] }[] = [
  {
    title: "Внешняя аналитика",
    menuItems: [
      sections.categoryAnalyze,
      sections.auditoryGeography,
      sections.segmentsAnalyze,
      sections.nearestKeywords,
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

const underConstructionItems: SectionNameType[] = [
  // "dashboard",
  "nicheAnalyze",
  // "categoryAnalyze",
  "auditoryGeography",
  // "nearestKeywords",
  // "segmentsAnalyze",
  // "remainsAnalyze",
  "assortMatrix",
  "salesGeography",
  // "unitEconomy",
  "financialHealth"
]
const gridColumns = menus.length;
const gridRows = Math.max(...menus.map((menu) => menu.menuItems.length));

type SectionButtonInfoType = { item: SectionLabelType, row: number, column: number };
const menuItems = menus.reduce(
    (accum: SectionButtonInfoType[], menu, menuInd) => {
      menu.menuItems.forEach((menuItem, menuItemInd) => {
        accum.push({item: menuItem, column: menuInd + 1, row: menuItemInd + 1});
      });
      return accum;
    }, []);

router.beforeEach((to) => {
  selectedRoute.value = menuItems.findIndex((menuItem) => menuItem.item.link === to.fullPath);
});

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
           :class="{
             selected: ind === selectedRoute,
           underConstruction: underConstructionItems.some(item => sections[item] === menuItem.item)}"
           :style="{gridRow: menuItem.row, gridColumn: menuItem.column}"
           @click="onMenuButtonClicked(menuItem, ind)">
        <div class="hover-effect-box"/>
        {{ menuItem.item.title }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "src/assets/styles/variables" as var;

$header-height: 80px;

$menu-item-height: 70px;
$menu-item-width: 300px;
$menu-gap: 0;
$hover-effect-width: 40px;

.menu-wrapper {
  display: flex;
  flex-direction: row;
  height: 100%;
  color: white;

  .title {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: $header-height;
    font-size: 17px;
    width: 100%;
    padding-right: 10px;
    -webkit-user-select: none;

    .hover-effect-box {
      flex: 0 0 $hover-effect-width;
      height: 100%;
      //border-left: 1px solid white;
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
    //border-right: 1px solid white;
  }

  .title-list {
    position: relative;
    z-index: 22;
    grid-template-columns: repeat(v-bind(gridColumns), $menu-item-width);
    height: 100%;
    background: transparent;
  }

  $menu-items-border-color: white;

  .menu-items-grid {
    position: absolute;
    background: var.$dark-jarvis-color;
    top: calc(100% + 1px);
    left: -1px;
    height: 1px;
    overflow: hidden;
    border-color: white;
    border-width: 1px 1px 1px 0;
    opacity: 0;
    transition: height 150ms cubic-bezier(0.620, 0.145, 0.340, 0.905), opacity 150ms;
    z-index: 21;

    .menu-item {
      cursor: pointer;
      border-left: 1px solid $menu-items-border-color;
      height: $menu-item-height;

      &:hover, &.selected {
        .hover-effect-box {
          border-left-width: $hover-effect-width;
        }
      }

      &.underConstruction {
        color: gray;
      }
    }

    &.isShown {
      transition-property: opacity, height;
      transition-duration: 0.2s, 0.3s;
      opacity: 1;
      height: calc(v-bind(gridRows) * $menu-item-height);
    }
  }
}
</style>
