<script setup lang="ts">
import NotificationList from "@/components/notifications/NotificationList.vue";
import OverlayContainer from "@/components/overlays/OverlayContainer.vue";
import RequestPreloader from "@/components/generals/RequestPreloader.vue";
import {useRequestStore} from "@/stores/requestStore";
import {storeToRefs} from "pinia";
import "@/assets/styles/main.scss";

const {isLoading, isHidden} = storeToRefs(useRequestStore());
console.log(import.meta.env.VITE_URL);
</script>

<template>
  <RequestPreloader :is-loading="isLoading && !isHidden"/>
  <NotificationList/>
  <OverlayContainer/>
  <RouterView/>
</template>

<style>
</style>
