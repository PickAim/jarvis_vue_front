<template>
  <main>
    <ViewStartStartBlock />
    <ViewStartCardsBlock />
    <ViewStartAboutJarvis />
    <ViewStartTariffs />
    <ViewStartTrustedBlock />
    <ViewStartComponentSlot />
    <ViewStartFormBlock />
    <!--<VitwStartHeaderOverlay/>-->
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
import ViewStartFormBlock from "./ViewStartComponentsMian/ViewStartFormBlock.vue"
/*import VitwStartHeaderOverlay from "./ViewStartComponentsMian/VitwStartHeaderOverlay.vue"*/

</script>
<style scoped lang="scss">
main {
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  background: #191919;

  h1 {
    @font-face {
      font-family: Inter;
      src: url(src\assets\fonts\Inter-SemiBold.otf);
    }
  }

  p {
    @font-face {
      font-family: Montserrat;
      src: url(src\assets\fonts\Montserrat-LightItalic.ttf);
    }
  }
}
</style>