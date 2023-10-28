<script setup lang="ts">
import NotificationListItem from "@/components/notifications/NotificationListItem.vue";
import {useNotificationsStore} from "@/stores/notificationsStore";
import {storeToRefs} from "pinia";
import TrashIcon from "@/components/icon/TrashIcon.vue";

const notificationsStore = useNotificationsStore()
const {activeNotificationsList} = storeToRefs(notificationsStore);
const {hideAllNotifications} = notificationsStore;

</script>

<template>
  <div class="notification-list-wrapper">
    <div :class="{active: activeNotificationsList.length !== 0}"
         class="clear-button"
         @click="hideAllNotifications()">
      <TrashIcon class="trash-icon"/>
    </div>
    <div class="list">
      <template v-for="note in notificationsStore.notificationsList" :key="note.id">
        <Transition name="list" appear>
          <NotificationListItem v-if="note.isShow" :id="'note_item_'+note.id" :note="note"/>
        </Transition>
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "src/assets/styles/variables" as var;

.notification-list-wrapper {
  position: absolute;
  display: inline-flex;
  align-content: center;
  margin-left: auto;
  margin-right: auto;
  top: 0;
  left: 0;
  right: 0;
  z-index: 500;
  text-align: center;
  height: 100%;
  overflow-y: hidden;
  width: 95vw;
  max-width: 600px;
  pointer-events: none;
}

.clear-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  margin-right: 10px;
  border: 2px solid rgb(100, 100, 100);
  opacity: 0;
  margin-top: 5px;
  border-radius: 100px;
  background-color: var.$dark-jarvis-color;
  transition: opacity 0.3s ease;

  .trash-icon {
    width: 80%;
  }

  &.active {
    pointer-events: all;
    opacity: 1;
  }

  &:hover {
    border-color: rgb(70, 70, 70);
  }

  &:active {
    border-color: rgb(100, 100, 100);
  }

}

.list {
  width: 600px;
  height: 100%;
  display: block;
}

.list-enter-active,
.list-leave-active {
  transition: all 100ms ease;
}

.list-enter-from,
.list-leave-to {
  height: 0;
  margin-block: 0;
  //border-color: rgba(0,0,0,0);
  opacity: 0;
}
</style>
