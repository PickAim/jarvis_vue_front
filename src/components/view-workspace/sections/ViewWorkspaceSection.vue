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
  background-color: #161616;

  h1 {
    color: white;
    font-size: 22px;
    font-weight: bold;
    //background: #000;
    //width: 500px;
    width: fit-content;
    padding: 10px 30px 10px 30px;
    border-color: white;
    border-bottom-width: 2px;
    //border-bottom-right-radius: 15px;
    //margin-top: 10px;
    margin-left: 20px;
  }

  main {
    flex: 1 0;
    height: 100%;
    overflow: hidden;
    margin-top: 10px;
  }
}
</style>