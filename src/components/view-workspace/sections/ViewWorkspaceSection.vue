<script setup lang="ts">

</script>
<template>
  <div class="section-container">
    <h1>
      <slot name="header"></slot>
    </h1>
    <main>
      <slot/>
    </main>
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
  overflow: auto;
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
    flex: 1 0;
    height: 100%;
  }
}
</style>