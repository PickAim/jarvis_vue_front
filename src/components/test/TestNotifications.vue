<template>
    <ControlButton @click="addNotification({
    header: 'Ошибка',
    body: 'Какое-то уведомление об ошибкеКакое-то уведомление об ошибкеКакое-то уведомление об ошибкеКакое-то уведомление об ошибкеКакое-то уведомление об ошибкеКакое-то уведомление об ошибкеКакое-то уведомление об ошибке',
    type: 'error'
    })">Добавить ошибку</ControlButton>
    <ControlButton @click="addNotification({
    header: 'Предупреждение',
    body: 'Какое-то уведомление с предупреждением',
    type: 'warning'
    })">Добавить уведомление</ControlButton>
    <ControlButton @click="addNotification({
    header: 'Уведомление',
    body: 'Какое-то уведомление',
    type: 'notify'
    })">Добавить предупреждение</ControlButton>
    <ControlButton @click="addNotification({
    header: randomString,
    body: '',
    type: 'notify'
    })">Добавить нечто</ControlButton>
    <ControlButton @click="hideAllNotifications()">Очистить</ControlButton>
    <ControlTextInput class="duration-input"
                      input-type="number"
                      title="Длительность"
                      v-model="defaultDuration"/>
</template>

<script setup lang="ts">
import ControlButton from "@/components/controls/ControlButton.vue";
import ControlTextInput from "@/components/controls/ControlTextInput.vue";
import {useNotificationsStore} from "@/stores/notificationsStore";
import {ref} from "vue";
import {storeToRefs} from "pinia";

const notificationsStore = useNotificationsStore()
const {addNotification, hideAllNotifications} = notificationsStore;
const {defaultDuration} = storeToRefs(notificationsStore);
const randomString = ref("qwe")
</script>

<style scoped lang="scss">
.duration-input{
  width: 300px;
}
</style>
