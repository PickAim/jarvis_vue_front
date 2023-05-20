<template>
  <div class="view-start-wrapper">
    <ViewStartHeader class="header"/>
    <ViewStartMain class="main"/>
    <ViewStartFooter class="footer"/>
  </div>
</template>

<script setup lang="ts">
import ViewStartFooter from "@/components/view-start/ViewStartFooter.vue";
import ViewStartHeader from "@/components/view-start/ViewStartHeader.vue";
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
  width: 100%;
  overflow: auto;
  position: relative;
  .header{
    position: absolute;
    z-index: 1;
    top: 0;
    
  }
  .main{
  }
  .footer{
  }
}
</style>
