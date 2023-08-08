<template>
  <header class="workspace-header-wrapper">
    <div class="logo" @click="$router.push('/workspace')">
      <img src="/src/assets/jarvis_icon_big.png" alt="">
    </div>
    <div class="menu-wrapper">
      <div class="menu-grid title-list">
        <div class="title menu-title" v-for="menu in menus" :key="menu.title">
          <div class="hover-effect-box"/>
          {{ menu.title }}
        </div>
      </div>
      <div class="menu-grid menu-items-grid">
        <div class="title menu-item"
             v-for="menuItem in menuItems"
             :key="menuItem.item.title"
             :style="{gridRow: menuItem.row, gridColumn: menuItem.column}"
             @click="$router.push(menuItem.item.link)">
          <div class="hover-effect-box"/>
          {{ menuItem.item.title }}
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const menus: { title: string, menuItems: { title: string, link: string }[] }[] = [
  {
    title: "Внешняя аналитика",
    menuItems: [
      {title: "Анализ ниш", link: "/workspace/niche-analyze"},
      {title: "Анализ категорий", link: "/workspace/category-analyze"},
      {title: "География целевой аудитории", link: "/workspace/auditory-geography"},
      {title: "Сегмнетарный анализ", link: "/workspace/segments-analyze"},
    ]
  },
  {
    title: "Внутренняя аналитика",
    menuItems: [
      {title: "Анализ остатков", link: "/workspace/remains-analyze"},
      {title: "Ассортиментная матрица", link: "/workspace/assort-matrix"},
      {title: "География продаж магазина", link: "/workspace/sales-geography"},
    ]
  },
  {
    title: "Финансы",
    menuItems: [
      {title: "Калькулятор unit-экономики", link: "/workspace/unit-economy"},
      {title: "Финансовое здоровье магазина", link: "/workspace/financial-health"},
    ]
  }
]

const gridColumns = menus.length;

const menuItems = menus.reduce(
    (accum: { item: { title: string, link: string }, row: number, column: number }[], menu, menuInd) => {
      menu.menuItems.forEach((menuItem, menuItemInd) => {
        accum.push({item: menuItem, column: menuInd + 1, row: menuItemInd + 1});
      });
      return accum;
    }, []);

</script>

<style scoped lang="scss">
$header-height: 70px;

$menu-item-width: 250px;
$menu-gap: 0px;
$hover-effect-width: 30px;

.workspace-header-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-inline: 30px;
  background-color: black;
  height: $header-height;
  width: 100%;
  flex: 0 0 auto;

  .logo {
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 85%;
    cursor: pointer;

    img {
      height: 100%;
    }
  }

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
      height: $header-height;;
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
      //grid-gap: 5px;
      border-right: 1px solid white;
    }

    .title-list {
      grid-template-columns: repeat(v-bind(gridColumns), $menu-item-width);
      height: 100%;
      background: #000;
      z-index: 15;
    }

    .menu-items-grid {
      transform: translateY(-100%);
      position: absolute;
      background: #000;
      //padding-top: 10px;
      top: 100%;
      border-bottom: 1px solid white;
      border-top: 1px solid white;
      transition: transform 0.1s;
      z-index: 10;

      .menu-item {
        cursor: pointer;

        &:hover .hover-effect-box {
          border-left-width: $hover-effect-width;
        }
      }
    }

    &:hover {
      .menu-items-grid {
        transform: translateY(0%);
      }
    }
  }
}
</style>