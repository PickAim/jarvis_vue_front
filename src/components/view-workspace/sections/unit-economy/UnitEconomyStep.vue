<script setup lang="ts">

</script>

<template>
  <div class="unit-economy-step">
    <div class="step-header">
      <slot name="header"/>
    </div>
    <div class="step-body">
      <slot name="body"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.unit-economy-step {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 40px;

  .step-header {
    color: white;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  .step-body {
    display: flex;
    flex-direction: column;
    color: white;
    overflow: visible;
  }
}
</style>