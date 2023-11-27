<script setup lang="ts">
import ViewStartFirstBlock from "@/components/view-start/start-main/ViewStartFirstBlock.vue";
import ViewStartYouHaveBlock from "@/components/view-start/start-main/ViewStartYouHaveBlock.vue";
import ViewStartAboutJarvisBlock from "@/components/view-start/start-main/ViewStartAboutJarvisBlock.vue";
import ViewStartTariffsBlock from "@/components/view-start/start-main/ViewStartTariffsBlock.vue"
import ViewStartWhyTrustBlock from "@/components/view-start/start-main/ViewStartWhyTrustBlock.vue";
import ViewStartQuestionsBlock from "@/components/view-start/start-main/ViewStartQuestionsBlock.vue";
import ViewStartFormBlock from "@/components/view-start/start-main/ViewStartFormBlock.vue";
</script>

<template>
  <div class="view-start-main-wrapper">
    <ViewStartFirstBlock/>
    <ViewStartYouHaveBlock/>
    <ViewStartAboutJarvisBlock/>
    <ViewStartTariffsBlock/>
    <ViewStartWhyTrustBlock/>
    <ViewStartQuestionsBlock/>
    <ViewStartFormBlock/>
  </div>
</template>

<style scoped lang="scss">
.view-start-main-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  background: #191919;
}
</style>
