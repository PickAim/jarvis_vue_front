<script setup lang="ts">
import ViewStartStartBlock from "./ViewStartComponentsMain/ViewStartStartBlock.vue";
import ViewStartYouHave from "./ViewStartComponentsMain/ViewStartYouHave.vue";
import ViewStartAboutJarvis from "./ViewStartComponentsMain/ViewStartAboutJarvis.vue";
import ViewStartTariffs from "./ViewStartComponentsMain/ViewStartTariffs.vue"
import ViewStartWhyTrust from "./ViewStartComponentsMain/ViewStartWhyTrust.vue";
import ViewStartQuestions from "./ViewStartComponentsMain/ViewStartQuestions.vue";
import ViewStartFormBlock from "./ViewStartComponentsMain/ViewStartFormBlock.vue";
</script>

<template>
  <main>
    <ViewStartStartBlock/>
    <ViewStartYouHave/>
    <ViewStartAboutJarvis/>
    <ViewStartTariffs/>
    <ViewStartWhyTrust/>
    <ViewStartQuestions/>
    <ViewStartFormBlock/>
    <!--<ViewStartTraiffLinkBlock />-->
    <!--<ViewStartHeaderOverlay/>-->
    <!--use on mobile version screen -->
  </main>
</template>

<style scoped lang="scss">
main {
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  background: #191919;
}
</style>
