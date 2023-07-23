<template>
  <main>
    <ViewStartStartBlock />
    <ViewStartCardsBlock />
    <ViewStartAboutJarvis />
    <ViewStartTariffs />
    <ViewStartTrustedBlock />
    <ViewStartComponentSlot />
    <ViewStartFormBlock />
    <ViewStartTraiffLinkBlock />
    <!--<ViewStartHeaderOverlay/>-->
    <!--use on mobile version screen -->
  </main>
</template>
<script setup lang="ts">
import ViewStartStartBlock from "./ViewStartComponentsMian/ViewStartStartBlock.vue";
import ViewStartCardsBlock from "./ViewStartComponentsMian/ViewStartCardsBlock.vue";
import ViewStartAboutJarvis from "./ViewStartComponentsMian/ViewStartAboutJarvis.vue";
import ViewStartTariffs from "./ViewStartComponentsMian/ViewStartTariffs.vue"
import ViewStartTrustedBlock from "./ViewStartComponentsMian/ViewStartTrustedBlock.vue";
import ViewStartComponentSlot from "./ViewStartComponentsMian/ViewStartComponentSlot.vue";
import ViewStartFormBlock from "./ViewStartComponentsMian/ViewStartFormBlock.vue";
/*import ViewStartHeaderOverlay from "./ViewStartComponentsMian/ViewStartHeaderOverlay.vue"*/
import ViewStartTraiffLinkBlock from "./ViewStartTraiffLinkBlock.vue"
</script>
<style scoped lang="scss">
main {
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  background: #191919;
}
</style>