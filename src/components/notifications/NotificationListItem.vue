<script setup lang="ts">
import type {Notification} from "@/stores/notificationsStore";
import {useNotificationsStore} from "@/stores/notificationsStore";

const notificationStore = useNotificationsStore();
const {showNotification, hideNotification, startNotificationTimer} = notificationStore;

const props = defineProps<{
  note: Notification
}>()

const typeToColor = {
  'error': '#F21',
  'warning': '#FB0',
  'notify': '#09F',
  'success': '#8F3'
}

function mouseEnterFunc() {
  showNotification(props.note.id);
}

function mouseLeaveFunc() {
  startNotificationTimer(props.note.id);
}
</script>

<template>
  <div class="notification-list-item-wrapper"
       @mouseenter="mouseEnterFunc"
       @mouseleave="mouseLeaveFunc">
    <div class="type-icon"
         :style="{backgroundColor: typeToColor[note.type]}"/>
    <div class="vertical-separator"/>
    <main>
      <div class="header-wrapper">
        <div class="header-text">{{ note.header }}</div>
        <button class="hide-button"
                @click="hideNotification(note.id)"/>
      </div>
      <div class="horizontal-separator"/>
      <div class="body-text">{{ note.body }}</div>
    </main>
  </div>
</template>

<style scoped lang="scss">
.notification-list-item-wrapper {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  width: 100%;
  background-color: white;
  border: 1px solid black;
  color: black;
  margin-block: 5px;
  opacity: 1;
  pointer-events: all;

  .type-icon {
    flex: 0 0 20px;
  }

  main {
    margin-left: 20px;
    flex: 1 0;
    text-align: left;

    .header-wrapper {
      position: relative;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      .hide-button {
        width: 20px;
        height: 20px;
        background-color: black;
        margin-right: 5px;
      }
    }
  }
}

.vertical-separator {
  width: 1px;
  background-color: black;
}

.horizontal-separator {
  height: 1px;
  background-color: black;
}
</style>
