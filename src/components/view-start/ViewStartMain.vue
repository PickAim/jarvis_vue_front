<script setup lang="ts">
import ViewStartFirstBlock from "./ViewStartComponentsMain/ViewStartFirstBlock.vue";
import ViewStartYouHaveBlock from "./ViewStartComponentsMain/ViewStartYouHaveBlock.vue";
import ViewStartAboutJarvisBlock from "./ViewStartComponentsMain/ViewStartAboutJarvisBlock.vue";
import ViewStartTariffsBlock from "./ViewStartComponentsMain/ViewStartTariffsBlock.vue"
import ViewStartWhyTrustBlock from "./ViewStartComponentsMain/ViewStartWhyTrustBlock.vue";
import ViewStartQuestionsBlock from "./ViewStartComponentsMain/ViewStartQuestionsBlock.vue";
import ViewStartFormBlock from "./ViewStartComponentsMain/ViewStartFormBlock.vue";
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
