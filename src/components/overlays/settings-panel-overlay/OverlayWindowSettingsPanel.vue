<script setup lang="ts">
import OverlayTemplate from "@/components/overlays/OverlayTemplate.vue";

</script>

<template>
  <OverlayTemplate class="overlay-window-wrapper" header-text="">
    <main>
      <header>Панель управления</header>
      <div class="body-wrapper">
        <div class="menu-panel"></div>
        <div class="content-wrapper">

        </div>
      </div>
    </main>
  </OverlayTemplate>
</template>

<style scoped lang="scss">
@use "/src/assets/styles/variables" as var;

.overlay-window-wrapper {
  display: flex;
  flex-direction: column;
  width: 900px;
  height: 700px;
  background: #2F2F2F;
  border: 1px solid rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(15px);
}

main {
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;

  header {
    width: 100%;
    margin-bottom: 50px;
    padding-left: 56px;
    color: #FFF;
    font-family: Montserrat, sans-serif;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .body-wrapper {
    flex: 1;
    display: flex;
    flex-direction: row;
    width: 100%;

    .menu-panel {
      flex: 0 0 auto;
      width: 380px;
      filter: drop-shadow(10px 4px 10px rgba(0, 0, 0, 0.20));
      background: linear-gradient(#292929 0 0) padding-box,
      linear-gradient(180deg, var.$green-jarvis-color, rgba(0, 0, 0, 0)) border-box;
      color: #313149;
      //padding: 0px;
      border-width: 1px 1px 0 0;
      border-color: transparent;
      border-radius: 0 45px 0 0;
      display: inline-block;
    }
  }
}
</style>
