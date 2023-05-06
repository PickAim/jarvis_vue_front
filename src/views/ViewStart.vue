<template>
  <div class="view-start-wrapper">
    <ViewStartHeader class="header"/>
    <ViewStartMain class="main"/>
    <ViewStartFooter class="footer"/>
  </div>
</template>

<script setup lang="ts">
import ViewStartHeader from "@/components/view-start/ViewStartHeader.vue";
import ViewStartFooter from "@/components/view-start/ViewStartFooter.vue";
import ViewStartMain from "@/components/view-start/ViewStartMain.vue";
import {useRouter} from "vue-router";

const router = useRouter();
window.addEventListener('keydown', (e) => {
  if (e.code == "KeyT" && e.ctrlKey && e.altKey) {
    router.push("/test");
  }
});
</script>

<style scoped lang="scss">
.view-start-wrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 0;
  height: 100vh;
  overflow: auto;
  .header{
  }
  .main{
  }
  .footer{
  }
}
</style>
