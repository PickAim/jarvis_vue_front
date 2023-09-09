<script setup lang="ts">

</script>

<template>
  <div class="padding-wrapper">
    <slot/>
  </div>
</template>

<style scoped lang="scss">
.padding-wrapper {
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
}
</style>