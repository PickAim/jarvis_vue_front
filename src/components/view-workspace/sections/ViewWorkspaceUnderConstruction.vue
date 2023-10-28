<script setup lang="ts">

</script>

<template>
  <div class="under-construction-wrapper">
    <div class="under-construction-labels">
      <h1>Эта страница находится <br> в разработке!</h1>
      <h2>Но не надолго :)</h2>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "src/assets/styles/variables" as var;

.under-construction-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 400px;

  .under-construction-labels {
    display: flex;
    flex-direction: column;
    gap: 100px;
    align-items: center;
    transform: rotate(-10deg);

    h1, h2 {
      user-select: none;
    }

    h1 {
      text-align: center;
      font-size: 60px;
      font-weight: 700;
    }

    h2 {
      font-size: 20px;
    }

    &::before {
      position: absolute;
      content: "[";
      left: -80px;
      top: -80px;
      font-size: 200px;
      color: var.$blue-jarvis-color;
    }

    &::after {
      position: absolute;
      content: "]";
      right: -80px;
      top: -80px;
      font-size: 200px;
      color: var.$green-jarvis-color;
    }
  }
}
</style>