<template>
  <div>НИЖНЯЯ ЧАСТЬ {{greeting}}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {AppTransferContainer} from "@/AppTransferContainer";

export default defineComponent({
  name: "JFooter",
  data() {
    let transfer = (this.appTransferContainer as unknown as AppTransferContainer)
    return {
      greeting: transfer.a
    }
  }
})
</script>

<style scoped>

</style>