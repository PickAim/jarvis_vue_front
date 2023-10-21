<script setup lang="ts">
import type {Notification} from "@/stores/notificationsStore";
import {useNotificationsStore} from "@/stores/notificationsStore";

const notificationStore = useNotificationsStore();
const {showNotification, hideNotification, startNotificationTimer} = notificationStore;

const props = defineProps<{
  note: Notification
}>()

const typeToColor = {
  'error': '#D82C21',
  'warning': '#D8C521',
  'notify': '#2196D8',
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
       @mouseleave="mouseLeaveFunc"
       :style="{borderColor: typeToColor[note.type]}">
    <div class="header-wrapper">
      <button class="hide-button"
              @click="hideNotification(note.id)">○
      </button>
    </div>
    <div class="notification-title">{{ note.header }}</div>
    <div class="horizontal-separator"/>
    <div class="body-text">{{ note.body }}</div>
  </div>
</template>

<style scoped lang="scss">
.notification-list-item-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 120px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.30) 100%);
  backdrop-filter: blur(15px);
  border-width: 2px;
  margin-block: 5px;
  padding: 5px;
  border-radius: 6px;
  color: white;
  opacity: 1;
  pointer-events: all;

  .hide-button {
    position: absolute;
    right: 5px;
    top: 5px;
    width: 20px;
    height: 20px;
  }

  .notification-title {
    flex: 1 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-weight: 700;
  }

  .body-text {
    flex: 2 0;
    text-align: left;
    margin-top: 10px;
    padding-inline: 10px;
    line-height: 1.8em;
    max-height: 3.6em;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

.horizontal-separator {
  height: 1px;
  width: 50%;
  background-color: white;
}
</style>
