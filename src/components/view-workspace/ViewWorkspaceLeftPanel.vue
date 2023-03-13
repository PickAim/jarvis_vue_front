<template>
  <menu class="wrapper">
    <div class="buttons-panel">
      <div class="section-button"
           v-for="n in sectionsList" :key="n.path" @click="router.replace(n.path)"/>
    </div>
  </menu>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router";

const sectionsList: {path: string, iconSrc: string, desc: string}[] = [
  {
    path: "/workspace",
    iconSrc: "",
    desc: "Главная страница"
  },
  {
    path: "/workspace/unit-calc",
    iconSrc: "",
    desc: "Расчёт UNIT экономики"
  },
  {
    path: "/workspace/statistic",
    iconSrc: "",
    desc: "Статистика"
  }
]

const router = useRouter();
</script>

<style scoped lang="scss">
menu{
  background-color: gray;
  width: 90px;
  flex-shrink: 0;

  .buttons-panel{
    display: flex;
    flex-direction: column;
    align-items: center;

    .section-button{
      width: 70px;
      height: 70px;
      margin-block: 10px;
      background-color: white;
      border-radius: 999px;
    }
  }
}
</style>