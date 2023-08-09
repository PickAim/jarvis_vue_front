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

<script setup lang="ts">

</script>

<style scoped lang="scss">
.section-container {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100%;
  overflow: hidden;
  padding-inline: 20px;
  background-color: #161616;

  h1 {
    color: white;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 20px;
    margin-top: 10px;
    margin-left: 100px;
  }

  main {
    flex: 1 0;
    height: 100%;
    overflow: hidden;
  }
}
</style>