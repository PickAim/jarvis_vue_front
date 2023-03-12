<template>
  <div>
    <ControlButton @click="workerViewStart.openLoginOverlay()">Оверлей логина</ControlButton>
    <ControlButton @click="workerViewStart.openRegistrationOverlay()">Оверлей регистрации</ControlButton>
  </div>
</template>

<script setup lang="ts">
import {ViewStartActions} from "@/component-actions/ViewStartActions";
import ControlButton from "@/components/controls/ControlButton.vue";
const workerViewStart = new ViewStartActions()
</script>

<style scoped lang="scss">

</style>
