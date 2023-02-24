<template>
  <div class="list">
    <NotificationBlock v-for="note in notifications" :key="note.id" :note="note"/>
  </div>
</template>

<script setup lang="ts">
import type {Notification} from "@/packages/Objects";
import type NotificationBlock from "@/component/NotificationListItem.vue"

let notifications: Notification[] = [];
notifications.push({
  id: 1,
  header: "Note",
  body: "Sample notification",
  type: "error"
});
</script>

<style scoped>
/*TODO */
</style>
