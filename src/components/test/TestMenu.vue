<template>
  <div class="menu-wrapper ml-10">
    {{$route.path}}
    <nav v-show="!isSelected">
      <RouterLink to="/test/auth" custom v-slot="{ navigate }">
        <ControlButton @click="navigate(); isSelected=true;" role="link">Тест авторизации</ControlButton>
      </RouterLink>
      <RouterLink to="/test/overlay" custom v-slot="{ navigate }">
        <ControlButton @click="navigate(); isSelected=true;" role="link">Тест оверлеев</ControlButton>
      </RouterLink>
      <RouterLink to="/test/control" custom v-slot="{ navigate }">
        <ControlButton @click="navigate(); isSelected=true;" role="link">Тест элементов управления</ControlButton>
      </RouterLink>
      <RouterLink to="/test/notifications" custom v-slot="{ navigate }">
        <ControlButton @click="navigate(); isSelected=true;" role="link"> Тест уведомлений </ControlButton>
      </RouterLink>
      <RouterLink to="/test/unit-econ" custom v-slot="{ navigate }">
        <ControlButton @click="navigate(); isSelected=true;" role="link"> Тест расчёта UNIT экономики </ControlButton>
      </RouterLink>
    </nav>
    <main v-show="isSelected">
      <ControlButton @click="isSelected=false; router.push('/test/')">Назад</ControlButton>
      <router-view v-slot="{ Component }">
        <component :is="Component"></component>
      </router-view>
    </main>
  </div>
</template>

<script setup lang="ts">
  import {ref} from "vue";
  import ControlButton from "@/components/controls/ControlButton.vue";
  import {useRouter} from "vue-router";

  const router = useRouter();
  const isSelected = ref(false)
  if(!window.location.href.endsWith("/test/")){
    isSelected.value = true;
  }
</script>

<style scoped lang="scss">
.menu-wrapper{
  height: 100vh;
  overflow-y: scroll;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
