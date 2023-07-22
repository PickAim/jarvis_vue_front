<template>
  <RequestPreloader :is-loading="isRequestLoading"/>
  <NotificationList/>
  <OverlayContainer/>
  <RouterView/>
</template>

<script setup lang="ts">
import NotificationList from "@/components/notifications/NotificationList.vue";
import OverlayContainer from "@/components/overlays/OverlayContainer.vue";
import RequestPreloader from "@/components/generals/RequestPreloader.vue";
import {useRequestStore} from "@/stores/requestStore";
import {storeToRefs} from "pinia";
import {watch} from "vue";

const isRequestLoading = storeToRefs(useRequestStore()).isLoading;
watch(isRequestLoading, (v, ov) => {
  console.log(v, ov);
})
</script>

<style scoped>

</style>
