<template>
  <div class="menu-wrapper p-10">
    <RouterLink to="/test/auth">Тест авторизации</RouterLink>
    <RouterLink to="/test/overlay">Тест оверлеев</RouterLink>
    <RouterLink to="/test/control">Тест элементов управления</RouterLink>
    <RouterLink to="/test/notifications">Тест уведомлений</RouterLink>
  </div>
</template>

<script setup lang="ts">
import TestAuth from "./TestAuth.vue";
</script>

<style scoped lang="scss">
.menu-wrapper > *{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 100px;
  margin-block: 10px;
  border: 2px solid black;
  text-align: center;
  &:hover{
   border-width: 3px;
  }
  &:active{
   border-width: 2px;
  }
}
</style>
