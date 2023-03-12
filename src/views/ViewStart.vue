<template>
  <div class="wrapper">
    <ViewStartHeader class="header"/>
    <ViewStartMain class="main"/>
    <ViewStartFooter class="footer"/>
  </div>
</template>

<script setup lang="ts">
import ViewStartHeader from "@/components/start-view/ViewStartHeader.vue";
import ViewStartFooter from "@/components/start-view/ViewStartFooter.vue";
import ViewStartMain from "@/components/start-view/ViewStartMain.vue";
import {useRouter} from "vue-router";

const router = useRouter();
window.addEventListener('keydown', (e) => {
  if (e.code == "KeyT" && e.ctrlKey && e.altKey) {
    router.push("/test");
  }
});
</script>

<style scoped lang="scss">
.wrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 0;

  .header{
  }
  .main{
  }
  .footer{
  }
}
</style>
