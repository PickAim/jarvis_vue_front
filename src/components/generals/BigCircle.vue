<script setup lang="ts">

</script>

<template>
  <div class="circle"/>
</template>

<style scoped lang="scss">
@use "src/assets/styles/variables" as var;

.circle {
  width: 120px;
  height: 120px;
  border-radius: 999px;
  background: linear-gradient(150deg, var.$green-jarvis-color 0%, rgba(0, 0, 0, 0.1) 90%);
  filter: drop-shadow(5px 5px 2px rgba(0, 0, 0, 0.5));
  backdrop-filter: blur(15px);
}
</style>