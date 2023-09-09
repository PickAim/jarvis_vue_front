<script setup lang="ts">
import ViewStartStartBlock from "./ViewStartComponentsMain/ViewStartStartBlock.vue";
import ViewStartCardsBlock from "./ViewStartComponentsMain/ViewStartCardsBlock.vue";
import ViewStartAboutJarvis from "./ViewStartComponentsMain/ViewStartAboutJarvis.vue";
import ViewStartTariffs from "./ViewStartComponentsMain/ViewStartTariffs.vue"
import ViewStartTrustedBlock from "./ViewStartComponentsMain/ViewStartTrustedBlock.vue";
import ViewStartComponentSlot from "./ViewStartComponentsMain/ViewStartComponentSlot.vue";
import ViewStartFormBlock from "./ViewStartComponentsMain/ViewStartFormBlock.vue";
</script>

<template>
  <main>
    <ViewStartStartBlock/>
    <ViewStartCardsBlock/>
    <ViewStartAboutJarvis/>
    <ViewStartTariffs/>
    <ViewStartTrustedBlock/>
    <ViewStartComponentSlot/>
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
