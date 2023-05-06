<template>
  <main>
    <ViewStartStartBlock></ViewStartStartBlock>
    <ViewStartCardsBlock></ViewStartCardsBlock>
    <ViewStartAboutJarvis></ViewStartAboutJarvis>
  </main>
</template>
<script setup lang="ts">
  import ViewStartStartBlock from './ViewStartComponentsMian/ViewStartStartBlock.vue';
  import ViewStartCardsBlock from './ViewStartComponentsMian/ViewStartCardsBlock.vue';
  import ViewStartAboutJarvis from './ViewStartComponentsMian/ViewStartAboutJarvis.vue';
</script>
<style scoped lang="scss">
  main{
    width: 100%;
    color: #EEEFF3;
    background-color: #EEEFF3;
    display: flex;
    flex-direction: column;
    max-width: 1280px;
    flex: 0 0 auto;
    h1{
      @font-face {
          font-family:Inter;
          src: url(src\assets\Inter-SemiBold.otf);
          }
    }
  p{
      @font-face {
        font-family:Montserrat ;
        src: url(src\assets\Montserrat-LightItalic.ttf);
      }
    }
  }


</style>