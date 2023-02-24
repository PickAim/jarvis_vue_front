<template>
  <div class="ml-10">
    <ControlButton @click="addNotification({
    header: 'Ошибка',
    body: 'Какое-то уведомление об ошибке',
    type: 'error'
    })">
      Добавить ошибку
    </ControlButton>
    <ControlButton @click="addNotification({
    header: 'Предупреждение',
    body: 'Какое-то уведомление с предупреждением',
    type: 'warning'
    })">
      Добавить уведомление
    </ControlButton>
    <ControlButton @click="addNotification({
    header: 'Уведомление',
    body: 'Какое-то уведомление',
    type: 'notify'
    })">
      Добавить предупреждение</ControlButton>
    <ControlButton @click="hideAllNotifications()">Очистить</ControlButton>
  </div>
</template>

<script setup lang="ts">
import ControlButton from "@/component/controls/ControlButton.vue"
import {useNotificationsStore} from "@/stores/notificationsStore";

const notificationsStore = useNotificationsStore()
const {addNotification, hideAllNotifications} = notificationsStore;

</script>

<style scoped lang="scss">
</style>
