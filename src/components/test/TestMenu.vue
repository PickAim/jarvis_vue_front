<template>
  <div class="menu-wrapper ml-10">
    {{ $route.path }}
    <nav v-show="!isSelected">
      <RouterLink :to="item[0]" custom v-slot="{ navigate }" :key="ind" v-for="(item, ind) in linkButtons">
        <ControlButton @click="navigate(); isSelected=true;" role="link">{{ item[1] }}</ControlButton>
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

const linkButtons = [
  ["/test/auth", "Тест авторизации"],
  ["/test/overlay", "Тест оверлеев"],
  ["/test/control", "Тест элементов управления"],
  ["/test/notifications", "Тест уведомлений"],
  ["/test/unit-econ", "Тест расчёта UNIT экономики"],
]

const router = useRouter();
const isSelected = ref(false)
if (!(window.location.href.endsWith("/test/") || window.location.href.endsWith("/test"))) {
  isSelected.value = true;
}
</script>

<style scoped lang="scss">
.menu-wrapper {
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
