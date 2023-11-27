<script setup lang="ts">

import BigCircle from "@/components/generals/BigCircle.vue";
import SmallCircle from "@/components/generals/SmallCircle.vue";
</script>
<template>
  <div class="section-container">
    <h1>
      <slot name="header"></slot>
    </h1>
    <main>
      <slot/>
    </main>
    <div class="circles-wrapper">
      <BigCircle/>
      <SmallCircle/>
    </div>
  </div>
</template>
<style scoped lang="scss">
@use "/src/assets/styles/variables" as var;

.section-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-color: var.$dark-jarvis-color;

  h1 {
    color: white;
    font-size: 18px;
    font-weight: 300;
    text-align: center;
    padding-top: 30px;
    margin-left: 20px;
    z-index: 19;
  }

  main {
    position: relative;
    flex: 1 0;
    height: 100%;
    z-index: 1;
  }

  .circles-wrapper {
    top: 260px;
    left: 10px;
    position: absolute;
    z-index: 0;

    * {
      position: absolute;

      &:nth-child(1) {
        top: 70px;
      }

      &:nth-child(2) {
        left: 240px;
      }
    }
  }
}
</style>