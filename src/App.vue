<template>
  <JHeader class="bg-red-200 z-10"/>
  <RouterView />
  <JFooter/>
</template>

<script>
import JFooter from "@/components/JFooter";
import JHeader from "@/components/JHeader";
import {RouterView} from "vue-router"

export default {
  name: "JMain",
  components: {
    JFooter,
    JHeader,
    RouterView
  }
}
</script>

<style scoped>

</style>