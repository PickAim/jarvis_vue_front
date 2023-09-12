<script setup lang="ts">
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

<template>
  <div class="view-start-wrapper">
    <ViewStartMain class="main"/>
    <ViewStartFooter class="footer"/>
  </div>
</template>

<style scoped lang="scss">
.view-start-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 0;
  height: 100vh;
  width: 100%;
  overflow: auto;

  .main {
  }

  .footer {
  }
}
</style>
