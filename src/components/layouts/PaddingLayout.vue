<script setup lang="ts">

</script>

<template>
  <div class="padding-layout">
    <slot/>
  </div>
</template>

<style scoped lang="scss">
.padding-layout {
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  width: 100%;
}
</style>