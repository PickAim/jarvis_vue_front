<template>
  <div class="section">
    <h1><slot name="header"></slot></h1>
    <main>
      <slot/>
    </main>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.section{
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: auto;
  height: 100%;
  width: auto;
  background-color: #222;
  padding: 10px 30px;

  h1{
    color: white;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  main{
    flex: 1 0;
    height: 100px;
  }
}
</style>